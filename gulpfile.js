

    var gulp = require('gulp'),
        gutil = require('gulp-util'),
        concat = require('gulp-concat'),
        cssmin = require('gulp-cssmin'),
        del = require("del"),
        merge = require('merge3'),
        rename = require('gulp-rename'),
        runseq = require('run-sequence'),
        sass = require('gulp-sass'),
        sourceMaps = require('gulp-sourcemaps'),
        typescript = require('gulp-typescript'),
        uglify = require('gulp-uglify'),
        gzip = require('gulp-gzip')
        ;

    gulp.task('default', () => {
    // place code for your default task here
    } );
/**
* NPM packages to wwwroot/lib folder
*/
    // Copy NPM packages from node_modules folder to /wwwroot of ASP.Net default serving folder
    gulp.task('npm-libraries', (done) => {
        runseq('clean-lib', 'copy-npm-lib', 'copy-lib-to-dist', done);
    });
    // Clean /wwwroot/lib folder, where all the Dependencies/Package resides for client serve
    gulp.task('clean-lib', () => {
        return del('./wwwroot/lib/*');
    });
    // Copy Packages from node_modules to /wwwroot/lib
    gulp.task('copy-npm-lib', (done) => {
        runseq('npm-bootstrap', 'npm-font-awesome', 'npm-jquery', 'npm-jquery-migrate', 'npm-jquery-lazyload', 'npm-jquery-validation', 'npm-jquery-validation-unobtrusive', 
        'npm-tether', 'npm-typescript',
            done);
    });

    // Copy bootstrap library to /wwwroot/lib, the default client service folder of ASP.Net application
    gulp.task('npm-bootstrap', () => {
        return gulp.src(['./node_modules/bootstrap/**/*.*'])
                .pipe(gulp.dest('./wwwroot/lib/bootstrap/'));
    });
    // Copy font-awesome library to /wwwroot/lib, the default client service folder of ASP.Net application
    gulp.task('npm-font-awesome', () => {
        return gulp.src(['./node_modules/font-awesome/**/*.*'])
                .pipe(gulp.dest('./wwwroot/lib/font-awesome/'));
    });
    // Copy jquery library to /wwwroot/lib, the default client service folder of ASP.Net application
    gulp.task('npm-jquery', () => {
        return gulp.src(['./node_modules/jquery/**/*.*'])
                .pipe(gulp.dest('./wwwroot/lib/jquery/'));
    });
    // Copy jquery library to /wwwroot/lib, the default client service folder of ASP.Net application
    gulp.task('npm-jquery-migrate', () => {
        return gulp.src(['./node_modules/jquery-migrate/**/*.*'])
                .pipe(gulp.dest('./wwwroot/lib/jquery-migrate/'));
    });
    // Copy jquery-lazyload library to /wwwroot/lib, the default client service folder of ASP.Net application
    gulp.task('npm-jquery-lazyload', () => {
        return gulp.src(['./node_modules/jquery-lazyload/**/*.*'])
                .pipe(gulp.dest('./wwwroot/lib/jquery-lazyload/'));
    });
    // Copy jquery-validation library to /wwwroot/lib, the default client service folder of ASP.Net application
    gulp.task('npm-jquery-validation', () => {
        return gulp.src(['./node_modules/jquery-validation/**/*.*'])
                .pipe(gulp.dest('./wwwroot/lib/jquery-validation/'));
    });
    // Copy jquery-validation-unobtrusive library to /wwwroot/lib, the default client service folder of ASP.Net application
    gulp.task('npm-jquery-validation-unobtrusive', () => {
        return gulp.src(['./node_modules/jquery-validation-unobtrusive/**/*.*'])
                .pipe(gulp.dest('./wwwroot/lib/jquery-validation-unobtrusive/'));
    });
    // Copy tether library to /wwwroot/lib, the default client service folder of ASP.Net application
    gulp.task('npm-tether', () => {
        return gulp.src(['./node_modules/tether/**/*.*'])
                .pipe(gulp.dest('./wwwroot/lib/tether/'));
    });
    // Copy typescript library to /wwwroot/lib, the default client service folder of ASP.Net application
    gulp.task('npm-typescript', () => {
        return gulp.src(['./node_modules/typescript/**/*.*'])
                .pipe(gulp.dest('./wwwroot/lib/typescript/'));
    });

