# AspNet Core 2+ Angular Core 5+

Asp.Net Core 2+ &amp; Angular (5+) multi apps supported, Webpack full featured application,
integrate Angular Core 5.0+ app with AspNet Core Server Prerendering.

## Aspnet Core Server Pre-rendering

## Repository to Workspace

    [Note: You must set Required Section of 'app.settings.production.json', to the dotnet User-Secrets, see ## User Secrets ]
    [Note: You must set Required Section of 'app.settings.production.json', to the dotnet User-Secrets, see ## User Secrets ]
    [Note: You must set Required Section of 'app.settings.production.json', to the dotnet User-Secrets, see ## User Secrets ]

    - dotnet restore
    - npm install
    - npm run npm-libraries
    - npm shrinkwrap [ optional ]

## Migration settings

    In app.settings.json, there are 3 settings in 'MigrateAndSample' section,
    configure as you need

### Database Migration

    For creating Main database [ SQL Server | SQLite ], which is also (Identity | User) Database
    - dotnet ef migrations add Initial -c SQLServerContext

    For Creating Secondary database [SQLite | any relational database] , which is used for non secured data, such as Images and Media, Site Navigation Menus
    - dotnet ef migrations add Initial -c SQLiteContext -o Migrations/Sqlite

    [Note: Applying migrations and calling sample data injection, is automatic. When app runs with 'dotnet run' ]
    [PS: see settings in 'app.settings.json' ]

## Database settings

### Database selection

    In app.settings.json, there are 2 settings in 'Database' section,
    configure as you need.

### Database connection

    In app.settings.json, there are connection strings and database names in 'ConnectionStrings' section,
    configure as you need.

## User Secrets

    This app is using dotnet user-secrets service, to save and use User Related information,
    such infos are Admin [UserName, Password, Role, Email ] etc.
    And, for DatabaseAdmin[UserName, Password] etc.

    Set these settings in User-Secrets by using the commented lines in 'app.settings.production.json'.

## Localization [SQL Server | SQLite], any Relational Database

    This app contains, SQL Localization, inspired by Damien Bod's - https://damienbod.com/,
    AspNetCore Localization project.

    The local version is with few major customization -
        - When user changes current culture to other, the localization caches rebuild [ this is available in original version ],
            in addition to that, this also rebuild client [Angular or any other Client App ] repository such as 'i18n'.
        - One of the major changes is, the local version translates according to the sentence
        - English (US), is using as base [culture = language], so the keys are the english version of translate content
         In a result, it does not require to add database entry for base language [ which you can modify to your choice of language = culture ]
        - There is single database for both Server [ AspNetCore ] and Client [ Angular or any other Client App ], central management of key-value pair
        - And many more changes, you can find there

    [Must execute following commands ]
    [Must execute following commands ]
    [Must execute following commands ]
        - dotnet ef migrations add Initial -c LocalizationModelContext -o Migrations/Localization
        - dotnet ef database update -c LocalizationModelContext

## Run app in development mode

    - dotnet run

## Run in Production mode | Publish App

    - Comment 'UseEnvironment' in 'Program.cs'

    - dotnet run

### Publish APP

    [Note: must comment the line in 'Program.cs' - 'UseEnvironments('Development')' ]

    - npm run dotnet-publish

    To run application from published folder
    - dotnet AspNetCore2Angular5.dll

    To publish to hosting server, you choose your preferred method and host and follow their instructions
    
# Thanks
    
    Damien Bod, Asadsahi, MarkPieszak and many more open source community superstars
    
    [ ]
