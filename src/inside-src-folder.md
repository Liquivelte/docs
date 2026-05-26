# Theme Structure

Liquivelte v4 follows Shopify theme structure. You do not need a special `src` folder for storefront Liquid. Put `.liquivelte` files where Shopify expects the compiled Liquid to land.

## Compiler-owned files

```
sections/*.liquivelte -> dist/sections/*.liquid
snippets/*.liquivelte -> dist/snippets/*.liquid
blocks/*.liquivelte -> dist/blocks/*.liquid
```

## Shopify files copied through

Keep normal Shopify files in their normal directories:

```
layout/
templates/
config/
locales/
assets/
```

Your Vite build should copy these to `dist/` so Shopify CLI can serve or upload a complete theme.

## Browser code

Use a separate browser source folder for Svelte islands and stores:

```
src/
  components/
  stores/
  utils/
main.js
```

`main.js` should initialize global behavior and mount islands onto Liquid-rendered markup.

## Reference themes

Start with the examples in the v4 repository:

```
examples/basic-theme
examples/advanced-theme
```

Use `basic-theme` to understand compiler output. Use `advanced-theme` to study production-style progressive enhancement.
