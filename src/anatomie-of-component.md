# Anatomie of a Liquivelte Component

Anatomie of a liquivelte component is very similar to a Svelte Component with a few exceptions. Template part is mostly liquid and should be valid. 

Meaning 2 contexts should match, for ex if you have a `product` variable in product page template, you also should have `product` imported into js context because Svelte will do some renders with the data we provide.

All the point here is to get SSR html via liquid and Svelte hydrates the markup when page loads.

## Expressions are liquid like but always with a hyphen
For ex in a svelte component you would output an expression like this.
```svelte
<div> { count } </div>
```
In liquivelte you do it like liquid but always with hyphens.
```liquivelte
<div > {{- count -}} </div>
```
::: details Why hyphens are necessary?
  ::: v-pre
  The reason for the hyphens is `{{ ... }}` is a valid svelte expression outputting an object. You can use svelte expressions as well if you do not care about the initial rendering of that part. 
  ::: 
::: details What happens if I just use { ... }?
  ::: v-pre
  Nothing, when page loads liquid will output { ... } without any evaluation and then Svelte will replace it with evaluated value when hydrating. If it is something that is not visible on load, it does not matter. Actually if you are going for lets say a popup that opens on click, you can import that as a Svelte component and pass values to it from props.
  ::: 

## Expressions have some liquid filters available
Expressions that are with hyphens are subject to a transformation, which also transforms liquid filters to function calls of a special import `liquid`. Example: 
```liquivelte
<div class="text-theme text-base">
  {{- product.price | money -}}
</div> 
```
gets transformed into
```svelte
<div class="text-theme text-base">
  { liquid.money(product.price) }
</div> 
```

## Control flow tags are liquid like
```liquivelte
{% if section.settings.logo != blank %}
  <img src="{{- section.settings.logo -}}" alt="Store logo" />
{% endif %}
```
This will transform into:
```svelte
{#if section.settings.logo != undefined }
  <img src="{{- section.settings.logo -}}" alt="Store logo" />
{/if}
```



## Can have `{% liquid ... %}` at the top of the component
This liquid code will end up in liquid part only. For example we can calculate something in liquid to import later.

```liquivelte
{% liquid 
  if block
    assign settings = block.settings
  else
    assign settings = section.settings
  endif
%}
<script>
  import settings from 'theme';
  import section.blocks from 'theme';
</script>

<style>
  div {
    display: block;
  }
  .product-card {
    background-color: #ddd;
  }
</style>
<div class="product-card">
  {% if product.available %}
    <Badge> In Stock </Badge>
  {% endif %}
</div>
```

## Can import variables from 'theme'
If you import something from `'theme'`, it will output that liquid variable to page with `| json` filter and pass it to Svelte when initializing the component.

## Can also import 1st depth object properties from 'theme'
Some big objects are not json serializable in Shopify liquid. For example lets say `section`, you can import `section.settings` instead of `section`. However defining section in the javascript context is on you.

For example:
```liquivelte
<script>
import section.settings from 'theme';
</script>
```
Will throw an error because `section` is not defined. 
Do this instead:
```liquivelte
<script>
const section = {};
import section.settings from 'theme';
</script>
```


