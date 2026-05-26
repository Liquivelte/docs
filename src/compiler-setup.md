# Compiler Setup

Liquivelte v4 is a Vite compiler setup. The core package exposes `liquivelteVitePlugin`, and your theme build uses that plugin to scan `.liquivelte` files and emit Shopify Liquid.

## Minimal shape

A theme using Liquivelte v4 should have:

```
sections/
  hero-section.liquivelte
snippets/
  product-card.liquivelte
layout/
  theme.liquid
templates/
  index.json
assets/
  base.css
vite.config.ts
package.json
```

The plugin scans `sections/`, `snippets/`, and `blocks/` by default when `themeRoot` points at the theme root.

## Vite config

Use the reference themes as the source of truth. The smallest useful config looks like this:

```ts
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { liquivelteVitePlugin } from 'liquivelte-v4/vite';

export default defineConfig({
  assetsInclude: ['**/*.liquivelte'],
  build: {
    emptyOutDir: false
  },
  plugins: [
    svelte(),
    liquivelteVitePlugin({
      themeRoot: '.'
    })
  ]
});
```

Real themes usually add a small copy plugin so Shopify files that are not compiled by Liquivelte still land in `dist/`: `layout`, `templates`, `config`, `locales`, and static `assets`.

## Package scripts

Use boring scripts:

```json
{
  "scripts": {
    "dev": "vite build --watch",
    "build": "vite build"
  }
}
```

If you also run Shopify CLI, keep it separate until the compiler output is stable:

```json
{
  "scripts": {
    "theme:dev": "shopify theme dev --path dist"
  }
}
```

## What the compiler emits

For each `.liquivelte` file in a Shopify directory, the build emits the matching Liquid file:

```
sections/hero-section.liquivelte -> dist/sections/hero-section.liquid
snippets/product-card.liquivelte -> dist/snippets/product-card.liquid
blocks/image-card.liquivelte -> dist/blocks/image-card.liquid
```

The same source also produces Svelte-compatible output for hydration during the Vite build.

## Verification

Run:

```bash
pnpm build
```

Then inspect generated Liquid:

```bash
rg -n "<script\\b|\\bon:[a-zA-Z]|\\bbind:this|<svelte:component|import .* from" dist/sections dist/snippets
```

Expected result: no raw Svelte component tags, no executable imports, no Svelte event directives, and no `bind:this` in generated Liquid.
