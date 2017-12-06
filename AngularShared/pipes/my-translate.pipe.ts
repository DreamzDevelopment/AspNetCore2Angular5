
import { Pipe, PipeTransform, } from '@angular/core';
import { TranslationService, LocaleService } from 'angular-l10n';
import { Observable } from 'rxjs/Observable';

/**
 * Extend the functionality of angular-l10n translation pipe
 * @export
 * @class MyTranslate
 * @implements {PipeTransform}
 */
@Pipe( {
    name: 'myTranslate'
})
export class MyTranslatePipe implements PipeTransform {
    culture: string;
    constructor(private locale: LocaleService, private translation: TranslationService) {
        this.culture = this.locale.getCurrentLocale();
    }
    transform(value: any, lang?: string, ...args: any[]): string {
        let _value: string = '';
        if(value) {
            // let _values: IKeyValuePair<string,boolean>[] = 
            this.purifyTranslate(value, this.culture).subscribe( (_values: IKeyValuePair<string,boolean>[]) => {
                if(_values && _values.length > 0) {
                    for (let i = 0; i < _values.length; i++) {
                        if(_values[i].Key && _values[i].Value) {
                            this.translation.translateAsync(_values[i].Key, ...args, lang).subscribe((resValue: string) => {
                                _value = _value + resValue;
                            });
                        } else {
                            _value = _value + _values[i].Key;
                        }
                    }
                }
            });
        }
        return _value;
    }
    // Because of dissimilarity of Sentence Structure for different language,
    // best practice to translate the sentence until break, such breaks are ('.', ',', '!' ) etc.
    purifyTranslate(value: any, culture: string): Observable<IKeyValuePair<string,boolean>[]> {
        let _values: IKeyValuePair<string,boolean>[] = [];
        let _value: string = <string>value;
        let length: number = _value.length;
        let stringBuilder : string[] = new Array(length);
        // let prevdash: boolean = false;
        let c : string = '';
        let j = 0;
        let k = 0;
        let prevC: string;
        let nextC: string;
            for (let i = 0; i < _value.length; i++) {
                prevC = c;
                c = _value[i];
                nextC = i == (_value.length - 1) ? ' ' : _value[i + 1]; // Set implicit ' ' space, if end of sentence
                if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') || 
                (c == '\'') || (c == '-') || (c == '/') || (c == '(') || (c == ')') || 
                    (c == ' ' && !(prevC == '!' || prevC == '.' || prevC == ',')) )
                {
                    // stringBuilder.push(c);
                    // // prevdash = false;
                    stringBuilder[k] = c;
                    k++;
                }
                else if (c == '.' || c == ',' || c == '!' || c == '"' || (c == ' ' && nextC == ' ') ) { // End of a sentence, or breaks
                    // stringBuilder.length > 0 ? 
                    // _values.push(new KeyValuePair<string,boolean>(<string>''.concat.apply('', stringBuilder), true)) : '';
                    // stringBuilder = []; // Reset string builder
                    // _values.push(new KeyValuePair<string,boolean>(<string>c, false));
                    // // prevdash = false;

                    if(stringBuilder.length > 0) {
                        let res: string = '';
                        for (let l = 0; l < k; l++)
                        {
                            res = res + stringBuilder[l];
                        }
                        _values[j] = new KeyValuePair<string,boolean>( res, true); // string.Join(string.Empty, stringBuilder)
                        j++;
                    }
                    if(culture == "bn-BD" && c == '.' && nextC == ' ') {
                        /// <summary>
                        /// "|", change with the char is used to end of sentence in your locale for full-stop (.)
                        /// </summary>
                        _values[j] = new KeyValuePair<string,boolean>('|'.toString(), false);
                        j++;
                    } else {
                        _values[j] = new KeyValuePair<string,boolean>(c.toString(), false);
                        j++;
                    }
                    // stringBuilder = new char[length]; // Reset string builder
                    stringBuilder = new Array(length); // Reset string builder
                    k = 0;
                }
                // else if (c >= '0' && c <= '9') // Numbers are translated for each digit
                // {
                //     stringBuilder.length > 0 ? 
                //         _values.push(new KeyValuePair<string,boolean>(<string>''.concat.apply('', stringBuilder), true)) : '';
                //         stringBuilder = []; // Reset string builder
                //         _values.push(new KeyValuePair<string,boolean>(<string>c, true));
                //         // prevdash = false;
                // } 
                else {
                    // else if(c) {
                    // stringBuilder.length > 0 ? 
                    // _values.push(new KeyValuePair<string,boolean>(<string>''.concat.apply('', stringBuilder), true)) : '';
                    // stringBuilder = []; // Reset string builder
                    // const $safeHtml = $('<span [data-safe]="' + super.transform(c) +'"></span>');
                    //     console.log($safeHtml);

                    // _values.push(new KeyValuePair<string,boolean>(c, false));
                    _values[j] = new KeyValuePair<string,boolean>(c.toString(), false);
                    j++;
                    
                    // if(prevdash && c == ' ') { // if already a dash(space) applied and current char is ' '/dash
                        
                    // } else if(c == ' ') { // A space/dash applied before
                    //     _values.push(new KeyValuePair<string,boolean>(<string>c, false));
                    //     prevdash = true;
                    // } else { // Other type of char
                    //     _values.push(new KeyValuePair<string,boolean>(<string>c, false));
                    //     prevdash = false;
                    // }
                } 
                length--;
            }
            // stringBuilder.length > 0 ? 
            //     _values.push(new KeyValuePair<string,boolean>(<string>''.concat.apply('', stringBuilder), true)) : '';
            //     stringBuilder = [];
            if(stringBuilder.length > 0) {
                let res: string = '';
                for (let l = 0; l < k; l++)
                {
                    res = res + stringBuilder[l];
                }
                _values[j] = new KeyValuePair<string,boolean>(res, true);
                j++;
            }
            stringBuilder = new Array(0);
            
        return Observable.of(_values);
    }
}

