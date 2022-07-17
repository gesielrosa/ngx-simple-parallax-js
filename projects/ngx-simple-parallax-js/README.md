![NgxSimpleParallaxJs logo](https://github.com/gesielrosa/ngx-simple-parallax-js/tree/main/projects/ngx-simple-parallax-js/logo.png)

# NgxSimpleParallaxJs

[SimpleParallax.js](https://github.com/geosigno/simpleParallax.js) wrapper for Angular

[![npm version](https://badge.fury.io/js/ngx-simple-parallax-js.svg)](https://www.npmjs.com/package/ngx-simple-parallax-js)

## Installation

<hr>

### Install

The ngx-simple-parallax-js can be installed with npm:

`npm install ngx-simple-parallax-js simple-parallax-js@^5.6.2`

Then, import NgxSimpleParallaxJsModule into a module of your Angular app.

```ts
import { NgxSimpleParallaxJsModule } from 'ngx-simple-parallax-js';

@NgModule({
  declarations: [],
  imports: [
    NgxSimpleParallaxJsModule
  ]
  exports: []
})
export class YourModule {
}
```

### Using directive

In images:

```html
 <img parallax class="thumbnail" src="image.jpg" alt="image">
```

In videos:

```html
<video parallax>
  <source src="video.mp4" type="video/mp4">
</video>
```

With configs:

```html
 <img parallax [parallaxConfig]="parallaxConfig" src="image.jpg" alt="image">
```

Complete documentation for `simpleParallax.js`: [Official docs](https://github.com/geosigno/simpleParallax.js#readme)
