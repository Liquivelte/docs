---
outline: deep
---

# Liquivelte v4

Liquivelte v4 is a Shopify theme compiler for teams that want Liquid-rendered storefronts and Svelte-powered interactions from the same `.liquivelte` source files.

The fastest way to start is to let an agent set up the compiler path for you.

```bash
mkdir -p ~/.codex/skills/liquivelte-v4-compiler-setup
curl -fsSL https://liquivelte.js.org/skills/liquivelte-v4-compiler-setup/SKILL.md \
  -o ~/.codex/skills/liquivelte-v4-compiler-setup/SKILL.md
```

Then ask Codex:

```
Use the liquivelte-v4-compiler-setup skill to add Liquivelte v4 to this Shopify theme.
Keep Liquid as the SSR source of truth and use Svelte only for browser-owned interactivity.
```

## What v4 does

- Compiles `.liquivelte` files into Shopify Liquid for server-rendered storefront HTML.
- Emits Svelte code for client-side hydration where richer browser state is useful.
- Preserves Shopify section schema, block loops, theme settings, product data, routes, forms, and cart data in Liquid.
- Uses Vite as the build path instead of the old VS Code-extension-driven pipeline.
- Tracks component and loop context through a trace plan so hydration follows what Liquid actually rendered.

## The authoring rule

Liquid owns Shopify data. Svelte owns browser state.

That means a product card, collection grid, cart page, menu, form, price, and schema setting must render meaningful HTML before JavaScript runs. Svelte can enhance behavior after that: drawers, tabs, carousels, optimistic cart updates, localStorage state, focus choreography, and motion.

## Start here

1. [Install the agent skill](/agent-skill) if you use Codex or another agentic coding tool.
2. [Run the reference theme](/getting-started) to see the compiler output.
3. [Set up the compiler](/compiler-setup) in your own Shopify theme.
4. [Learn the `.liquivelte` file shape](/liquivelte-files).
5. [Follow the theme authoring rules](/theme-authoring) when adding real storefront behavior.

## Current project status

The v4 docs describe the current compiler-first direction for Liquivelte. The public API is centered on the core compiler and Vite plugin. The editor extension should call the same compiler instead of owning the build process.
