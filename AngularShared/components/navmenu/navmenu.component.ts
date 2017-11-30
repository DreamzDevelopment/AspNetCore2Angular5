import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: [ './navmenu.component.scss' ]
})
export class NavMenuComponent implements OnInit {
    openPanel = false; // lock and unlock menu icons panel
    lockPanel = false; // lock and unlock menu-body panel
    panel: string;
    constructor() {
        
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
    openCloseMenu(event: Event) {
        this.openPanel = !this.openPanel;
    }
    onOpen(val: string) { // received observable from menu-item component
        this.lockPanel = true;
        this.openPanel = true;
        this.panel = val;
    }
    onClose(val: string) { // received observable from menu-item component
        this.lockPanel = false;
        this.openPanel = false;
        this.panel = val;
    }
}
