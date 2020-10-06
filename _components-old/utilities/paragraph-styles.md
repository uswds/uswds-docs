---
permalink: /utilities/paragraph-styles/
layout: styleguide
type: utility
title: Paragraph styles
category: Utilities
lead: Change the appearance of a block of text.
subnav:
- text: Line height
  href: '#line-height'
- text: Measure (max-width)
  href: '#max-width'
- text: Text alignment
  href: '#text-align'
- text: Text indent
  href: '#text-indent'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         line-height
  var:          line-height
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         measure
  var:          measure
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          text-align
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text-indent
  var:          text-indent
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
vals_positive:
  - token: 0
    value: 0
  - token: 1px
    value: 1px
  - token: 2px
    value: 2px
  - token: '05'
    value: 4px
  - token: 1
    value: 8px
  - token: 105
    value: 12px
  - token: 2
    value: 16px
  - token: 205
    value: 20px
  - token: 3
    value: 24px
  - token: 4
    value: 32px
  - token: 5
    value: 40px
  - token: 6
    value: 48px
  - token: 7
    value: 56px
  - token: 8
    value: 64px
  - token: 9
    value: 72px
vals_negative:
  - token: neg-1px
    value: -1px
    equiv: 1px
  - token: neg-2px
    value: -2px
    equiv: 2px
  - token: neg-05
    value: -4px
    equiv: '05'
  - token: neg-1
    value: -8px
    equiv: 1
  - token: neg-105
    value: -12px
    equiv: 105
  - token: neg-2
    value: -16px
    equiv: 2
  - token: neg-205
    value: -20px
    equiv: 205
  - token: neg-3
    value: -24px
    equiv: 3
  - token: neg-4
    value: -32px
    equiv: 4
  - token: neg-5
    value: -40px
    equiv: 5
  - token: neg-6
    value: -48px
    equiv: 6
  - token: neg-7
    value: -56px
    equiv: 7
  - token: neg-8
    value: -64px
    equiv: 8
  - token: neg-9
    value: -72px
    equiv: 9

---

{% assign tokens = site.data.tokens.typesetting %}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">line-height</span>
    <span class="property utilities-property">max-width</span>
    <span class="property utilities-property">text-align</span>
    <span class="property utilities-property">text-indent</span>
  </div>
</div>

