# vite-plugin-runtime-dotenv

Build once, deploy anywhere with Vite.

## Install

```
npm install --save-dev vite-plugin-runtime-dotenv
```

## Quick Setup

1. Install dependency to your project:

```
npm i -D vite-plugin-runtime-dotenv
```

2. Add `vite-plugin-runtime-dotenv` to your `vite.config` file:

```ts
import { defineConfig } from 'vite';
import { runtimeEnv } from 'vite-plugin-runtime-dotenv';

export default defineConfig({
  plugins: [
    runtimeEnv({
      output: 'runtimeEnv.js',
      globalVariableName: 'runtimeEnv',
      modes: ['qa', 'stg', 'prod'],
      generateDts: true,
    }),
  ],
});
```

This will generate a single build, copy it into directories in dist named after the modes, and attach the environment variables set in corresponding `.env` files.

## Options

<table>
  <thead>
    <th>Key</th>
    <th>Type</th>
    <th>Description</th>
    <th>Required</th>
    <th>Default</th>
  </thead>
  <tbody>
    <tr>
      <td>output</td>
      <td><code>string</code></td>
      <td><code>filename</code>. Path will be relative to output folder.</td>
      <td></td>
      <td><code>runtimeEnv.js</code></td>
    </tr>
    <tr>
      <td>modes</td>
      <td><code>Array<string></code></td>
      <td>Target build modes</td>
      <td>✅</td>
      <td></td>
    </tr>
    <tr>
      <td>globalVariableName</td>
      <td><code>string</code></td>
      <td>Change global variable name declared in <code>globalThis</code> object</td>
      <td></td>
      <td><code>runtimeEnv</code></td>
    </tr>
    <tr>
      <td>generateDts</td>
      <td><code>boolean</code></td>
      <td>Generate d.ts file in src when serving the project.</td>
      <td></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>defaultEnvFilenameAliases</td>
      <td><code>{ production?: string; development?: string }</code></td>
      <td>Set aliases for vite default mode names when running 'serve' and 'build'</td>
      <td></td>
      <td><code>undefined</code></td>
    </tr>
  </tbody>
</table>
