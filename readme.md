[![Build Status](https://app.travis-ci.com/Huluvu424242/honey-style-it.svg?branch=master)](https://app.travis-ci.com/Huluvu424242/honey-style-it)
![Github CI](https://github.com/Huluvu424242/honey-style-it/workflows/Github%20CI/badge.svg)
[![npm](https://img.shields.io/npm/v/@huluvu424242/honey-style-it.svg)](https://www.npmjs.com/package/@huluvu424242/honey-style-it)
[![npm](https://img.shields.io/npm/dm/@huluvu424242/honey-style-it.svg)](https://www.npmjs.com/package/@huluvu424242/honey-style-it)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@huluvu424242/honey-style-it)
[![Donate with paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://paypal.me/huluvu424242)
![Keybase BTC](https://img.shields.io/keybase/btc/huluvu424242)
# honey-style-it 
This project contains web components to use an design module for unique rendering your webcomponents but shadown dom. 
(currently under development - unready and unstable)

## installation

npm install --save @huluvu424242/honey-style-it

## usage

```html
<script 
    type="module" 
    src='https://unpkg.com/@huluvu424242/honey-style-it@0.0.6/dist/honey-style-it/honey-style-it.esm.js'>
</script>
```
To the [demo site](https://huluvu424242.github.io/honey-style-it/index.html)

[Vision of API (under construction)](src/components/honey-style-it/readme.md)

## demo

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="docs/index.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<head>
  <!-- news app -->
  <script type="module"
          src="https://unpkg.com/@huluvu424242/honey-news@0.0.6/dist/honey-news/honey-news.esm.js"></script>
  <script nomodule src="https://unpkg.com/@huluvu424242/honey-news@0.0.6/dist/cjs/honey-news.cjs.js"></script>
  <!-- style -->
  <script type="module"
          src="https://unpkg.com/@huluvu424242/honey-papercss-style@0.0.1/dist/honey-papercss-style/honey-papercss-style.esm.js"></script>
  <script nomodule
          src="https://unpkg.com/@huluvu424242/honey-papercss-style@0.0.1/dist/cjs/honey-papercss-style.cjs.js"></script>
</head>

<body id="seite" style="display: block">

<h1>usage of honey-style-it components with honey-news</h1>

<honey-define-style>
 <honey-papercss-style/>
</honey-define-style>

<honey-news/>

</body>

<!-- in your webcomponents (e.g. honey-news) usage -->
<Host>
    <honey-apply-style/>
    :
</Host>



```
To the [live demo](https://huluvu424242.github.io/honey-style-it/index.html)

## become an supporter

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## releaselog

### vX.X.X unpublished

### v0.0.7 published at 2022-04-07
### v0.0.6 published at 2022-03-06

* major changes only for pre tests of developers

### v0.0.5 published at 2021-09-21

* [feature 2](https://github.com/Huluvu424242/honey-style-it/projects/2#card-68396844) handle style changes


### v0.0.4 published at 2021-09-08

* [issue 1](https://github.com/Huluvu424242/honey-style-it/issues/1) setup project

## warranty

no warranty

## license 

MIT License

## technology used

* [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements)
* [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)


## browser support

### Custom Elements

* [Can I use with browsers?](https://caniuse.com/#feat=mdn-api_window_customelements)

### CSS Custom Properties

* [Can I use with browsers?](https://caniuse.com/#search=css%20custom%20properties)

