/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Observable, Observer, Subscription } from "rxjs";
export namespace Components {
    interface HoneyApplyStyle {
    }
    interface HoneyDefineStyle {
        /**
          * Referenz auf das Replay Subject als Observable
         */
        "getStyleName$": () => Promise<Observable<string>>;
        /**
          * Trigger recompute theme style.
         */
        "recomputeTheme": () => Promise<void>;
        /**
          * Setzt den neuen Theme und wechselt entsprechend das Child Element aus.
          * @param themeName Name des Themes
         */
        "setNewTheme": (themeName: string) => Promise<void>;
        /**
          * Get the current theme as string in lowercase of tag name.
         */
        "subscribeThemeChangeListener": (observer: Observer<string>) => Promise<Subscription>;
    }
    interface HoneySelectStyle {
        /**
          * Name des zu setzenden Theme z.B. honey-papercss-style
         */
        "themeName": any;
    }
    interface HoneyStyledComponent {
        /**
          * Komma separierte Liste von Namen der zu erzeugenden Slots
         */
        "slotNames": string;
        /**
          * themepostfix of theme name e.g. style when honey-papercss-style
         */
        "themepostfix": string;
        /**
          * themeprefix of theme name e.g. honey when honey-papercss-style
         */
        "themeprefix": string;
    }
    interface HoneyStyledParacomponent {
        /**
          * Parameter für das zu erzeugende Tag
         */
        "parameterlist": any;
        /**
          * themepostfix of theme name e.g. style when honey-papercss-style
         */
        "themepostfix": string;
        /**
          * themeprefix of theme name e.g. honey when honey-papercss-style
         */
        "themeprefix": string;
    }
}
declare global {
    interface HTMLHoneyApplyStyleElement extends Components.HoneyApplyStyle, HTMLStencilElement {
    }
    var HTMLHoneyApplyStyleElement: {
        prototype: HTMLHoneyApplyStyleElement;
        new (): HTMLHoneyApplyStyleElement;
    };
    interface HTMLHoneyDefineStyleElement extends Components.HoneyDefineStyle, HTMLStencilElement {
    }
    var HTMLHoneyDefineStyleElement: {
        prototype: HTMLHoneyDefineStyleElement;
        new (): HTMLHoneyDefineStyleElement;
    };
    interface HTMLHoneySelectStyleElement extends Components.HoneySelectStyle, HTMLStencilElement {
    }
    var HTMLHoneySelectStyleElement: {
        prototype: HTMLHoneySelectStyleElement;
        new (): HTMLHoneySelectStyleElement;
    };
    interface HTMLHoneyStyledComponentElement extends Components.HoneyStyledComponent, HTMLStencilElement {
    }
    var HTMLHoneyStyledComponentElement: {
        prototype: HTMLHoneyStyledComponentElement;
        new (): HTMLHoneyStyledComponentElement;
    };
    interface HTMLHoneyStyledParacomponentElement extends Components.HoneyStyledParacomponent, HTMLStencilElement {
    }
    var HTMLHoneyStyledParacomponentElement: {
        prototype: HTMLHoneyStyledParacomponentElement;
        new (): HTMLHoneyStyledParacomponentElement;
    };
    interface HTMLElementTagNameMap {
        "honey-apply-style": HTMLHoneyApplyStyleElement;
        "honey-define-style": HTMLHoneyDefineStyleElement;
        "honey-select-style": HTMLHoneySelectStyleElement;
        "honey-styled-component": HTMLHoneyStyledComponentElement;
        "honey-styled-paracomponent": HTMLHoneyStyledParacomponentElement;
    }
}
declare namespace LocalJSX {
    interface HoneyApplyStyle {
    }
    interface HoneyDefineStyle {
    }
    interface HoneySelectStyle {
        /**
          * Name des zu setzenden Theme z.B. honey-papercss-style
         */
        "themeName"?: any;
    }
    interface HoneyStyledComponent {
        /**
          * Komma separierte Liste von Namen der zu erzeugenden Slots
         */
        "slotNames"?: string;
        /**
          * themepostfix of theme name e.g. style when honey-papercss-style
         */
        "themepostfix"?: string;
        /**
          * themeprefix of theme name e.g. honey when honey-papercss-style
         */
        "themeprefix"?: string;
    }
    interface HoneyStyledParacomponent {
        /**
          * Parameter für das zu erzeugende Tag
         */
        "parameterlist"?: any;
        /**
          * themepostfix of theme name e.g. style when honey-papercss-style
         */
        "themepostfix"?: string;
        /**
          * themeprefix of theme name e.g. honey when honey-papercss-style
         */
        "themeprefix"?: string;
    }
    interface IntrinsicElements {
        "honey-apply-style": HoneyApplyStyle;
        "honey-define-style": HoneyDefineStyle;
        "honey-select-style": HoneySelectStyle;
        "honey-styled-component": HoneyStyledComponent;
        "honey-styled-paracomponent": HoneyStyledParacomponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "honey-apply-style": LocalJSX.HoneyApplyStyle & JSXBase.HTMLAttributes<HTMLHoneyApplyStyleElement>;
            "honey-define-style": LocalJSX.HoneyDefineStyle & JSXBase.HTMLAttributes<HTMLHoneyDefineStyleElement>;
            "honey-select-style": LocalJSX.HoneySelectStyle & JSXBase.HTMLAttributes<HTMLHoneySelectStyleElement>;
            "honey-styled-component": LocalJSX.HoneyStyledComponent & JSXBase.HTMLAttributes<HTMLHoneyStyledComponentElement>;
            "honey-styled-paracomponent": LocalJSX.HoneyStyledParacomponent & JSXBase.HTMLAttributes<HTMLHoneyStyledParacomponentElement>;
        }
    }
}
