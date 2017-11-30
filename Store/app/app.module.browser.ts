import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
    ]
})
export class AppModule {
    
}

export function getBaseUrl() {
    // return document.getElementsByTagName('base')[0].href;
    const _baseHref = location.origin + '/' + location.pathname;
    return location.origin + '/'; // this is AspNetCore _hostingEnvironment.contentRootPath
}
