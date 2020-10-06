---
permalink: /utilities/border/
layout: styleguide
type: utility
title: Border
category: Utilities
lead: Set width, color, style, and radius of an item’s borders
subnav:
- text: Border
  href: '#utility-border'
- text: Border style
  href: '#utility-border-style'
- text: Border width
  href: '#utility-border-width'
- text: Border color
  href: '#utility-border-color'
- text: Border radius
  href: '#utility-radius'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         border
  var:          border
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        true
  visited:      false
- base:         border
  var:          border-style
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         border
  var:          border-width
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         border
  var:          border-color
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        true
  visited:      false
- base:         radius
  var:          border-radius
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

{% include tokens/get-system-colors.html %}

{% assign border_modifiers = ", -top, -bottom, -left, -right, -x, -y" | split: ", " %}
{% assign border_modifiers_simple = ", -top, -bottom, -left, -right" | split: ", " %}

{% assign border_widths =
  site.data.tokens.special.noValue
  | concat: site.data.tokens.special.zero_zero
  | concat: site.data.tokens.spacing.positive.smaller
  | concat: site.data.tokens.spacing.positive.small
  %}

{% assign noValue_value = '1px' %}

{% assign theme_colors = site.data.tokens.color.theme %}
{% assign grayscale_colors = site.data.tokens.color.grayscale %}
{% assign basic_colors = site.data.tokens.color.basic %}
{% assign transparent = site.data.tokens.color.required %}
{% assign all_colors = grayscale_colors
  | concat: basic_colors
  %}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">border</span>
    <span class="property utilities-property">border-style</span>
    <span class="property utilities-property">border-width</span>
    <span class="property utilities-property">border-color</span>
    <span class="property utilities-property">border-radius</span>
  </div>
</div>

