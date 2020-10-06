---
permalink: /utilities/color/
layout: styleguide
type: utility
title: Color
category: Utilities
lead: Change the color of text and the background color of an item.
subnav:
- text: Text color
  href: '#text-color'
- text: Background color
  href: '#background-color'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         bg
  var:          background-color
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        true
  visited:      false
- base:         text
  var:          color
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        true
  visited:      false
---

{% assign theme_colors = site.data.tokens.color.theme %}
{% assign grayscale_colors = site.data.tokens.color.grayscale %}
{% assign basic_colors = site.data.tokens.color.basic %}
{% assign all_colors = theme_colors
  | concat: grayscale_colors
  | concat: basic_colors
  %}

{% include tokens/get-system-colors.html %}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">background-color</span>
    <span class="property utilities-property">color</span>
  </div>
</div>

<section class="utilities-section">

{% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="text-color">
    {% include utilities/utility-title-bar.html
      title="Text color"
      property="color"
      var="color"
    %}

    <section class="utility-examples">
      <h4 class="utility-examples-title">Project theme colors <a class="utility-examples-helper" href="{{ site.baseurl }}/design-tokens/color/theme-tokens/">Read more about project theme colors</a></h4>

      <div class="grid-row">
        {% for color in theme_colors %}
          {% assign system = system-colors | where: 'token', color.default %}
          {% assign value = system[0].value %}
          {% assign grade = color.default
            | regexreplace: '.+?(\d+).*?$', '\1'
            | times: 1 %}

          <div class="utility-example-container grid-col-12 font-lang-xs display-flex flex-align-center flex-justify">
            <span class="radius-md padding-05 text-default-{{ color.token }}{% if grade < 50 %} bg-gray-90 is-inverse{% endif %}">.text-{{ color.token }}</span>
            <span class="flex-auto utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {% assign system = system-colors | where: 'token', color.default %}
              {{ system[0].value }}
            </span>
          </div>
        {% endfor %}
      </div>

      <h3 class="font-lang-6 margin-top-4 padding-bottom-1 margin-bottom-1 border-gray-10 border-bottom-1px">Grayscale palette</h3>

      <div class="grid-row">
        {% for color in grayscale_colors %}
          {% assign system = system-colors | where: 'token', color.default %}
          {% assign value = system[0].value %}
          {% if color.default %}
            {% assign grade = color.default
              | regexreplace: '.+?(\d+).*?$', '\1'
              | times: 1 %}
          {% else %}
            {% if color.token contains 'white' %}
              {% assign grade = 0 %}
            {% elsif color.token contains 'black' %}
              {% assign grade = 100 %}
            {% else %}
              {% assign grade = color.token
                | regexreplace: '.+?(\d+).*?$', '\1'
                | times: 1 %}
            {% endif %}
          {% endif %}
          <div class="utility-example-container grid-col-12 font-lang-xs display-flex flex-align-center flex-justify">
            <span class="radius-md padding-05 text-{{ color.token }}{% if grade < 50 %} bg-gray-90 is-inverse{% endif %}">.text-{{ color.token }}</span>
            <span class="flex-auto utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ color.value }}
            </span>
          </div>
        {% endfor %}
      </div>

      <h3 class="font-lang-6 margin-top-4 padding-bottom-1 margin-bottom-1 border-gray-10 border-bottom-1px">Basic palette</h3>

      <div class="grid-row">
        {% for color in basic_colors %}
          {% assign system = system-colors | where: 'token', color.default %}
          {% assign value = system[0].value %}
          {% if color.default %}
            {% assign grade = color.default
              | regexreplace: '.+?(\d+).*?$', '\1'
              | times: 1 %}
          {% else %}
            {% if color.token contains 'white' %}
              {% assign grade = 0 %}
            {% elsif color.token contains 'black' %}
              {% assign grade = 100 %}
            {% else %}
              {% assign grade = color.token
                | regexreplace: '.+?(\d+).*?$', '\1'
                | times: 1 %}
            {% endif %}
          {% endif %}
          <div class="utility-example-container grid-col-12 font-lang-xs display-flex flex-align-center flex-justify">
            <span class="radius-md padding-05 text-{{ color.token }}{% if grade < 50 %} bg-gray-90 is-inverse{% endif %}">.text-{{ color.token }}</span>
            <span class="flex-auto utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ value }}
            </span>
          </div>
        {% endfor %}
      </div>
    </section>
  </section>

  <section class="utility" id="background-color">
    {% include utilities/utility-title-bar.html
      title="Background color"
      property="background-color"
    %}

    <section class="utility-examples">
      <h3 class="font-lang-4 margin-top-0 padding-bottom-1 margin-bottom-1 border-gray-10 border-bottom-1px">Project theme colors <a class="utility-examples-helper" href="{{ site.baseurl }}/design-tokens/color/theme-tokens/">Read more about project theme colors</a></h3>
      <div class="grid-row">
        {% for color in theme_colors %}
          {% assign system = system-colors | where: 'token', color.default %}
          {% assign value = system[0].value %}
          <p class="utility-example-container grid-col-12 display-flex flex-align-center measure-none">
            <span class="flex-fill">
              <span class="square-4 radius-sm display-inline-block text-middle margin-right-1 bg-default-{{ color.token }}"></span>
              <span class="utility-class">.bg-{{ color.token }}</span>
            </span>
            <span class="flex-auto utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ value }}
            </span>
          </p>
        {% endfor %}
      </div>
    </section>

    <section class="utility-examples">
      <h3 class="font-lang-4 margin-top-4 padding-bottom-1 margin-bottom-1 border-gray-10 border-bottom-1px">Grayscale palette</h3>
      <div class="grid-row">
        {% for color in grayscale_colors %}
          <p class="utility-example-container grid-col-12 display-flex flex-align-center measure-none">
            <span class="flex-fill">
              <span class="square-4 radius-sm display-inline-block text-middle margin-right-1 bg-{{ color.token }}"></span>
              <span class="utility-class">.bg-{{ color.token }}</span>
            </span>
            <span class="flex-auto utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ color.value }}
            </span>
          </p>
        {% endfor %}
      </div>
    </section>

    <section class="utility-examples">
      <h3 class="font-lang-4 margin-top-4 padding-bottom-1 margin-bottom-1 border-gray-10 border-bottom-1px">Basic palette</h3>
      <div class="grid-row">
        {% for color in basic_colors %}
          {% assign system = system-colors | where: 'token', color.default %}
          {% assign value = system[0].value %}
          <p class="utility-example-container grid-col-12 display-flex flex-align-center measure-none">
            <span class="flex-fill">
              <span class="square-4 radius-sm display-inline-block text-middle margin-right-1 bg-{{ color.token }}"></span>
              <span class="utility-class">.bg-{{ color.token }}</span>
            </span>
            <span class="flex-auto utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ value }}
            </span>
          </p>
        {% endfor %}
      </div>
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
            .text-<a href="{{ site.baseurl }}/design-tokens/color/" class="token">color</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-text(<a href="{{ site.baseurl }}/design-tokens/color/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-text('primary-darker')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .bg-<a href="{{ site.baseurl }}/design-tokens/color/" class="token">color</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-bg(<a href="{{ site.baseurl }}/design-tokens/color/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-bg('primary-darker')
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
$background-color-palettes: (
  'palette-color-red-medium',
  'palette-color-red-medium-vivid' // note: no trailing comma
);
</pre>
    <h4 class="font-lang-2xs margin-top-2 margin-bottom-05">Output</h4>
<pre class=" font-mono-xs margin-0 padding-0 bg-transparent">
.bg-red-40 { background-color: #ed6b61; }
.bg-red-50 { background-color: #d83731; }
.bg-red-60 { background-color: #ab3a3a; }
.bg-red-40v { background-color: #ff5c48; }
.bg-red-50v { background-color: #e82207; }
.bg-red-60v { background-color: #c31f0a; }
</pre>
    </aside>

    <h4 class="font-lang-2xs margin-top-4 margin-bottom-0">Global color palettes</h4>
    <p class="utility-text margin-top-05">Any palette added to the <code>$global-color-palettes</code> list in <code>_uswds-theme-utilities.scss</code> will output in the background color, text color, border color, and text decoration color utilities.</p>

    {% include utilities/color-palettes.html %}

  </section>
</section>