/**
* END -> NPM packages to wwwroot/lib folder
*/

/**
* NPM packages to wwwroot/dist/lib folder
*/
    // Copy NPM packages from node_modules folder to /wwwroot of ASP.Net default serving folder
    gulp.task('copy-lib-to-dist', (done) => {
        runseq('clean-dist-lib', 'copy-npm-lib-dist', done);
    });
    // Clean /wwwroot/lib folder, where all the Dependencies/Package resides for client serve
    gulp.task('clean-dist-lib', () => {
        return del('./wwwroot/dist/lib/*');
    });
    // Copy Packages from node_modules to /wwwroot/lib
    gulp.task('copy-npm-lib-dist', (done) => {
        return runseq('copy-bootstrap', 'copy-font-awesome', 'copy-font-awesome-fonts', 'copy-jquery', 'copy-jquery-validation',
            done);
    });
    // Copy bootstrap library to /wwwroot/dist/lib, the default folder for include with publish of ASP.Net application
    gulp.task('copy-bootstrap', () => {
        return gulp.src(['./wwwroot/lib/bootstrap/dist/**/*.*' ])
                .pipe(gulp.dest('./wwwroot/dist/lib/bootstrap/'));
    });
    // Copy font-awesome library to /wwwroot/dist/lib, the default folder for include with publish of ASP.Net application
    gulp.task('copy-font-awesome', () => {
        return gulp.src(['./wwwroot/lib/font-awesome/css/**/*.*' ])
                .pipe(gulp.dest('./wwwroot/dist/lib/font-awesome/'));
    });
    // Copy font-awesome fonts library to /wwwroot/dist/lib, the default folder for include with publish of ASP.Net application
    gulp.task('copy-font-awesome-fonts', () => {
        return gulp.src([ './wwwroot/lib/font-awesome/fonts/**/*.*' ])
                .pipe(gulp.dest('./wwwroot/dist/lib/fonts/'));
    });
    // Copy jquery library to /wwwroot/dist/lib, the default folder for include with publish of ASP.Net application
    gulp.task('copy-jquery', () => {
        return gulp.src(['./wwwroot/lib/jquery/dist/**/*.*' ])
                .pipe(gulp.dest('./wwwroot/dist/lib/jquery/'));
    });
    // Copy jquery-validation library to /wwwroot/dist/lib, the default folder for include with publish of ASP.Net application
    gulp.task('copy-jquery-validation', () => {
        return gulp.src(['./wwwroot/lib/jquery-validation/dist/**/*.*', './wwwroot/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.js' ])
                .pipe(gulp.dest('./wwwroot/dist/lib/jquery-validation/'));
    });
/**
* END -> NPM packages to wwwroot/dist/lib folder
*/

/**
* Sass configuration
*/
    gulp.task('sass', () => {
        gulp.src(['./wwwroot/sass/**/*.scss', './wwwroot/ts/**/*.scss'])
            .pipe(sourceMaps.init())
            .pipe(sass())
            .pipe(
                gulp.dest( (f) => {
                    return 'wwwroot/dist/' + f.base.split('wwwroot/')[1];
                })
            )
            .pipe(rename(function (path) {
                path.basename += '.min';
            }))
            .pipe(cssmin())
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest(function(f) {
                return f.base;
            }));
    });
    gulp.task('sass-watch', ['sass'], () => {
        gulp.watch(['./wwwroot/sass/**/*.scss', './wwwroot/ts/**/*.scss'], ['sass']);
    });
/**
* END -> Sass configuration
*/

/**
 * Layout bundle
 */
    gulp.task('layout-bundle', (done) => {
        return runseq('layout', 'layout-store', done);
    });
/**
 * END -> Layout bundle
 */
