import {Component, h, Prop} from '@stencil/core';
import {HoneyDefineStyle} from "../honey-define-style/honey-define-style";

@Component({
  tag: 'honey-apply-style',
  styleUrl: 'honey-apply-style.css',
})
export class HoneyApplyStyle {

  /**
   * tagName of honey style sheet to apply e.g. 'honey-papercss-style'
   */
  @Prop() theme: string;

  async componentWillLoad() {
    try {
      await customElements.whenDefined('honey-define-style');
      const styleElements: HoneyDefineStyle = document.querySelector('honey-define-style') as unknown as HoneyDefineStyle;
      this.theme = await styleElements.getTheme();
    } catch (error) {
      this.theme = 'honey-default-style';
    }
  }

  render() {
    // Grossbuchstabe für Variable notwendig für JSX
    const TagName = this.theme;
    return (<TagName/>)
  }
}
