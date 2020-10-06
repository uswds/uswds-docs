---
permalink: /utilities/height-and-width/
layout: styleguide
type: utility
title: Height and width
category: Utilities
lead: Set the dimensions of an item.
subnav:
- text: Height
  href: '#height'
- text: Width
  href: '#width'
- text: Maximum height
  href: '#maxh'
- text: Maximum width
  href: '#maxw'
- text: Minimum height
  href: '#minh'
- text: Minimum width
  href: '#minw'
- text: Aspect ratio
  href: '#aspect'
- text: Circle
  href: '#circle'
- text: Square
  href: '#square'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         height
  var:          height
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         width
  var:          width
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         maxh
  var:          max-height
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         maxw
  var:          max-width
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         minh
  var:          min-height
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         minw
  var:          min-width
  output:       true,
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         add-aspect
  var:          add-aspect
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         circle
  var:          circle
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         square
  var:          square
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

{% assign height_values = site.data.tokens.special.auto_auto
  | concat: site.data.tokens.special.zero_zero
  | concat: site.data.tokens.spacing.positive.smaller
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
  | concat: site.data.tokens.special.full_percent
  | concat: site.data.tokens.special.full_viewport_height
%}

{% assign width_values = site.data.tokens.special.auto_auto
  | concat: site.data.tokens.special.zero_zero
  | concat: site.data.tokens.spacing.positive.smaller
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
  | concat: site.data.tokens.spacing.positive.larger
  | concat: site.data.tokens.spacing.positive.largest
  | concat: site.data.tokens.special.full_percent
%}

{% assign maxh_values = site.data.tokens.special.none_none
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
  | concat: site.data.tokens.spacing.positive.larger
  | concat: site.data.tokens.special.full_viewport_height
%}

{% assign maxw_values = site.data.tokens.special.none_none
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
  | concat: site.data.tokens.spacing.positive.larger
  | concat: site.data.tokens.spacing.positive.largest
  | concat: site.data.tokens.special.full_percent
%}

{% assign minh_values = site.data.tokens.special.none_none
  | concat: site.data.tokens.special.zero_zero
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
  | concat: site.data.tokens.spacing.positive.larger
  | concat: site.data.tokens.special.full_percent
  | concat: site.data.tokens.special.full_viewport_height
%}

{% assign minw_values = site.data.tokens.special.none_none
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
%}

{% assign circle_values = site.data.tokens.spacing.positive.smaller
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
%}

{% assign square_values = site.data.tokens.spacing.positive.smaller
  | concat: site.data.tokens.spacing.positive.small
  | concat: site.data.tokens.spacing.positive.medium
  | concat: site.data.tokens.spacing.positive.large
%}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">height</span>
    <span class="property utilities-property">max-height</span>
    <span class="property utilities-property">max-width</span>
    <span class="property utilities-property">min-height</span>
    <span class="property utilities-property">min-width</span>
    <span class="property utilities-property">width</span>
  </div>
</div>

