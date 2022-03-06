import {Config} from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'honey-style-it',
  testing: {
    /**
     * Gitlab CI doesn't allow sandbox, therefor this parameters must be passed to your Headless Chrome
     * before it can run your tests
     */
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      dir: 'docs/api',
      strict: true,
      footer: '*Built with [StencilJS](https://stenciljs.com/)* by Huluvu424242'
    },
    {
      type: 'docs-json',
      file: 'docs/api/components/custom-elements.json'
    },
    {
      type: 'www',
      dir: 'docs',
      copy: [
        { src: "404.html"},
        { src: "redirect.js"}
      ],
      serviceWorker: null // disable service workers
    }
  ],
  rollupPlugins: {
    before: [
      // Plugins injected before rollupNodeResolve()
      // resolvePlugin()
    ],
    after: [
      // Plugins injected after commonjs()
      nodePolyfills()
    ]
  }
};


