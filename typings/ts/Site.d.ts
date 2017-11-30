/// <reference path="../../typings/index.d.ts" />
/// <reference path="MyNotification.d.ts" />
/// <reference path="extensions/FormatterExtension.d.ts" />
/// <reference path="../models/store/ParentCategory.d.ts" />
/// <reference path="../models/store/StoreType.d.ts" />
declare let GetReturnURL: () => Promise<string>;
declare let Loading: (flag: boolean) => Promise<void>;
declare let ShowSocialIcons: () => void;
declare let HideSocialIcons: () => void;
declare let FooterTimer: any;
declare let DisplayFooter: (event?: Event | undefined, target?: HTMLElement | undefined) => void;
