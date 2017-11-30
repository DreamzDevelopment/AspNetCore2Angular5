import { Pipe, Sanitizer, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: Sanitizer, private domSanitizer: DomSanitizer){}

  transform(html: any) {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
}
// import {DomSanitizer} from '@angular/platform-browser';

// constructor(sanitizer: DomSanitizationService) {
//   this.backgroundImageStyle = sanitizer.bypassSecurityTrustStyle('url(' + this.image + ')');
//   // for HTML
//   // this.backgroundImageStyle = sanitizer.bypassSecurityTrustHtml(...);

// }
// @Pipe({name: 'safeStyle'})
// export class Safe {
//   constructor(private sanitizer:Sanitizer){}

//   transform(style) {
//     return this.sanitizer.bypassSecurityTrustStyle(style);
//     // return this.sanitizer.bypassSecurityTrustHtml(style);
//     // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
//   }
// }
// <div [ngStyle]="someStyle | safeStyle"></div>
// with

// someHtml = `<a href="#" onClick="alert(document.cookie);">click to see the awesome</a>`;