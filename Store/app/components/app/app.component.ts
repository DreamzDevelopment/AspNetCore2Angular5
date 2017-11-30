import { Component, AfterViewInit, OnInit, Inject } from '@angular/core';
import { Language, LocaleService, TranslationService } from 'angular-l10n';
import { LocalizationService } from '../../../../AngularShared/services/localization.service';
import { Observable } from 'rxjs/Observable';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

declare let requestIdleCallback: any;
/**
 * 
 * @export
 * @class AppComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
@Component({
    selector: 'app-store',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    // localization and globalization variables
    // localizationData: Observable<JSON[]>;
    @Language() lang: string;
    language: string = '';
    country: string = '';
    currency: string = '';
    // ric = require('request-idle-callback');
    
    constructor(
        public localizationService: LocalizationService,
        public locale: LocaleService, private translation: TranslationService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        
    }
    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        // this.localizationService.getLocalizationData().subscribe((data: any) => {
        //     console.log(JSON.parse(data));
        // });
        // this.ric.requestIdleCallback(this.myNonEssentialWork);
        if (isPlatformBrowser(this.platformId)) {
            // Client only code.
            this.setCurrentCulture();
         }
    }
    ngAfterViewInit() {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        // if ('requestIdleCallback' in window) {
        //     console.log('// Do what you’d do in idle time.');
        //     requestIdleCallback(this.myNonEssentialWork, { timeout: 10 * 1000 }); // wait 10 secs before
        //   } else {
        //     console.log('// Do what you’d do today.');
        //     const t0 = setTimeout( async () => {
        //         this.localizationData = this.localizationService.getLocalizationData();
        //         clearTimeout(t0);
        //       }, 10 * 1000);
        //   }
    }

/**..................................................................................................................................................
 * Set Locale and Localization // set currency in app.Component.ts, set it independent of Culture..
 * if there is no currency convert available // implement currencyConvert api or use third party api..
 .................................................................................................................................................*/
    public setCurrentCulture(): void 
    {
        let selectedCulture: string = <string>$("#selectLanguage select").val();
        this.language = selectedCulture.substring(0, selectedCulture.indexOf('-'));
        this.country = selectedCulture.substring(selectedCulture.indexOf('-') + 1);
        this.currency = 'BDT';
        
        // this.locale.definePreferredLocale('en', 'US');

        // set currency in app.Component.ts, set it independent of Culture..
        // * if there is no currency convert available // implement currencyConvert api or use third party api..
        if(this.language && this.country) {
            switch (this.country) { // if(this.country === 'US') { this.currency = 'USD'; } // default currency only 'BDT', interface
                // will be implemented for display as in different currency, payment only 'BDT'
                case 'BD':
                    this.currency = 'BDT';
                    break;
                case 'US':
                    this.currency = 'BDT';
                    break;
                default:
                    this.currency = 'BDT';
                    break;
            }
            this.changeCulture(this.language, this.country, this.currency);
        }
            // this.localization.translationProvider('../../i18n/locale-'); // Required: initializes the translation provider with the given path prefix.
            // this.localization.updateTranslation(); // Need to update the translation.
    }
    public changeCulture(language: string, country: string, currency: string) 
    {
        // this.locale.setCurrentLocale(language, country);
        this.locale.setDefaultLocale(language, country);
        
        // this.locale.setCurrentLanguage(language);
        this.locale.setCurrentCurrency(currency);
    }

    public changeCurrency(currency: string) {
        this.locale.setCurrentCurrency(currency);
    }
/**..................................................................................................................................................
* End Set Locale and Localization 
.................................................................................................................................................*/
    // myNonEssentialWork = async (deadline: any) => {
    //     while (deadline.timeRemaining() > 0 || deadline.didTimeout) { 
    //         this.localizationData = this.localizationService.getLocalizationData();
    //             // .do(() => { })
    //             // .subscribe(
    //             //     (data: JSON[]) => {
    //             //         console.log(data);
    //             //     },
    //             //     (err: any) => {

    //             //     },
    //             //     () => {

    //             //     }
    //             // )
            
    //     }
    // }
    
}
    
    