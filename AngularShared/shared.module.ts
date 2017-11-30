/// <reference path="../typings/index.d.ts" />
/// <reference path="../typings/ts/types/MyDictionary.d.ts" />
/// <reference path="../typings/ts/MyCurrencyList.d.ts" />
/// <reference path="../typings/ts/MyMessage.d.ts" />
/// <reference path="../typings/ts/extensions/FormatterExtension.d.ts" />
/// <reference path="../typings/ts/extensions/FriendlyUrlExtension.d.ts" />

/**
 * This is module of Shared components, services etc. across the Angular Apps
 */
import { NgModule } from "@angular/core";
import { NavMenuComponent } from "./components/navmenu/navmenu.component";
import { LocalizationService } from "./services/localization.service";
import { MyTranslatePipe } from "./pipes/my-translate.pipe";
import { NumberPipe } from "./pipes/number.pipe";
import { SafeHtmlPipe } from "./pipes/safe-html.pipe";
import { LocalizationConfig } from "./config/localization.config";

@NgModule({
    imports: [ ],
    exports: [ ],
    providers: [ 
        // Component to share with other Modules
        NavMenuComponent,
        LocalizationConfig,
        // initLocalization,
        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: initLocalization,
        //     deps: [LocalizationConfig],
        //     multi: true
        // },
        LocalizationService,

        // Pipes to share across angular apps
        SafeHtmlPipe, NumberPipe, MyTranslatePipe,
    ],
    declarations: [ ]
})
export class SharedModule {
    constructor() { }
}