import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { StoreService } from "../../services/store.service";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
    selector: 'store-list',
    templateUrl: './storelist.component.html',
    styleUrls: [ './storelist.component.scss' ]
})
export class StoreListComponent {
    storeTypes: Observable<Array<StoreType>>;
    lockPanel = false;
    @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() close: EventEmitter<any> = new EventEmitter();
    constructor(private storeService: StoreService, private _sanitizer: DomSanitizer) {
        
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getStores();
    }
    getStores() {
        this.storeTypes = this.storeService.getStores() || Observable.of<StoreType[]>([]);
    }
    sanitizeImage(image: string) {
        return this._sanitizer.bypassSecurityTrustStyle(`${image}`);
    }
    getFriendlyTitle(str : string) : string 
    {
        return FriendlyUrlExtension.GetFriendlyTitle(str);
    }
    lockUnlockPanel(event: Event) {
        this.lockPanel = !this.lockPanel;
        if (this.lockPanel) {
            this.open.emit('store-list');
        } else {
            this.close.emit(null);
        }
    }
}