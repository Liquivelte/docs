
# <img src="liquid.png" width="50" style="display: inline; vertical-align: bottom;" > Liquid + <img src="svelte.png" width="50" style="display: inline; vertical-align: bottom;" > Svelte = <img src="liquivelte.png" width="50" style="display: inline; vertical-align: bottom;" > Liquivelte

Liquivelte is a way to use [Svelte](https://svelte.dev/) in [Shopify theme development](https://shopify.dev/docs/themes). It has a [VSCode extension](https://marketplace.visualstudio.com/items?itemName=malipetek.liquivelte) that carries out a build process and outputs Liquid + JS and CSS.

Basic idea behind it is, [liquid control flow tags](https://shopify.github.io/liquid/tags/control-flow/) are very similar to [Svelte's](https://svelte.dev/docs#template-syntax). So in theory we ca convert one to another. 

VSCode extension at its core is a [svelte preprocessor](https://github.com/sveltejs/svelte-preprocess) that converts liquid template to valid Svelte before compilation. But it is a bit tricky, that is why this project is a VSCode extension rather than a rollup/webpack package.

::: warning
Using this project requires both Liquid and Svelte knowledge.
:::

::: danger
This is a work in progress, a new version of extension will be published soon. This documentation reflects features of the future version.
:::