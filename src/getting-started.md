# Getting Started

The quickest path is to build the reference theme first. It proves your local Node/Vite setup and shows the generated Shopify theme output before you wire Liquivelte into your own store.

## 1. Clone and install

```bash
git clone https://github.com/Liquivelte/liquivelte.git
cd liquivelte
pnpm install
```

## 2. Build the basic theme

```bash
cd examples/basic-theme
pnpm install
pnpm build
```

The build writes a Shopify-style theme to `examples/basic-theme/dist/`.

Expected output includes:

```
dist/layout/theme.liquid
dist/templates/index.json
dist/sections/*.liquid
dist/snippets/*.liquid
dist/assets/*
```

## 3. Build the advanced theme

Use this once the basic build works.

```bash
cd ../advanced-theme
pnpm install
pnpm build
```

The advanced theme demonstrates Liquid-first pages with Svelte islands for cart, compare, wishlist, carousels, tabs, bundle selection, and search behavior.

## 4. Ask an agent to wire your theme

Install the setup skill:

```bash
mkdir -p ~/.codex/skills/liquivelte-v4-compiler-setup
curl -fsSL https://liquivelte.js.org/skills/liquivelte-v4-compiler-setup/SKILL.md \
  -o ~/.codex/skills/liquivelte-v4-compiler-setup/SKILL.md
```

Then run this from your Shopify theme repo:

```
Use the liquivelte-v4-compiler-setup skill.
Inspect this theme, add the Liquivelte v4 Vite compiler setup, create one simple `.liquivelte` section, and run the build.
Do not make the storefront client-only.
```

## 5. Verify the output

After setup, the important checks are:

```bash
pnpm build
rg -n "<script\\b|\\bon:[a-zA-Z]|\\bbind:this|<svelte:component|import .* from" dist/sections dist/snippets
```

Expected result: generated Liquid should not contain executable Svelte imports, raw Svelte component tags, `on:*` directives, or `bind:this`. JSON trace/data islands are allowed.