<section class="utilities-section">
  {% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="height">
    {% include utilities/utility-title-bar.html
      title="Height"
    %}
    <section class="utility-examples">
      {% for item in height_values %}
        <div class="utility-example-container">
          <div class="usa-grid-row">
            <div class="usa-grid-col utility-example-class">
              <span class="utility-class">.height-{{ item.token }}</span>
            </div>
            <div class="usa-grid-col utility-example-value">
              <span class="utility-value">{{ item.value }}</span>
            </div>
            <div class="usa-grid-col utility-example">
              <div class="width-4 bg-secondary-light height-{{ item.token }}"></div>
            </div>
          </div>
        </div>
      {% endfor %}
    </section><!-- .utility-examples -->
  </section><!-- .utility#height -->

  <section class="utility" id="width">
    {% include utilities/utility-title-bar.html
      title="Width"
    %}
    <section class="utility-examples">
      {% for item in width_values %}
        <div class="utility-example-container">
          <div class="usa-grid-row">
            <div class="usa-grid-col utility-example-class">
              <span class="utility-class">.width-{{ item.token }}</span>
            </div>
            <div class="usa-grid-col utility-example-value">
              <span class="utility-value">{{ item.value }}</span>
            </div>
            <div class="usa-grid-col utility-example">
              <div class="height-4 bg-secondary-light width-{{ item.token }} maxw-full grid-col-auto"></div>
            </div>
          </div>
        </div>
      {% endfor %}
    </section><!-- .utility-examples -->
  </section><!-- .utility#width -->

  <section class="utility" id="maxh">
    {% include utilities/utility-title-bar.html
      title="Maximum height"
      property="max-height"
      var="max-height"
    %}
    <section class="utility-examples">
      {% for item in maxh_values %}
        <p class="utility-example-container {% if forloop.last %}border-0{% endif %}">
          <span class="utility-class">.maxh-{{ item.token }}</span>
          <span class="utility-value margin-left-2px">{{ item.value }}</span>
        </p>
      {% endfor %}
    </section><!-- .utility-examples -->
  </section><!-- .utility#maxh -->

  <section class="utility" id="maxw">
    {% include utilities/utility-title-bar.html
      title="Maximum width"
      property="max-width"
      var="max-width"
    %}
    <section class="utility-examples">
      {% for item in maxw_values %}
        <p class="utility-example-container {% if forloop.last %}border-0{% endif %}">
          <span class="utility-class">.maxw-{{ item.token }}</span>
          <span class="utility-value margin-left-2px">{{ item.value }}</span>
        </p>
      {% endfor %}
    </section><!-- .utility-examples -->
  </section><!-- .utility#maxw -->

  <section class="utility" id="minh">
    {% include utilities/utility-title-bar.html
      title="Minimum height"
      property="min-height"
      var="min-height"
    %}
    <section class="utility-examples">
      {% for item in minh_values %}
        <p class="utility-example-container {% if forloop.last %}border-0{% endif %}">
          <span class="utility-class">.minh-{{ item.token }}</span>
          <span class="utility-value margin-left-2px">{{ item.value }}</span>
        </p>
      {% endfor %}
    </section><!-- .utility-examples -->
  </section><!-- .utility#minh -->

  <section class="utility" id="minw">
    {% include utilities/utility-title-bar.html
      title="Minimum width"
      property="min-width"
      var="min-width"
    %}
    <section class="utility-examples">
      {% for item in minw_values %}
        <p class="utility-example-container {% if forloop.last %}border-0{% endif %}">
          <span class="utility-class">.minw-{{ item.token }}</span>
          <span class="utility-value margin-left-2px">{{ item.value }}</span>
        </p>
      {% endfor %}
    </section><!-- .utility-examples -->
  </section><!-- .utility#minw -->

  <section class="utility" id="aspect">
    {% include utilities/utility-title-bar.html
      title="Aspect ratio"
      property=false
      var="add-aspect"
    %}
    <section class="utility-examples">
      <div class="utility-example-container">
        <div class="usa-grid-row">
          <div class="usa-grid-col utility-example-class">
            <span class="utility-class">.add-aspect-9x16</span>
          </div>
          <div class="usa-grid-col utility-example-value">
          </div>
          <div class="usa-grid-col utility-example">
            <div class="width-8 add-aspect-9x16 bg-secondary-light"></div>
          </div>
        </div>
      </div>
      <div class="utility-example-container">
        <div class="usa-grid-row">
          <div class="usa-grid-col utility-example-class">
            <span class="utility-class">.add-aspect-1x1</span>
          </div>
          <div class="usa-grid-col utility-example-value">
          </div>
          <div class="usa-grid-col utility-example">
            <div class="width-8 add-aspect-1x1 bg-secondary-light"></div>
          </div>
        </div>
      </div>
      <div class="utility-example-container">
        <div class="usa-grid-row">
          <div class="usa-grid-col utility-example-class">
            <span class="utility-class">.add-aspect-4x3</span>
          </div>
          <div class="usa-grid-col utility-example-value">
          </div>
          <div class="usa-grid-col utility-example">
            <div class="width-8 add-aspect-4x3 bg-secondary-light"></div>
          </div>
        </div>
      </div>
      <div class="utility-example-container">
        <div class="usa-grid-row">
          <div class="usa-grid-col utility-example-class">
            <span class="utility-class">.add-aspect-16x9</span>
          </div>
          <div class="usa-grid-col utility-example-value">
          </div>
          <div class="usa-grid-col utility-example">
            <div class="width-8 add-aspect-16x9 bg-secondary-light"></div>
          </div>
        </div>
      </div>
      <div class="utility-example-container">
        <div class="usa-grid-row">
          <div class="usa-grid-col utility-example-class">
            <span class="utility-class">.add-aspect-2x1</span>
          </div>
          <div class="usa-grid-col utility-example-value">
          </div>
          <div class="usa-grid-col utility-example">
            <div class="width-8 add-aspect-2x1 bg-secondary-light"></div>
          </div>
        </div>
      </div>
    </section><!-- .utility-examples -->
  </section><!-- .utility#aspect -->

  <section class="utility" id="circle">
    {% include utilities/utility-title-bar.html
      title="Circle"
      property=false
    %}
    <section class="utility-examples">
      {% for item in circle_values %}
        {% if forloop.index > 1 %}
          <div class="utility-example-container">
            <div class="usa-grid-row">
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.circle-{{ item.token }}</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value margin-left-2px">{{ item.value }}</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="circle-{{ item.token }} bg-secondary-light"></div>
              </div>
            </div>
          </div>
        {% endif %}
      {% endfor %}
    </section><!-- .utility-examples -->
  </section><!-- .utility#circle -->

  <section class="utility" id="square">
    {% include utilities/utility-title-bar.html
      title="Square"
      property=false
    %}
    <section class="utility-examples">
      {% for item in square_values %}
        {% if forloop.index > 1 %}
        <div class="utility-example-container">
          <div class="usa-grid-row">
            <div class="usa-grid-col utility-example-class">
              <span class="utility-class">.square-{{ item.token }}</span>
            </div>
            <div class="usa-grid-col utility-example-value">
              <span class="utility-value margin-left-2px">{{ item.value }}</span>
            </div>
            <div class="usa-grid-col utility-example">
              <div class="square-{{ item.token }} bg-secondary-light"></div>
            </div>
          </div>
        </div>
        {% endif %}
      {% endfor %}
    </section><!-- .utility-examples -->
  </section><!-- .utility#square -->
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
            .height-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-height(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-height('card')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .width-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-width(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-width('auto')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .maxh-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-maxh(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-maxh('screen')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .maxw-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-maxw(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-maxw('card-lg')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .minh-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-minh(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-minh('screen')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .minw-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-minw(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-minw('auto')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .add-aspect-<code>ratio</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            add-aspect(<code>ratio</code>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include add-aspect('16x9')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .circle-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-circle(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-circle('05')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .square-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-square(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-square('05')
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
$width-palettes: (
  'palette-units-positive-large' // note: no trailing comma
);
</pre>
    <h4 class="font-lang-2xs margin-top-2 margin-bottom-05">Output</h4>
<pre class=" font-mono-xs margin-0 padding-0 bg-transparent">
.width-card { width: 10rem; }
.width-card-lg { width: 15rem; }
.width-mobile { width: 20rem; }
</pre>
    </aside>

    {% include utilities/standard-palettes.html %}
    {% include utilities/spacing-palettes.html %}

  </section>
</section>