<section class="utilities-section">

  {% include utilities/utilities-section-title-bar.html %}

  <section class="line-height" id="line-height">
    <section class="utility">
      {% include utilities/utility-title-bar.html
        title="Line height"
        responsive=true
      %}


      <section class="utility-examples">
        {% for family in tokens.family.type %}
          {% if family.default %}
            {% assign font = tokens.family.font
              | where: 'token', family.default
              | first %}
            <h5 class="utility-examples-title">line-height-{{ family.token }} <span class="text-normal font-sans-3xs">(Shown: {{ font.name }})</span></h5>

            {% assign thisUtilityClasses = 'grid-col-fill' %}
            {% assign thisValueClasses = 'grid-col-auto' %}
            {% assign thisExampleClasses = 'grid-col-12 width-full maxw-none padding-y-1 border-top border-base-lightest margin-top-1' %}

            {% assign this_lh = 1 %}
            {% assign lh = tokens.line-height
              | where: 'token', this_lh
              | first %}
            {% assign font = tokens.family.font
              | where: 'token', family.default
              | first %}
            {% assign normal = tokens.meta.normal
              | divided_by: font.normal %}
            {% assign output = lh.value
              | divided_by: normal
              | round: 2 %}
            {% capture this_class %}
              .line-height-{{ family.token }}-{{ lh.token }}
            {% endcapture %}
            {% capture this_value %}
              {{ output }}
            {% endcapture %}
            {% capture this_example %}
              <p class="font-{{ family.token }}-md line-height-{{ family.token }}-{{ this_lh }} margin-top-0 text-bold">Mark Twain</p>
            {% endcapture %}
            {% include utilities/utility-example.html
              wrap = true
              utility = this_class
              utilityClasses = thisUtilityClasses
              value = this_value
              valueClasses = thisValueClasses
              example = this_example
              exampleClasses = thisExampleClasses
            %}

            {% assign this_lh = 2 %}
            {% assign lh = tokens.line-height
              | where: 'token', this_lh
              | first %}
            {% assign output = lh.value
              | divided_by: normal
              | round: 2 %}
            {% capture this_class %}
              .line-height-{{ family.token }}-{{ lh.token }}
            {% endcapture %}
            {% capture this_value %}
              {{ output }}
            {% endcapture %}
            {% capture this_example %}
              <p class="font-{{ family.token }}-sm line-height-{{ family.token }}-{{ this_lh }} margin-top-0 text-bold">The Celebrated Jumping Frog of Calaveras County</p>
            {% endcapture %}
            {% include utilities/utility-example.html
              wrap = true
              utility = this_class
              utilityClasses = thisUtilityClasses
              value = this_value
              valueClasses = thisValueClasses
              example = this_example
              exampleClasses = thisExampleClasses
            %}

            {% assign thisLoop = '3,4,5,6'
              | split: ',' %}
            {% for item in thisLoop %}
              {% assign this_lh = item %}
              {% assign lh = tokens.line-height
                | where: 'token', this_lh
                | first %}
              {% assign output = lh.value
                | divided_by: normal
                | round: 2 %}
              {% capture this_class %}
                .line-height-{{ family.token }}-{{ lh.token }}
              {% endcapture %}
              {% capture this_value %}
                {{ output }}
              {% endcapture %}
              {% capture this_example %}
                <p class="font-{{ family.token }}-2xs line-height-{{ family.token }}-{{ this_lh }} measure-5 margin-top-0">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend’s friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
              {% endcapture %}
              {% include utilities/utility-example.html
                wrap = true
                utility = this_class
                utilityClasses = thisUtilityClasses
                value = this_value
                valueClasses = thisValueClasses
                example = this_example
                exampleClasses = thisExampleClasses
              %}
            {% endfor %}
          {% endif %}
        {% endfor %}
      </section>
    </section>
  </section>

  <section class="max-width" id="max-width">
    <section class="utility">
      {% include utilities/utility-title-bar.html
        title="Measure"
        property="max-width"
        responsive=true
      %}

      <section class="utility-examples">
        {% for measure in tokens.measure %}
          {% assign thisUtilityClasses = 'grid-col-fill' %}
          {% assign thisValueClasses = 'grid-col-auto' %}
          {% assign thisExampleClasses = 'grid-col-12 width-full maxw-none padding-y-1 border-top border-base-lightest margin-top-1' %}
          {% capture this_class %}
            .measure-{{ measure.token }}
          {% endcapture %}
          {% capture this_value %}
            {{ measure.value }}
          {% endcapture %}
          {% capture this_example %}
            <p class="font-serif-md line-height-serif-4 margin-top-0 measure-{{ measure.token }} border-bottom-05 border-secondary-light padding-bottom-05 margin-bottom-2">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend’s friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
          {% endcapture %}
          {% include utilities/utility-example.html
            wrap = true
            utility = this_class
            utilityClasses = thisUtilityClasses
            value = this_value
            valueClasses = thisValueClasses
            example = this_example
            exampleClasses = thisExampleClasses
          %}
        {% endfor %}
      </section>
    </section>
  </section>

  <section class="text-align" id="text-align">
    <section class="utility">
      {% include utilities/utility-title-bar.html
        title="Text alignment"
        property="text-align"
        var="text-align"
      %}
      <section class="utility-examples">
        {% assign alignments = 'left, center, right, justify'
        | split: ', ' %}
        {% for alignment in alignments %}
          {% assign thisUtilityClasses = nil %}
          {% assign thisValueClasses = nil %}
          {% assign thisExampleClasses = 'padding-left-4' %}
          {% capture this_class %}
            .text-{{ alignment }}
          {% endcapture %}
          {% capture this_value %}
            {{ alignment }}
          {% endcapture %}
          {% capture this_example %}
            <p class="font-serif-2xs line-height-serif-4 margin-top-0 measure-4 text-{{ alignment }}">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend’s friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.</p>
          {% endcapture %}
          {% include utilities/utility-example.html
            utility = this_class
            utilityClasses = thisUtilityClasses
            value = this_value
            valueClasses = thisValueClasses
            example = this_example
            exampleClasses = thisExampleClasses
          %}
        {% endfor %}
      </section>
    </section>
  </section>

  <section class="text-indent" id="text-indent">
    <section class="utility">
      {% include utilities/utility-title-bar.html
        title="Text indent"
      %}

      <section class="utility-examples">
        {% for item in page.vals_negative reversed %}
          {% assign thisUtilityClasses = 'grid-col-fill' %}
          {% assign thisValueClasses = 'grid-col-auto' %}
          {% assign thisExampleClasses = 'grid-col-12 width-full maxw-none padding-y-1 border-top border-base-lightest margin-top-1' %}
          {% capture this_class %}
            .text-indent-{{ item.token }}
          {% endcapture %}
          {% capture this_value %}
            {{ item.value }}
          {% endcapture %}
          {% capture this_example %}
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-{{ item.equiv }} text-indent-{{ item.token }}">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend’s friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre">  </span></span></p>
          {% endcapture %}
          {% include utilities/utility-example.html
            wrap = true
            utility = this_class
            utilityClasses = thisUtilityClasses
            value = this_value
            valueClasses = thisValueClasses
            example = this_example
            exampleClasses = thisExampleClasses
          %}
        {% endfor %}
        {% for item in page.vals_positive %}
          {% assign thisUtilityClasses = 'grid-col-fill' %}
          {% assign thisValueClasses = 'grid-col-auto' %}
          {% assign thisExampleClasses = 'grid-col-12 width-full maxw-none padding-y-1 border-top border-base-lightest margin-top-1' %}
          {% capture this_class %}
            .text-indent-{{ item.token }}
          {% endcapture %}
          {% capture this_value %}
            {{ item.value }}
          {% endcapture %}
          {% capture this_example %}
            <p class="font-serif-sm line-height-serif-4 margin-top-0 margin-bottom-2 text-left measure-4 padding-left-{{ item.equiv }} text-indent-{{ item.token }}">In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend’s friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result. <span class="font-sans-xs margin-top-05 display-block border-left-1px border-secondary-light"><span class="border-left-1px border-secondary-light display-inline-block text-indent-0 padding-left-1 text-pre">  </span></span></p>
          {% endcapture %}
          {% include utilities/utility-example.html
            wrap = true
            utility = this_class
            utilityClasses = thisUtilityClasses
            value = this_value
            valueClasses = thisValueClasses
            example = this_example
            exampleClasses = thisExampleClasses
          %}
        {% endfor %}
      </section>
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
        <td scope="row" data-title="Utility" class="tablet:maxw-card-lg">
          <span>
            .line-height-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-line-height(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/line-height/" class="token">line-height</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-line-height('heading', 2)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .measure-<a href="{{ site.baseurl }}/design-tokens/typesetting/measure/" class="token">measure</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-measure(<a href="{{ site.baseurl }}/design-tokens/typesetting/measure/" class="token">measure</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-measure(6)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .text-<code>alignment</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-text('<code>alignment</code>')
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-text('right')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .text-indent-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-text-indent(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-text-indent(-4)
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
$text-indent-palettes: (
  'palette-units-small-negative' // note: no trailing comma
);
</pre>
    <h4 class="font-lang-2xs margin-top-2 margin-bottom-05">Output</h4>
<pre class=" font-mono-xs margin-0 padding-0 bg-transparent">
.text-indent-neg-05  { text-indent: -.25rem; }
.text-indent-neg-1   { text-indent: -.5rem; }
.text-indent-neg-105 { text-indent: -.75rem; }
.text-indent-neg-2   { text-indent: -1rem; }
.text-indent-neg-205 { text-indent: -1.25rem; }
.text-indent-neg-3   { text-indent: -1.5rem; }
</pre>
    </aside>
    {% include utilities/spacing-palettes.html %}
  </section>
</section>
