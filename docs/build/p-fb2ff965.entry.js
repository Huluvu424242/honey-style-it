import{r as t,h as e}from"./p-bf675360.js";import{b as s,l as n}from"./p-908e0dd8.js";let o=class{constructor(e){t(this,e),this.themeprefix="honey",this.themepostfix=" "}connectedCallback(){this.styleNameSubscription=s.subscribe(this.createStyleNameChangeListener())}disconnectedCallback(){this.styleNameSubscription.unsubscribe()}async componentWillLoad(){try{await customElements.whenDefined("honey-define-style");const t=document.querySelector("honey-define-style");this.styleNameSubscription.unsubscribe(),this.styleNameSubscription=await t.subscribeThemeChangeListener(this.createStyleNameChangeListener())}catch(t){this.styleName="honey-default-style"}}createStyleNameChangeListener(){return{next:t=>this.styleName=t,error:t=>n.errorMessage(t),complete:()=>n.debugMessage("subcription <honey-styled-component> completed")}}getTheme(){if(!this.styleName)return"honey-default-style";const t=this.styleName.split("-");let e="";return e+=this.themeprefix+(this.themeprefix.trim().length>0?"-":""),e+=t.slice(1,-1).join("-"),e+=(this.themepostfix.trim().length>0?"-":"")+this.themepostfix,e.trim()}getSlotlist(){if(!this.slotNames||this.slotNames.trim().length<1)return[e("slot",null)];{let t=[];return this.slotNames.split(",").map((s=>t.push(e("slot",{name:s,slot:s},"placeholder ",s)))),t}}render(){const t=this.getTheme(),s=this.getSlotlist();return e(t,null,s)}};export{o as honey_styled_component}