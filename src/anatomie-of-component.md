# Component Anatomy

Liquivelte v4 components are Shopify sections, snippets, or blocks that can also participate in Svelte hydration.

## Script

Use `<script>` for browser imports and state. Theme data should come from Liquid-rendered markup or compact data islands.

```svelte
<script>
  import ProductCarousel from './src/components/ProductCarousel.svelte';
</script>
```

Do not make `<script>` the only place where important product, section, cart, or menu data exists.

## Markup

Markup should be valid Shopify Liquid:

```liquid
{% for product in collection.products %}
  {% render 'product-card', product: product %}
{% endfor %}
```

The generated Liquid is what Shopify renders. The generated Svelte output is for hydration and browser behavior.

## Schema

Sections keep normal Shopify schema:

```liquid
{% schema %}
{
  "name": "Featured collection",
  "settings": [
    {
      "type": "collection",
      "id": "collection",
      "label": "Collection"
    }
  ]
}
{% endschema %}
```

Schema belongs to Shopify and must remain available in generated Liquid.

## Enhancement island

For a browser-only interaction, combine Liquid fallback, mount target, and data template:

```liquid
<div data-carousel>
  <div data-carousel-fallback>
    {% for product in section.settings.collection.products limit: 8 %}
      {% render 'product-card', product: product %}
    {% endfor %}
  </div>

  <div data-carousel-island aria-hidden="true"></div>

  <template data-carousel-data>
    [
      {% for product in section.settings.collection.products limit: 8 %}
        {
          "id": {{ product.id | json }},
          "title": {{ product.title | json }},
          "url": {{ product.url | json }}
        }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]
  </template>
</div>
```

Then `main.js` mounts the Svelte component after parsing the template.

## Rule of thumb

If a customer or merchant needs it to understand the page, put it in Liquid. If it is transient browser behavior, put it in Svelte.
