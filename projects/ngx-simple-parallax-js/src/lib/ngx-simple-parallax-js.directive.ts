import {Directive, ElementRef, Inject, Input, NgModule, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import SimpleParallax, {IParallaxSettings} from 'simple-parallax-js';

export interface IParallaxConfig {
  orientation?: 'up' | 'down' | 'left' | 'right' | 'up left' | 'up right' | 'down left' | 'down right';
  scale?: number;
  overflow?: boolean;
  delay?: number;
  transition?: string;
  customContainer?: string | HTMLElement;
  customWrapper?: string;
  maxTransition?: number;
}

@Directive({
  selector: 'img[parallax],video[parallax]',
})
export class NgxSimpleParallaxJsDirective implements OnInit, OnDestroy {
  private get _isBrowser(): boolean {
    return isPlatformBrowser(this._platformId);
  }

  @Input() set parallaxConfig(config: IParallaxConfig) {
    this._parallaxConfig = config || {};
    this._parallax?.refresh();
  }

  private _parallaxConfig: IParallaxConfig | undefined;

  private _parallax: SimpleParallax | undefined;

  constructor(@Inject(PLATFORM_ID) private _platformId: object, private _el: ElementRef<Element>) {}

  public ngOnInit(): void {
    if (this._isBrowser) {
      this._parallax = new SimpleParallax(this._el.nativeElement, (this._parallaxConfig as IParallaxSettings) || null);
    }
  }

  public ngOnDestroy(): void {
    this._parallax?.destroy();
  }
}

@NgModule({
  declarations: [NgxSimpleParallaxJsDirective],
  exports: [NgxSimpleParallaxJsDirective],
})
export class NgxSimpleParallaxJsModule {}
