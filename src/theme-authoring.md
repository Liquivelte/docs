# Theme Authoring

Liquivelte v4 theme work should feel like Shopify theme development first and Svelte app development second.

## Ownership boundary

Liquid owns:

- `section`, `block`, `settings`, and schema settings
- products, variants, collections, prices, media, and availability
- cart lines, forms, filters, pagination, menus, routes, and localization
- theme-editor affordances such as `block.shopify_attributes`

Svelte owns:

- active tab or drawer state
- carousel controls
- optimistic cart actions
- wishlist, compare, and recently viewed browser state
- focus management, keyboard behavior, and animation state

## Progressive enhancement checklist

Before adding Svelte, make sure the Liquid fallback is complete:

- Page content is visible before JavaScript.
- Forms and links still make sense without hydration.
- Product cards include title, image, price, URL, and availability where needed.
- Section blocks keep `block.shopify_attributes`.
- JSON data for islands is compact and emitted by Liquid.

After adding Svelte, verify:

- Fallback markup is hidden only after mount succeeds.
- Motion respects `prefers-reduced-motion`.
- Keyboard and focus behavior are explicit.
- Store subscriptions are cleaned up when components unmount.

## Recommended packages

Use proven packages for interaction primitives:

- `bits-ui` for dialogs, tabs, popovers, and focus-managed surfaces.
- `embla-carousel` or `embla-carousel-svelte` for carousels.
- `nanostores` for shared cart, wishlist, compare, and theme state.

## Tailwind v4

The advanced reference theme uses Tailwind CSS v4 through `@tailwindcss/vite`.

Keep Tailwind configuration in CSS:

```css
@import "tailwindcss";
@source "./sections/**/*.liquivelte";
@source "./snippets/**/*.liquivelte";
@source "./src/**/*.{js,ts,svelte}";

@theme {
  --color-primary-600: var(--theme-color-primary-600);
}
```

Do not add a Tailwind v3-style `tailwind.config.js` unless your project has a separate reason to stay on Tailwind v3.

## Build proof

A theme change is not done until the build passes and generated Liquid is inspected:

```bash
pnpm build
rg -n "<script\\b|\\bon:[a-zA-Z]|\\bbind:this|<svelte:component|import .* from" dist/sections dist/snippets
```
