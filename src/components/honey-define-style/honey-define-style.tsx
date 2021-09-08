import {Component, Element, h, Host, Method} from '@stencil/core';

@Component({
  tag: 'honey-define-style',
  styleUrl: 'honey-define-style.css',
})
export class HoneyDefineStyle {

  @Element() host: HTMLElement;

  protected theme: string;

  componentWillLoad() {
    const children: HTMLCollection = this.host.children;
    this.theme = children.item(0).tagName;
  }


  /**
   * Get the current theme as string in lowercase of tag name.
   */
  @Method()
  async getTheme() {
    if (this.theme) {
      return this.theme.toLowerCase();
    } else {
      return this.theme;
    }
  }

  render() {
    return (
      <Host>

      </Host>
    );
  }
}