/**
 * _Layout.cshtml -- CSS and JS bundle 
 */
    gulp.task('layout', (done) => {
        runseq('layout-clean', 
            // 'layout-lib-css-bundle', 
            'layout-package-css-bundle', 'layout-css-bundle', 
            'layout-lib-js-bundle', 
            'layout-package-js-bundle', 'layout-js-bundle', 
            done);
    });
    gulp.task('layout-clean', (done) => {
        return runseq('layout-clean-css', 'layout-clean-js', done);
    });
    gulp.task('layout-clean-css', () => {
        return del('wwwroot/dist/layout/css/');
    });
    gulp.task('layout-clean-js', () => {
        return del('wwwroot/dist/layout/js/');
    });
    // libs are loading from cdn
    // gulp.task('layout-lib-css-bundle', () => {
    //     return gulp.src([

    //         ])
    //         .pipe(sourceMaps.init())
    //         .pipe(concat('layout.lib.css'))
    //         .pipe(gulp.dest('wwwroot/dist/layout/css/'))
    //         .pipe(rename('layout.lib.min.css'))
    //         .pipe(cssmin())
    //         .pipe(sourceMaps.write('./'))
    //         .pipe(gulp.dest('wwwroot/dist/layout/css/'))
    //         .pipe(gzip())
    //         .pipe(gulp.dest('wwwroot/dist/layout/css/'));
    // });
    gulp.task('layout-package-css-bundle', () => {
        return gulp.src([
                'wwwroot/packages/dl-menu/component.css'
            ])
            .pipe(sourceMaps.init())
            .pipe(concat('layout.package.css'))
            .pipe(gulp.dest('wwwroot/dist/layout/css/'))
            .pipe(rename('layout.package.min.css'))
            .pipe(cssmin())
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest('wwwroot/dist/layout/css/'))
            .pipe(gzip())
            .pipe(gulp.dest('wwwroot/dist/layout/css/'));
    });
    gulp.task('layout-css-bundle', () => {
        return gulp.src([
            'wwwroot/dist/sass/Custom.animate-css.css', 'wwwroot/dist/sass/Custom.bootstrap.css', 'wwwroot/dist/sass/SiteAnimation.css', 'wwwroot/dist/sass/contact-us/ContactUs.css',
            'wwwroot/dist/sass/image-modal/ImageModal.css', 'wwwroot/dist/sass/media-image/MediaImage.css', 'wwwroot/dist/sass/menu-icon/MenuIcon.css', 'wwwroot/dist/sass/menu-panel/MenuPanel.css',
            'wwwroot/dist/sass/message-section/MessageSection.css', 'wwwroot/dist/sass/popup/Popup.css', 'wwwroot/dist/sass/site-navigation/SiteNavigation.css', 'wwwroot/dist/sass/social-panel/SocialPanel.css',
            'wwwroot/dist/sass/tooltip/Tooltip.css', 'wwwroot/dist/ts/nav-menu/NavMenu.css', 'wwwroot/dist/sass/SiteIcon.css', 'wwwroot/dist/sass/Site.css',
            ])
            .pipe(sourceMaps.init())
            .pipe(concat('layout.css'))
            .pipe(gulp.dest('wwwroot/dist/layout/css/'))
            .pipe(rename('layout.min.css'))
            .pipe(cssmin())
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest('wwwroot/dist/layout/css/'))
            .pipe(gzip())
            .pipe(gulp.dest('wwwroot/dist/layout/css/'));
    });
    // some libs are loading from cdn
    gulp.task('layout-lib-js-bundle', () => {
        return gulp.src([
                'wwwroot/lib/tether/dist/js/tether.js', 'wwwroot/lib/jquery-lazyload/jquery.lazyload.js'
            ])
            .pipe(sourceMaps.init())
            .pipe(concat('layout.lib.js'))
            .pipe(gulp.dest('wwwroot/dist/layout/js/'))
            .pipe(rename('layout.lib.min.js'))
            .pipe(uglify())
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest('wwwroot/dist/layout/js/'))
            .pipe(gzip())
            .pipe(gulp.dest('wwwroot/dist/layout/js/'));
    });
    gulp.task('layout-package-js-bundle', () => {
        return gulp.src([
                'wwwroot/packages/dl-menu/modernizr.custom.js', 'wwwroot/packages/dl-menu/component.js'
            ])
            .pipe(sourceMaps.init())
            .pipe(concat('layout.package.js'))
            .pipe(gulp.dest('wwwroot/dist/layout/js/'))
            .pipe(rename('layout.package.min.js'))
            .pipe(uglify())
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest('wwwroot/dist/layout/js/'))
            .pipe(gzip())
            .pipe(gulp.dest('wwwroot/dist/layout/js/'));
    });
    gulp.task('layout-js-bundle', () => {
        return gulp.src([
                'wwwroot/dist/models/SiteNavigationModel.js', 'wwwroot/dist/ts/animations/AnimationControl.js', 'wwwroot/dist/ts/nav-menu/NavMenu.js',
                'wwwroot/dist/ts/toolbar/Toolbar.js', 'wwwroot/dist/ts/timer-counter/TimerCounter.js', 'wwwroot/dist/ts/extensions/FormatterExtension.js',
                'wwwroot/dist/ts/validators/MyValidator.js', 'wwwroot/dist/ts/ApiCallService.js', 'wwwroot/dist/ts/MyMessage.js',
                'wwwroot/dist/ts/MyNotification.js', 'wwwroot/dist/ts/MyResponse.js', 'wwwroot/dist/ts/Site.js',
            ])
            .pipe(sourceMaps.init())
            .pipe(concat('layout.js'))
            .pipe(gulp.dest('wwwroot/dist/layout/js/'))
            .pipe(rename('layout.min.js'))
            .pipe(uglify())
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest('wwwroot/dist/layout/js/'))
            .pipe(gzip())
            .pipe(gulp.dest('wwwroot/dist/layout/js/'));
    });
 /**
 * _Layout.cshtml -- CSS and JS bundle 
 */

 /**
 * _LayoutStore.cshtml -- CSS and JS bundle 
 */
    gulp.task('layout-store', (done) => {
        runseq('layout-store-clean', 
            // 'layout-store-lib-css-bundle', 
            'layout-store-package-css-bundle', 'layout-store-css-bundle', 
            'layout-store-lib-js-bundle', 
            'layout-store-package-js-bundle', 'layout-store-js-bundle', 
            done);
    });
    gulp.task('layout-store-clean', (done) => {
        return runseq('layout-store-clean-css', 'layout-store-clean-js', done);
    });
    gulp.task('layout-store-clean-css', () => {
        return del('wwwroot/dist/layout-store/css/');
    });
    gulp.task('layout-store-clean-js', () => {
        return del('wwwroot/dist/layout-store/js/');
    });
    // libs are loading from cdn
    // gulp.task('layout-store-lib-css-bundle', () => {
    //     return gulp.src([

    //         ])
    //         .pipe(sourceMaps.init())
    //         .pipe(concat('layout-store.lib.css'))
    //         .pipe(gulp.dest('wwwroot/dist/layout-store/css/'))
    //         .pipe(rename('layout-store.lib.min.css'))
    //         .pipe(cssmin())
    //         .pipe(sourceMaps.write('./'))
    //         .pipe(gulp.dest('wwwroot/dist/layout-store/css/'))
    //         .pipe(gzip())
    //         .pipe(gulp.dest('wwwroot/dist/layout-store/css/'));
    // });
    gulp.task('layout-store-package-css-bundle', () => {
        return gulp.src([
                'wwwroot/packages/dl-menu/component.css'
            ])
            .pipe(sourceMaps.init())
            .pipe(concat('layout-store.package.css'))
            .pipe(gulp.dest('wwwroot/dist/layout-store/css/'))
            .pipe(rename('layout-store.package.min.css'))
            .pipe(cssmin())
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest('wwwroot/dist/layout-store/css/'))
            .pipe(gzip())
            .pipe(gulp.dest('wwwroot/dist/layout-store/css/'));
    });
    gulp.task('layout-store-css-bundle', () => {
        return gulp.src([
            'wwwroot/dist/sass/Custom.animate-css.css', 'wwwroot/dist/sass/Custom.bootstrap.css', 'wwwroot/dist/sass/SiteAnimation.css', 'wwwroot/dist/sass/contact-us/ContactUs.css',
            'wwwroot/dist/sass/image-modal/ImageModal.css', 'wwwroot/dist/sass/media-image/MediaImage.css', 'wwwroot/dist/sass/menu-icon/MenuIcon.css', 'wwwroot/dist/sass/menu-panel/MenuPanel.css',
            'wwwroot/dist/sass/message-section/MessageSection.css', 'wwwroot/dist/sass/popup/Popup.css', 'wwwroot/dist/sass/site-navigation/SiteNavigation.css', 'wwwroot/dist/sass/social-panel/SocialPanel.css',
            'wwwroot/dist/sass/tooltip/Tooltip.css', 'wwwroot/dist/ts/nav-menu/NavMenu.css', 'wwwroot/dist/sass/SiteIcon.css', 'wwwroot/dist/sass/Site.css',
            ])
            .pipe(sourceMaps.init())
            .pipe(concat('layout-store.css'))
            .pipe(gulp.dest('wwwroot/dist/layout-store/css/'))
            .pipe(rename('layout-store.min.css'))
            .pipe(cssmin())
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest('wwwroot/dist/layout-store/css/'))
            .pipe(gzip())
            .pipe(gulp.dest('wwwroot/dist/layout-store/css/'));
    });
    // some libs are loading from cdn
    gulp.task('layout-store-lib-js-bundle', () => {
        return gulp.src([
                'wwwroot/lib/tether/dist/js/tether.js', 'wwwroot/lib/jquery-lazyload/jquery.lazyload.js'
            ])
            .pipe(sourceMaps.init())
            .pipe(concat('layout-store.lib.js'))
            .pipe(gulp.dest('wwwroot/dist/layout-store/js/'))
            .pipe(rename('layout-store.lib.min.js'))
            .pipe(uglify())
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest('wwwroot/dist/layout-store/js/'))
            .pipe(gzip())
            .pipe(gulp.dest('wwwroot/dist/layout-store/js/'));
    });
    gulp.task('layout-store-package-js-bundle', () => {
        return gulp.src([
                'wwwroot/packages/dl-menu/modernizr.custom.js', 'wwwroot/packages/dl-menu/component.js'
            ])
            .pipe(sourceMaps.init())
            .pipe(concat('layout-store.package.js'))
            .pipe(gulp.dest('wwwroot/dist/layout-store/js/'))
            .pipe(rename('layout-store.package.min.js'))
            .pipe(uglify())
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest('wwwroot/dist/layout-store/js/'))
            .pipe(gzip())
            .pipe(gulp.dest('wwwroot/dist/layout-store/js/'));
    });
    gulp.task('layout-store-js-bundle', () => {
        return gulp.src([
                'wwwroot/dist/ts/types/MyDictionary.js',
                'wwwroot/dist/models/SiteNavigationModel.js', 'wwwroot/dist/ts/animations/AnimationControl.js', 'wwwroot/dist/ts/nav-menu/NavMenu.js',
                'wwwroot/dist/ts/toolbar/Toolbar.js', 'wwwroot/dist/ts/timer-counter/TimerCounter.js', 'wwwroot/dist/ts/extensions/FormatterExtension.js',
                'wwwroot/dist/ts/validators/MyValidator.js', 'wwwroot/dist/ts/ApiCallService.js', 'wwwroot/dist/ts/MyMessage.js',
                'wwwroot/dist/ts/MyNotification.js', 'wwwroot/dist/ts/MyResponse.js', 'wwwroot/dist/ts/Site.js',
            ])
            .pipe(sourceMaps.init())
            .pipe(concat('layout-store.js'))
            .pipe(gulp.dest('wwwroot/dist/layout-store/js/'))
            .pipe(rename('layout-store.min.js'))
            .pipe(uglify())
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest('wwwroot/dist/layout-store/js/'))
            .pipe(gzip())
            .pipe(gulp.dest('wwwroot/dist/layout-store/js/'));
    });
/**
* _Layout.cshtml -- CSS and JS bundle 
*/