<section class="utilities-section">

  {% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="utility-border">

    {% include utilities/utility-title-bar.html
      title="Border"
      property="border, border-bottom, border-left, border-right, border-top"
    %}

    <section class="utility-examples">
      <p class="utility-note"><strong>Note: </strong> The <code>border</code> utilities apply a solid border of specified width. If no width is specified, the utilities apply a solid <code>1px</code> border.</p>

      {% for modifier in border_modifiers %}
        <div class="utility-example-container">
          <div class="usa-grid-row">
            <div class="usa-grid-col utility-example-class">
              <span class="utility-class">.border{{ modifier }}</span>
            </div>
            <div class="usa-grid-col utility-example-value">
            </div>
            <div class="usa-grid-col utility-example">
              <div class="border{{ modifier }} square-8 bg-base-lightest"></div>
            </div>
          </div>
        </div>
      {% endfor %}

      <h4 class="utility-examples-title margin-bottom-2">Border on all sides</h4>
      {% for border in border_widths %}
        <div class="utility-example-container">
          <div class="usa-grid-row">
            {% if border.token == 'noValue' %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">1px</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border square-8 bg-base-lightest"></div>
              </div>
            {% else %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-{{ border.token }}</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">{{ border.value }}</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-{{ border.token }} square-8 bg-base-lightest"></div>
              </div>
            {% endif %}
          </div>
        </div>
      {% endfor %}

      <!-- Border top -->
      <h4 class="utility-examples-title">Border on the top</h4>
      {% for border in border_widths %}
        <div class="utility-example-container">
          <div class="usa-grid-row">
            {% if border.token == 'noValue' %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-top</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">1px</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-top square-8 bg-base-lightest"></div>
              </div>
            {% else %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-top-{{ border.token }}</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">{{ border.value }}</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-top-{{ border.token }} square-8 bg-base-lightest"></div>
              </div>
            {% endif %}
          </div>
        </div>
      {% endfor %}

      <!-- Border bottom -->
      <h4 class="utility-examples-title margin-bottom-2">Border on the bottom</h4>
      {% for border in border_widths %}
        <div class="utility-example-container">
          <div class="usa-grid-row">
            {% if border.token == 'noValue' %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-bottom</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">1px</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-bottom square-8 bg-base-lightest"></div>
              </div>
            {% else %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-bottom-{{ border.token }}</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">{{ border.value }}</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-bottom-{{ border.token }} square-8 bg-base-lightest"></div>
              </div>
            {% endif %}
          </div>
        </div>
      {% endfor %}

      <!-- Border left -->
      <h4 class="utility-examples-title margin-bottom-2">Border on the left</h4>
      {% for border in border_widths %}
        <div class="utility-example-container">
          <div class="usa-grid-row">
            {% if border.token == 'noValue' %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-left</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">1px</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-left square-8 bg-base-lightest"></div>
              </div>
            {% else %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-left-{{ border.token }}</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">{{ border.value }}</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-left-{{ border.token }} square-8 bg-base-lightest"></div>
              </div>
            {% endif %}
          </div>
        </div>
      {% endfor %}

      <!-- Border right -->
      <h4 class="utility-examples-title margin-bottom-2">Border on the right</h4>
      {% for border in border_widths %}
        <div class="utility-example-container">
          <div class="usa-grid-row">
            {% if border.token == 'noValue' %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-right</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">1px</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-right square-8 bg-base-lightest"></div>
              </div>
            {% else %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-right-{{ border.token }}</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">{{ border.value }}</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-right-{{ border.token }} square-8 bg-base-lightest"></div>
              </div>
            {% endif %}
          </div>
        </div>
      {% endfor %}

      <!-- Border x -->
      <h4 class="utility-examples-title margin-bottom-2">Border on the left and right</h4>
      {% for border in border_widths %}
        <div class="utility-example-container">
          <div class="usa-grid-row">
            {% if border.token == 'noValue' %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-x</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">1px</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-x square-8 bg-base-lightest"></div>
              </div>
            {% else %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-x-{{ border.token }}</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">{{ border.value }}</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-x-{{ border.token }} square-8 bg-base-lightest"></div>
              </div>
            {% endif %}
          </div>
        </div>
      {% endfor %}

      <!-- Border y -->
      <h4 class="utility-examples-title margin-bottom-2">Border on the top and bottom</h4>
      {% for border in border_widths %}
        <div class="utility-example-container">
          <div class="usa-grid-row">
            {% if border.token == 'noValue' %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-y</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">1px</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-y square-8 bg-base-lightest"></div>
              </div>
            {% else %}
              <div class="usa-grid-col utility-example-class">
                <span class="utility-class">.border-y-{{ border.token }}</span>
              </div>
              <div class="usa-grid-col utility-example-value">
                <span class="utility-value">{{ border.value }}</span>
              </div>
              <div class="usa-grid-col utility-example">
                <div class="border-y-{{ border.token }} square-8 bg-base-lightest"></div>
              </div>
            {% endif %}
          </div>
        </div>
      {% endfor %}

    </section><!-- exanples -->
  </section><!-- utility -->

  <section class="utility" id="utility-border-style">
    {% include utilities/utility-title-bar.html
      title="Border style"
      property="border-style"
    %}
    <section class="utility-examples">
      <div class="utility-example-container">
        <div class="usa-grid-row">
          <div class="usa-grid-col utility-example-class">
            <span class="utility-class"><span class="text-light">.border</span>.border-solid</span>
          </div>
          <div class="usa-grid-col utility-example-value">
          </div>
          <div class="usa-grid-col utility-example">
            <div class="border border-solid square-8 bg-base-lightest"></div>
          </div>
        </div>
      </div>
      <div class="utility-example-container">
        <div class="usa-grid-row">
          <div class="usa-grid-col utility-example-class">
            <span class="utility-class"><span class="text-light">.border</span>.border-dashed</span>
          </div>
          <div class="usa-grid-col utility-example-value">
          </div>
          <div class="usa-grid-col utility-example">
            <div class="border border-dashed square-8 bg-base-lightest"></div>
          </div>
        </div>
      </div>
      <div class="utility-example-container">
        <div class="usa-grid-row">
          <div class="usa-grid-col utility-example-class">
            <span class="utility-class"><span class="text-light">.border</span>.border-dotted</span>
          </div>
          <div class="usa-grid-col utility-example-value">
          </div>
          <div class="usa-grid-col utility-example">
            <div class="border border-dotted square-8 bg-base-lightest"></div>
          </div>
        </div>
      </div>
    </section>
  </section>

  <section class="utility" id="utility-border-width">
    {% include utilities/utility-title-bar.html
      title="Border width"
      property="border-width"
    %}

    <section class="utility-examples">
      <p class="utility-note"><strong>Note: </strong> The <code>border-width</code> utilities apply only the <code>border-width</code> property to an item.</p>

      <!-- Border all -->
      <div class="grid-row">
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-top-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-bottom-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-left-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-right-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-x-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
        {% for border in border_widths %}
          {% if border.token != 'noValue' %}
            <div class="utility-example-container grid-col-12">
              <div class="display-flex flex-justify">
                <span class="utility-class">.border-y-width-{{ border.token }}</span>
                <span class="utility-value margin-left-2px">{{ border.value }}</span>
              </div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </section>
  </section>

  <section class="utility" id="utility-border-color">
    {% include utilities/utility-title-bar.html
      title="Border color"
      property="border-color"
    %}

    <section class="utility-examples">
      <div class="grid-row">
        {% for color in transparent %}
          {% if color.default %}
            {% assign system = system-colors | where: 'token', color.default %}
            {% assign value = system[0].value %}
            {% assign token = color.default %}
          {% else %}
            {% assign value = color.value %}
            {% assign token = false %}
          {% endif %}
          <p class="utility-example-container grid-col-12 display-flex flex-align-center">
            <span class="flex-fill">
              <span class="square-4 radius-sm text-middle padding-05 display-inline-block margin-right-1 bg-white ">
                <span class="square-3 radius-sm display-block border-1px border-{{ color.token }}"></span>
              </span>
              <span class="display-none tablet:display-inline-block square-4 radius-sm text-middle padding-05 margin-right-1 bg-ink">
                <span class="square-3 radius-sm display-block border-1px border-{{ color.token }}"></span>
              </span>
              <span class="utility-class">.border-{{ color.token }}</span>
            </span>
            {% if token %}
              <code class="display-none tablet:display-inline-block bg-secondary-lighter radius-sm">{{ token }}</code>
            {% endif %}
            <span class="display-none tablet:display-inline-block flex-auto utility-value-color margin-left-1">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ value }}
            </span>
          </p>
        {% endfor %}
        {% for color in theme_colors %}
          {% if color.default %}
            {% assign system = system-colors | where: 'token', color.default %}
            {% assign value = system[0].value %}
            {% assign token = color.default %}
          {% else %}
            {% assign value = color.value %}
            {% assign token = false %}
          {% endif %}
          <p class="utility-example-container grid-col-12 display-flex flex-align-center">
            <span class="flex-fill">
              <span class="square-4 radius-sm text-middle padding-05 display-inline-block margin-right-1 bg-white ">
                <span class="square-3 radius-sm display-block border-1px border-default-{{ color.token }}"></span>
              </span>
              <span class="display-none tablet:display-inline-block square-4 radius-sm text-middle padding-05 margin-right-1 bg-ink">
                <span class="square-3 radius-sm display-block border-1px border-{{ color.token }}"></span>
              </span>
              <span class="utility-class">.border-{{ color.token }}</span>
            </span>
            {% if token %}
              <code class="display-none tablet:display-inline-block bg-secondary-lighter radius-sm">{{ token }}</code>
            {% endif %}
            <span class="display-none tablet:display-inline-block flex-auto utility-value-color margin-left-1">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ value }}
            </span>
          </p>
        {% endfor %}
        {% for color in all_colors %}
          {% if color.default %}
            {% assign system = system-colors | where: 'token', color.default %}
            {% assign value = system[0].value %}
            {% assign token = color.default %}
          {% else %}
            {% assign value = color.value %}
            {% assign token = false %}
          {% endif %}
          <p class="utility-example-container grid-col-12 display-flex flex-align-center">
            <span class="flex-fill">
              <span class="square-4 radius-sm text-middle padding-05 display-inline-block margin-right-1 bg-white ">
                <span class="square-3 radius-sm display-block border-1px border-{{ color.token }}"></span>
              </span>
              <span class="display-none tablet:display-inline-block square-4 radius-sm text-middle padding-05 margin-right-1 bg-ink">
                <span class="square-3 radius-sm display-block border-1px border-{{ color.token }}"></span>
              </span>
              <span class="utility-class">.border-{{ color.token }}</span>
            </span>
            {% if token %}
              <code class="display-none tablet:display-inline-block bg-secondary-lighter radius-sm">{{ token }}</code>
            {% endif %}
            <span class="display-none tablet:display-inline-block flex-auto utility-value-color margin-left-1">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ value }}
            </span>
          </p>
        {% endfor %}
      </div>
    </section>
  </section>



  <section class="utility" id="utility-radius">
    {% include utilities/utility-title-bar.html
      title="Border radius"
      property="border-radius"
    %}

    <section class="utility-examples">

      {% for modifier in border_modifiers_simple %}
        <div class="utility-example-container">
          <div class="usa-grid-row">
            <div class="usa-grid-col utility-example-class">
              <span class="utility-class">.radius{{ modifier }}-0</span>
            </div>
            <div class="usa-grid-col utility-example-value">
              <span class="utility-value margin-top-2px">0</span>
            </div>
            <div class="usa-grid-col utility-example">
              <div class="bg-secondary-light height-8 width-15 radius{{ modifier }}-0"></div>
            </div>
          </div>
        </div>
        <div class="utility-example-container">
          <div class="usa-grid-row">
            <div class="usa-grid-col utility-example-class">
              <span class="utility-class">.radius{{ modifier }}-sm</span>
            </div>
            <div class="usa-grid-col utility-example-value">
              <span class="utility-value margin-top-2px">2px</span>
            </div>
            <div class="usa-grid-col utility-example">
              <div class="bg-secondary-light height-8 width-15 radius{{ modifier }}-sm"></div>
            </div>
          </div>
        </div>
        <div class="utility-example-container">
          <div class="usa-grid-row">
            <div class="usa-grid-col utility-example-class">
              <span class="utility-class">.radius{{ modifier }}-md</span>
            </div>
            <div class="usa-grid-col utility-example-value">
              <span class="utility-value margin-top-2px">4px</span>
            </div>
            <div class="usa-grid-col utility-example">
              <div class="bg-secondary-light height-8 width-15 radius{{ modifier }}-md"></div>
            </div>
          </div>
        </div>
        <div class="utility-example-container">
          <div class="usa-grid-row">
            <div class="usa-grid-col utility-example-class">
              <span class="utility-class">.radius{{ modifier }}-lg</span>
            </div>
            <div class="usa-grid-col utility-example-value">
              <span class="utility-value margin-top-2px">8px</span>
            </div>
            <div class="usa-grid-col utility-example">
              <div class="bg-secondary-light height-8 width-15 radius{{ modifier }}-lg"></div>
            </div>
          </div>
        </div>
        <div class="utility-example-container">
          <div class="usa-grid-row">
            <div class="usa-grid-col utility-example-class">
              <span class="utility-class">.radius{{ modifier }}-pill</span>
            </div>
            <div class="usa-grid-col utility-example-value">
              <span class="utility-value margin-top-2px">99rem</span>
            </div>
            <div class="usa-grid-col utility-example">
              <div class="bg-secondary-light height-8 width-15 radius{{ modifier }}-pill"></div>
            </div>
          </div>
        </div>
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
            .border-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-border(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-border(2px)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .border-<code>modifier</code>-<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-border-<code>modifier</code>(<a href="{{ site.baseurl }}/design-tokens/spacing-units/" class="token">units</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-border-y(1)
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .border-<a href="{{ site.baseurl }}/design-tokens/color/" class="token">color</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-border(<a href="{{ site.baseurl }}/design-tokens/color/" class="token">color</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-border('primary-vivid')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .border-<code>style</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-border(<code>modifier</code>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-border('dotted')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .radius-<code>radius</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-radius(<code>radius</code>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-radius('sm')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .radius-<code>modifier</code>-<code>radius</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-radius-<code>modifier</code>(<code>radius</code>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-radius-left('pill')
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
$border-color-palettes: (
  'palette-color-blue-warm-medium-vivid' // note: no trailing comma
);
</pre>
    <h4 class="font-lang-2xs margin-top-2 margin-bottom-05">Output</h4>
<pre class=" font-mono-xs margin-0 padding-0 bg-transparent">
.border-blue-warm-40v { border-color: #5E99FF; }
.border-blue-warm-50v { border-color: #2673DF; }
.border-blue-warm-60v { border-color: #0052DE; }
</pre>
    </aside>

    {% include utilities/standard-palettes.html %}
    {% include utilities/spacing-palettes.html %}
    {% include utilities/color-palettes.html %}

  </section>
</section>
