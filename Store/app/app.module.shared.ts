
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LocalizationModule, TranslationModule, LocaleService, TranslationService } from 'angular-l10n';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

// Shared module, components, services across the Client Angular Apps
import { SharedModule } from '../../AngularShared/shared.module';
import { LocalizationConfig, initLocalization } from '../../AngularShared/config/localization.config';

import { NavMenuComponent } from '../../AngularShared/components/navmenu/navmenu.component';
import { StoreListComponent } from './components/storelist/storelist.component';
import { StoreService } from './services/store.service';
import { StoreTypeComponent } from './components/storetype/storetype.component';
import { appRoutingProviders, routing } from './app.routing';
import { LocalizationService } from '../../AngularShared/services/localization.service';
import { SafeHtmlPipe } from '../../AngularShared/pipes/safe-html.pipe';
import { NumberPipe } from '../../AngularShared/pipes/number.pipe';
import { MyTranslatePipe } from '../../AngularShared/pipes/my-translate.pipe';

@NgModule({
    declarations: [
        AppComponent, HomeComponent, StoreTypeComponent,
        // Navigation Menu
        NavMenuComponent, StoreListComponent,

        // Pipes
        SafeHtmlPipe, NumberPipe, MyTranslatePipe,    
    ],
    imports: [
        CommonModule, HttpModule, HttpClientModule, FormsModule, routing,
        TranslationModule.forRoot(), // 
        LocalizationModule.forRoot(), // New instance of LocalizationService.
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy }, // Using html5 Url structure
        appRoutingProviders,
        LocalizationConfig,
        {
            provide: APP_INITIALIZER,
            useFactory: initLocalization,
            deps: [LocalizationConfig],
            multi: true
        },
        LocalizationService, StoreService,                 
    ]
})
export class AppModuleShared {
    constructor() {
        // constructor(public locale: LocaleService, public translation: TranslationService) {
        // this.locale.addConfiguration()
        //     .addLanguages(['en', 'bn'])
        //     .setCookieExpiration(30)
        //     .defineDefaultLocale('en', 'US')
        //     .defineCurrency('BDT');

        // this.translation.addConfiguration()
        //     .addProvider('/i18n/locale-');

        // this.translation.init();
    }
}
