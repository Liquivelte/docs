---
prev: false
next: false
outline: deep
---

# Liquivelte v4 Direction

Liquivelte v4 moves the project from an editor-extension build pipeline to a compiler-first workflow.

The important change:

```
old: VS Code extension owns the build
new: Vite plugin + core compiler own the build
```

## Why

The original idea still matters: write Shopify storefront code with Liquid SSR and Svelte-level interactivity.

The v4 implementation makes that easier to reason about:

- The compiler is a normal TypeScript package.
- Vite is the build path.
- Tests cover compiler/runtime/plugin behavior.
- The VS Code extension can become tooling on top of the compiler, not the source of truth.

## What to try first

Build the reference theme:

```bash
git clone https://github.com/Liquivelte/liquivelte.git
cd liquivelte
pnpm install
cd examples/basic-theme
pnpm install
pnpm build
```

Then install the agent setup skill from [Agent Skill](/agent-skill).
