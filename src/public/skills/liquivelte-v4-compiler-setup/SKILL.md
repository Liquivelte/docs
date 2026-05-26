---
name: liquivelte-v4-compiler-setup
description: Use when setting up, migrating, or debugging a Liquivelte v4 Shopify theme compiler project with Vite, `.liquivelte` sections/snippets/blocks, generated Liquid, Svelte hydration islands, or Shopify theme build output.
---

# Liquivelte v4 Compiler Setup

Liquivelte v4 is Liquid-first Shopify SSR with optional Svelte enhancement. The goal is a Shopify theme that renders useful HTML before JavaScript, then hydrates browser-owned interactions.

## Core rules

- Inspect the current repo before editing: package manager, `package.json`, Vite config, Shopify directories, and existing build scripts.
- Liquid owns Shopify data: `section`, `block`, `settings`, `product`, `collection`, `cart`, routes, menus, forms, filters, schema, and block loops.
- Svelte owns browser state: drawers, tabs, carousels, localStorage, optimistic cart actions, focus, and animation.
- Generated Liquid must not contain executable imports, `on:*`, `bind:this`, raw Svelte component tags, or client-only hidden content.
- Prefer a minimal working compiler path before converting many files.

## Setup workflow

1. Identify the package manager. Prefer the repo's existing lockfile.
2. Check whether the theme already has Vite, Svelte, Shopify CLI, Tailwind, or a custom build step.
3. Add `liquivelteVitePlugin` to `vite.config.ts` with `themeRoot` pointing at the Shopify theme root.
4. Ensure the build copies non-compiled Shopify directories into `dist/`: `layout`, `templates`, `config`, `locales`, static `assets`, and existing `.liquid` files.
5. Create or convert one simple `.liquivelte` section first.
6. Run the build.
7. Inspect generated `dist/sections` and `dist/snippets` Liquid before claiming success.

## Minimal Vite shape

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

Real Shopify themes usually need a small copy plugin for files Vite does not compile.

## Minimal section

```liquid
<section class="hero">
  {% if section.settings.heading != blank %}
    <h1>{{- section.settings.heading -}}</h1>
  {% endif %}
</section>

{% schema %}
{
  "name": "Hero",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading"
    }
  ],
  "presets": [
    {
      "name": "Hero"
    }
  ]
}
{% endschema %}
```

## Svelte island pattern

Render a full Liquid fallback, add an empty mount target, pass JSON through a `<template>`, and hide fallback only after mount succeeds.

```liquid
<section data-tabs>
  <div data-tabs-fallback>
    {% for block in section.blocks %}
      <article {{ block.shopify_attributes }}>
        <h3>{{- block.settings.title -}}</h3>
        <div>{{- block.settings.content -}}</div>
      </article>
    {% endfor %}
  </div>

  <div data-tabs-island aria-hidden="true"></div>
  <template data-tabs-data>
    [
      {% for block in section.blocks %}
        {
          "id": {{ block.id | json }},
          "title": {{ block.settings.title | json }},
          "content": {{ block.settings.content | json }}
        }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]
  </template>
</section>
```

## Verification

Run the repo's build command, usually:

```bash
pnpm build
```

Then inspect generated Liquid:

```bash
rg -n "<script\\b|\\bon:[a-zA-Z]|\\bbind:this|<svelte:component|import .* from" dist/sections dist/snippets
```

Accept JSON data or trace islands. Fix any executable Svelte/client-only artifacts in generated Liquid.
