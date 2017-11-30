import { Component, OnInit } from '@angular/core';
import { Language } from 'angular-l10n';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    showNav = false;
    @Language() lang: string;

    constructor() {

    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
    toggleNav(event: Event) {
        
        // $("nav").toggleClass("active");
        // $("li").toggleClass("active");
        this.showNav = !this.showNav;
        // if($(this).text() == "☰") {
        //     $(this).text("×");
        // }
        // else {
        //     $(this).text("☰");
        // }
    }
    
}
