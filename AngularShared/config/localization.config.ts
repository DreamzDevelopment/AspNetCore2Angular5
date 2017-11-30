import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { LocaleService, TranslationService } from "angular-l10n";
import { DOCUMENT } from '@angular/platform-browser';
import { isPlatformBrowser } from "@angular/common";
// Advanced initialization.
@Injectable()
export class LocalizationConfig {

    constructor( @Inject(PLATFORM_ID) private platformId: any, public locale: LocaleService, public translation: TranslationService) { 
    }
    
    load(): Promise<any> {
        this.locale.addConfiguration()
            .addLanguage('en', 'ltr')
            .addLanguage('bn', 'ltr')
            .setCookieExpiration(30)
            .defineDefaultLocale('en', 'US')
            .defineCurrency('BDT');
        this.locale.init();
        if (isPlatformBrowser(this.platformId)) { // Resolve http call error in Aspnet Server Pre-Rendering : Url with http get request must be absolute url 
            // Client only code.
            this.translation.addConfiguration()
                .addProvider('/i18n/locale-');
        }
        
 
        let promise: Promise<any> = new Promise((resolve: any) => {
            this.translation.translationChanged.subscribe(() => {
                resolve(true);
            });
        });
 
        this.translation.init();
 
        return promise;
    }
 
}
 
// AoT compilation requires a reference to an exported function.
export function initLocalization(localizationConfig: LocalizationConfig): Function {
    return () => localizationConfig.load();
}
 