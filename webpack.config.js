const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJs = require('uglify-js');
// const extractSass = 
    // new ExtractTextPlugin({
    //     filename: "[name].[contenthash].css",
        
    // });
    new ExtractTextPlugin({
        disable: process.env.NODE_ENV === "development",
        filename:  (getPath) => {
            return getPath('[name].css').replace('css/js', 'css');
        },
        allChunks: true
    }),

module.exports = (env) => {
    // Configuration in common to both client-side and server-side bundles
    const isDevBuild = !(env && env.prod);
    const sharedConfig = {
        stats: { modules: false },
        context: __dirname,
        resolve: { extensions: [ '.js', '.ts' ] },
        output: {
            filename: '[name].js',
            publicPath: 'dist/store/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        module: {
            rules: [
                { 
                    // 'test' is commonly used to match the file extension
                    test: /\.ts$/, 
                    // 'include' is commonly used to match the directories
                    
                    include: [
                        // /AngularShared/,
                        // /Store/
                        path.resolve(__dirname, './AngularShared'),
                        path.resolve(__dirname, './Store'),
                        path.resolve(__dirname, './wwwroot/ts/extensions')
                    ],
                    // 'exclude' should be used to exclude exceptions
                    // try to prefer 'include' when possible
                    exclude: [
                        // /wwwroot\/ts\/components/
                        path.resolve(__dirname, './wwwroot')
                    ],
                    use: isDevBuild ? ['awesome-typescript-loader?silent=true', 'angular2-template-loader'] : '@ngtools/webpack' 
                },
                { test: /\.html$/, use: 'html-loader?minimize=false' },
                { test: /\.css$/, use: [ 'to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize' ] },

                {
                    test: /\.(scss|sass)$/,
                    include: [
                        path.resolve(__dirname, './AngularShared'),
                        path.resolve(__dirname, './Store')
                    ],
                    exclude: [
                        path.resolve(__dirname, './node_modules'),
                    ],
                    // use: [
                    //     { loader: 'css-loader',
                    //       options: {
                    //         }
                    //     },
                    //     // { loader: 'postcss-loader' },
                    //     {
                    //       loader: isDevBuild ? 'sass-loader' : 'better-sass-loader',
                    //       options: {
                    //         includePaths: [ './wwwroot/sass/', './AngularShared/' ]
                    //       }
                    //     }
                    // ],
                    // use: ExtractTextPlugin.extract({
                    //     // use style-loader in development
                    //     fallback: 'style-loader',
                    //     use: [
                    //         'css-loader',
                    //         isDevBuild ? 'sass-loader' : 'sass-loader?minimize'
                    //     ],
                        
                    // }),
                    use: [
                        'to-string-loader', 'css-loader', isDevBuild ? 'sass-loader' : 'better-sass-loader' 
                    ]
                },
                // {
                //     test: /\.sass$/,
                //     exclude: [
                //         path.resolve(__dirname, './AngularShared'),
                //         path.resolve(__dirname, './Store')
                //     ],
                //     use: extractSass.extract({
                //         use: [{
                //             loader: 'css-loader'
                //         }, {
                //             loader: isDevBuild ? 'sass-loader' : 'sass-loader?minimize'
                //         }],
                //         // use style-loader in development
                //         fallback: 'style-loader'
                //     }),
                //     // use: [
                //     //     'to-string-loader', 'style-loader', 'css-loader', isDevBuild ? 'sass-loader' : 'sass-loader?minimize'
                //     // ]
                // },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery',  }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            // new ExtractTextPlugin({
            //     // disable: process.env.NODE_ENV === "development",
            //     filename:  (getPath) => {
            //         return getPath('[name].css'); //.replace('css/js', 'css');
            //     },
            //     allChunks: true
            // }),
            new CheckerPlugin(),
                     
        ]
    };

    // Configuration for client-side bundle suitable for running in browsers
    const clientBundleOutputDir = './wwwroot/dist/store';
    const clientBundleConfig = merge(sharedConfig, {
        entry: { 'main-client': './Store/boot.browser.ts' },
        output: { path: path.join(__dirname, clientBundleOutputDir) },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/store/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new AotPlugin({
                tsConfigPath: './tsconfig.json',
                compilerOptions: { 
                    charset: 'utf-8'
                },
                entryModule: path.join(__dirname, 'Store/app/app.module.browser#AppModule'),
                exclude: ['./**/*.server.ts']
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                },
                sourceMap: false,
                fromString: true
            })
        ])
    });

    // Configuration for server-side (pre-rendering) bundle suitable for running in Node
    const serverBundleConfig = merge(sharedConfig, {
        resolve: { mainFields: ['main'] },
        entry: { 'main-server': './Store/boot.server.ts' },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./Store/dist/vendor-manifest.json'),
                sourceType: 'commonjs2',
                name: './vendor'
            })
        ].concat(isDevBuild ? [] : [
            // Plugins that apply in production builds only
            new AotPlugin({
                tsConfigPath: './tsconfig.json',
                compilerOptions: { 
                    charset: 'utf-8'
                },
                entryModule: path.join(__dirname, 'Store/app/app.module.server#AppModule'),
                exclude: ['./**/*.browser.ts']
            }),
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                },
                sourceMap: true
            })
        ]),
        output: {
            libraryTarget: 'commonjs',
            path: path.join(__dirname, './Store/dist')
        },
        target: 'node',
        devtool: 'inline-source-map'
    });

    return [clientBundleConfig, serverBundleConfig];
};
