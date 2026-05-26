# `.liquivelte` Files

A `.liquivelte` file is Liquid-first Shopify markup with optional Svelte enhancement.

The file should be readable as a Shopify section or snippet first. Svelte should enhance behavior after Liquid has rendered useful HTML.

## Basic section

```liquid
<section class="hero">
  {% if section.settings.heading != blank %}
    <h1>{{- section.settings.heading -}}</h1>
  {% endif %}

  {% if section.settings.text != blank %}
    <div class="hero__text">
      {{- section.settings.text -}}
    </div>
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
    },
    {
      "type": "richtext",
      "id": "text",
      "label": "Text"
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

## Liquid output

Use Liquid output for storefront data:

```liquid
{{- product.title -}}
{{- product.price | money -}}
{{- section.settings.heading -}}
```

The compiler can trace and coordinate these values for hydration, but Shopify Liquid remains the authoritative renderer.

## Liquid loops

Use Shopify loops for Shopify data:

```liquid
{% for block in section.blocks %}
  <article {{ block.shopify_attributes }}>
    <h2>{{- block.settings.title -}}</h2>
  </article>
{% endfor %}
```

Do not replace Shopify block loops with client-only Svelte loops. Merchants need section blocks, schema, and theme-editor attributes to work before JavaScript runs.

## Browser-only enhancement

When a feature needs Svelte, render a fallback first, add a mount target, and pass compact data through a template:

```liquid
<section data-comparison-tabs>
  <div data-comparison-tabs-fallback>
    {% for block in section.blocks %}
      <article {{ block.shopify_attributes }}>
        <h3>{{- block.settings.title -}}</h3>
        <div>{{- block.settings.content -}}</div>
      </article>
    {% endfor %}
  </div>

  <div data-comparison-tabs-island aria-hidden="true"></div>

  <template data-comparison-tabs-data>
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

In `main.js`, mount the Svelte island only after parsing the Liquid-rendered data. Hide the fallback only after mount succeeds.

## Generated Liquid must stay Liquid

Generated Shopify files must not contain:

- `import ... from ...`
- `on:click` or other Svelte event directives
- `bind:this`
- Raw component tags such as `<ComparisonTabs />`
- Client-only markup that hides the only meaningful content
