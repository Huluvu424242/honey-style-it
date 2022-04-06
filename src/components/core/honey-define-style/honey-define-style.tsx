import {Component, Element, h, Host, Method} from '@stencil/core';
import {Observable, Observer, ReplaySubject, Subject, Subscription} from "rxjs";
import {logService} from "../../../shared/log-service";

export interface ThemeListener {
  next: (theme: string) => void;
  error: (error: string) => void;
  complete: () => void;
}



@Component({
  tag: 'honey-define-style',
})
export class HoneyDefineStyle {

  @Element() host: HTMLElement;

  protected styleName$: Subject<string> = new ReplaySubject<string>(1);

  protected computeTheme() {
    const children: HTMLCollection = this.host.children;
    const tagName: string = children.item(0).tagName;
    if (tagName) {
      this.styleName$.next(tagName.toLowerCase());
    }
  }

  async componentWillLoad() {
    try {
      await this.computeTheme();
    } catch (error) {
      logService.warnMessage(error);
    }
  }

  /**
   * Get the current theme as string in lowercase of tag name.
   */
  @Method()
  async subscribeThemeChangeListener(observer: Observer<string>): Promise<Subscription> {
    return this.styleName$.subscribe(observer);
  }

  /**
   * Referenz auf das Replay Subject als Observable
   */
  @Method()
  async getStyleName$(): Promise<Observable<string>> {
    return this.styleName$.asObservable();
  }

  /**
   * Trigger recompute theme style.
   */
  @Method()
  async recomputeTheme(): Promise<void> {
    this.computeTheme();
  }

  /**
   * Setzt den neuen Theme und wechselt entsprechend das Child Element aus.
   * @param themeName Name des Themes
   */
  @Method()
  async setNewTheme(themeName:string):Promise<void>{
    const replacement = document.createElement(themeName);
    this.host.replaceChild(replacement, this.host.children[0]);
    await this.recomputeTheme();
  }

  render() {
    return (
      <Host>

      </Host>
    );
  }
}
