---
permalink: /utilities/outline/
layout: styleguide
type: utility
title: Outline
category: Utilities
lead: Set width and color of an item’s outline
subnav:
- text: Outline
  href: '#utility-outline'
- text: Outline color
  href: '#utility-outline-color'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         outline
  var:          outline
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         outline
  var:          outline-color
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

{% assign outline_widths =
  site.data.tokens.special.zero_zero
  | concat: site.data.tokens.spacing.positive.smaller
  | concat: site.data.tokens.special.spacing_05
  %}

{% assign outline_colors = site.data.tokens.color.required %}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">outline</span>
    <span class="property utilities-property">outline-color</span>
  </div>
</div>

<section class="utilities-section">

  {% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="utility-outline">
    {% include utilities/utility-title-bar.html
      title="Outline"
    %}
    <section class="utility-examples">
      <p class="utility-note"><strong>Note: </strong> The <code>outline</code> utilities apply a solid outline of specified width.</p>
      {% for width in outline_widths %}
        {% capture this_class %}
          .outline-{{ width.token }}
        {% endcapture %}
        {% capture this_value %}
          {{ width.value }}
        {% endcapture %}
        {% capture this_example %}
        <div class="outline-{{ width.token }} square-9 bg-base-lightest"></div>
        {% endcapture %}
        {% include utilities/utility-example.html
          containerClasses="overflow-visible"
          utility=this_class
          value=this_value
          example=this_example
        %}
      {% endfor %}
    </section><!-- exanples -->
  </section><!-- utility -->

  <section class="utility" id="utility-outline-color">
    {% include utilities/utility-title-bar.html
      title="Outline color"
    %}
    <section class="utility-examples">
      {% for color in outline_colors %}
        {% capture this_class %}
          <span class="text-light">.outline-1px</span>.outline-{{ color.token }}
        {% endcapture %}
        {% capture this_value %}
        <span class="utility-value-color-chip bg-{{ color.token }}"></span>{{ color.value }}
        {% endcapture %}
        {% capture this_example %}
        <span class="square-4 radius-sm text-middle padding-05 display-inline-block margin-right-1 bg-white ">
          <span class="square-3 radius-sm display-block outline-1px outline-{{ color.token }}"></span>
        </span>
        <span class="square-4 radius-sm text-middle padding-05 display-inline-block margin-right-1 bg-ink">
          <span class="square-3 radius-sm display-block outline-1px outline-{{ color.token }}"></span>
        </span>
        {% endcapture %}
        {% include utilities/utility-example.html
          utility=this_class
          value=this_value
          example=this_example
        %}
      {% endfor %}
    </section>
  </section>
</section>

<section id="utility-mixins" class="padding-top-4">
  <h2 class="site-h2 margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <table class="usa-table--borderless site-table-responsive site-table-simple">
    <thead>
      <tr>
        <th scope="col" class="tablet:maxw-card-lg">Utility</th>
        <th scope="col">Mixin</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .outline-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-outline(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-outline('05')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .outline-color-<a href="{{ site.baseurl }}/design-tokens/color/" class="token">color</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-outline-color(<a href="{{ site.baseurl }}/design-tokens/color/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-outline-color('gold-30v')
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  {% include utilities/utility-mixin-using.html %}
</section>

<section id="advanced-settings" class="padding-top-4">
  <h2 class="site-h2 margin-y-0">Advanced settings</h2>

  {% include utilities/responsive-variants.html %}
  {% include utilities/state-variants.html %}
  {% include utilities/output-control.html %}

  <section class="utilities-section margin-top-6">
    {% include utilities/values-intro.html %}

    <aside class="example border-left-05 border-secondary-light padding-left-105 margin-top-2">
      <h4 class="font-lang-2xs margin-top-0 margin-bottom-05">Example</h4>
<pre class="font-mono-xs margin-0 padding-0 bg-transparent">
$outline-color-palettes: (
  'palette-color-red-medium',
  'palette-color-red-medium-vivid' // note: no trailing comma
);
</pre>
    <h4 class="font-lang-2xs margin-top-2 margin-bottom-05">Output</h4>
<pre class=" font-mono-xs margin-0 padding-0 bg-transparent">
.outline-red-40 { outline-color: #ed6b61; }
.outline-red-50 { outline-color: #d83731; }
.outline-red-60 { outline-color: #ab3a3a; }
.outline-red-40v { outline-color: #ff5c48; }
.outline-red-50v { outline-color: #e82207; }
.outline-red-60v { outline-color: #c31f0a; }
</pre>
    </aside>
    {% include utilities/color-palettes.html %}
    {% include utilities/spacing-palettes.html %}
  </section>
</section>
