# Agent Skill

Liquivelte v4 is easiest to adopt when your coding agent knows the compiler boundary up front.

Install this skill in Codex:

```bash
mkdir -p ~/.codex/skills/liquivelte-v4-compiler-setup
curl -fsSL https://liquivelte.js.org/skills/liquivelte-v4-compiler-setup/SKILL.md \
  -o ~/.codex/skills/liquivelte-v4-compiler-setup/SKILL.md
```

Use it with a direct prompt:

```
Use the liquivelte-v4-compiler-setup skill to set up Liquivelte v4 in this Shopify theme.
Create the smallest working compiler path first, then add one `.liquivelte` section.
Run the build and show the generated Liquid output paths.
```

## What the skill tells agents

The skill gives an agent the rules that matter before it edits code:

- Use the current package manager and inspect the theme before changing files.
- Add the Vite plugin as the compiler entrypoint.
- Keep Shopify Liquid as the SSR source of truth.
- Use Svelte only for browser-owned state and progressive enhancement.
- Build and inspect generated Liquid before calling the setup complete.

## Download

The raw skill file is available at:

[https://liquivelte.js.org/skills/liquivelte-v4-compiler-setup/SKILL.md](https://liquivelte.js.org/skills/liquivelte-v4-compiler-setup/SKILL.md)

## Project prompt template

Use this when starting from an existing Shopify theme:

```
Use the liquivelte-v4-compiler-setup skill.

Goal:
- Add Liquivelte v4 compiler support to this Shopify theme.
- Preserve the existing storefront output.
- Convert or add only one simple section first.

Constraints:
- Liquid owns Shopify data and must render useful HTML without JavaScript.
- Svelte owns browser state only.
- Generated Liquid must not contain raw Svelte component tags, executable imports, `on:*`, or `bind:this`.

Verification:
- Run the theme build.
- Show the generated `dist/sections` and `dist/snippets` paths.
- Inspect generated Liquid for client-only mistakes.
```
