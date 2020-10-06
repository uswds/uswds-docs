---
permalink: /utilities/text-styles/
layout: styleguide
type: utility
title: Text styles
category: Utilities
lead: Change the appearance of text. (Not all text styles are available in every typeface.)
subnav:
- text: Font style
  href: '#font-style'
- text: Font weight
  href: '#font-weight'
- text: Letterspacing
  href: '#letterspacing'
- text: Tabular numerals
  href: '#font-feature-settings'
- text: Text decoration
  href: '#text-decoration'
- text: Text decoration color
  href: '#text-decoration-color'
- text: Uppercase and lowercase
  href: '#text-transform'
- text: Vertical align
  href: '#vertical-align'
- text: Whitespace
  href: '#whitespace'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         text
  var:          font-style
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          font-weight
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          letter-spacing
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          font-feature-settings
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          text-decoration
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        true
  visited:      false
- base:         underline
  var:          text-decoration-color
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        true
  visited:      false
- base:         text
  var:          text-transform
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          vertical-align
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         text
  var:          whitespace
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

{% include tokens/get-system-colors.html %}
{% assign colors = site.data.tokens.color %}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">font-feature-settings</span>
    <span class="property utilities-property">font-style</span>
    <span class="property utilities-property">font-weight</span>
    <span class="property utilities-property">letter-spacing</span>
    <span class="property utilities-property">text-decoration</span>
    <span class="property utilities-property">text-decoration-color</span>
    <span class="property utilities-property">text-transform</span>
    <span class="property utilities-property">vertical-align</span>
    <span class="property utilities-property">white-space</span>
  </div>
</div>

<section class="utilities-section">

  {% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="font-style">
    {% include utilities/utility-title-bar.html
      title="Font style"
    %}
    <section class="utility-examples">
      <p class="utility-example-container text-italic">.text-italic</p>
      <p class="utility-example-container text-no-italic">.text-no-italic</p>
    </section>
  </section>

  <section class="utility" id="font-weight">
    {% include utilities/utility-title-bar.html
      title="Font weight"
      responsive=true
    %}
    <section class="utility-examples">
      <p class="utility-example-container text-thin">.text-thin</p>
      <p class="utility-example-container text-light">.text-light</p>
      <p class="utility-example-container text-normal">.text-normal</p>
      <p class="utility-example-container text-medium">.text-medium <span class="text-base-dark">(<b>Note:</b>  not included in default set)</span></p>
      <p class="utility-example-container text-semibold">.text-semibold</p>
      <p class="utility-example-container text-bold">.text-bold</p>
      <p class="utility-example-container text-heavy">.text-heavy </p>
    </section>
  </section>

  <section class="utility" id="letterspacing">
    {% include utilities/utility-title-bar.html
      title="Letterspacing"
      property="letter-spacing"
      var="letter-spacing"
    %}
    <section class="utility-examples">
      <p class="utility-example-container grid-row">
        <span class="grid-col-fill text-ls-neg-3">.text-ls-neg-3</span>
        <span class="grid-col-auto font-mono-xs text-light">-0.03em</span>
      </p>
      <p class="utility-example-container grid-row">
        <span class="grid-col-fill text-ls-neg-2">.text-ls-neg-2</span>
        <span class="grid-col-auto font-mono-xs text-light">-0.02em</span>
      </p>
      <p class="utility-example-container grid-row">
        <span class="grid-col-fill text-ls-neg-1">.text-ls-neg-1</span>
        <span class="grid-col-auto font-mono-xs text-light">-0.01em</span>
      </p>
      <p class="utility-example-container grid-row">
        <span class="grid-col-fill text-ls-auto">.text-ls-auto</span>
        <span class="grid-col-auto font-mono-xs text-light">initial</span>
      </p>
      <p class="utility-example-container grid-row">
        <span class="grid-col-fill text-ls-1">.text-ls-1</span>
        <span class="grid-col-auto font-mono-xs text-light">0.05em</span>
      </p>
      <p class="utility-example-container grid-row">
        <span class="grid-col-fill text-ls-2">.text-ls-2</span>
        <span class="grid-col-auto font-mono-xs text-light">0.1em</span>
      </p>
      <p class="utility-example-container grid-row">
        <span class="grid-col-fill text-ls-3">.text-ls-3</span>
        <span class="grid-col-auto font-mono-xs text-light">0.15em</span>
      </p>
    </section>
  </section>

  <section class="utility" id="font-feature-settings">
    {% include utilities/utility-title-bar.html
      title="Tabular numerals"
      property="font-feature-settings"
      var="font-feature-settings"
    %}
    <section class="utility-examples">
      <div class="utility-example-container">
        <p class="font-lang-8 text-tabular margin-0">123,456,789</p>
        <p class="font-lang-8 text-tabular margin-0">825,489,012</p>
        <p class="font-lang-8 text-tabular margin-0">112,051,928</p>
        <p class="utility-class margin-top-2">.text-tabular</p>
        <p class="margin-bottom-05"><b>Note:</b> not included in default set</p>
      </div>
      <div class="utility-example-container">
        <p class="font-lang-8 text-no-tabular margin-0">123,456,789</p>
        <p class="font-lang-8 text-no-tabular margin-0">825,489,012</p>
        <p class="font-lang-8 text-no-tabular margin-0">112,051,928</p>
        <p class="utility-class margin-top-2">.text-no-tabular</p>
      </div>
    </section>
  </section>

  <section class="utility" id="text-decoration">
    {% include utilities/utility-title-bar.html
      title="Text decoration"
    %}
    <section class="utility-examples">
      <p class="utility-example-container text-underline">.text-underline</p>
      <p class="utility-example-container text-strike">.text-strike</p>
      <p class="utility-example-container text-no-strike">.text-no-strike</p>
      <p class="utility-example-container text-no-underline">.text-no-underline</p>
    </section>
  </section>

  <section class="utility" id="text-decoration-color">
    {% include utilities/utility-title-bar.html
      title="Text decoration color"
    %}
    <section class="utility-examples">

      {% for color in colors.theme %}
        {% if color.default %}
          {% assign system = system-colors | where: 'token', color.default %}
          {% assign value = system[0].value %}
          {% assign token = color.default %}
        {% else %}
          {% assign value = color.value %}
          {% assign token = false %}
        {% endif %}
        <div class="utility-example-container grid-col-12 font-lang-xs display-flex flex-align-center flex-justify{% if forloop.last %}{% endif %}">
          <span class="text-underline underline-default-{{ color.token }}">.underline-{{ color.token }}<span class="text-thin text-gray-50">.text-underline</span></span>
          <span class="flex-auto">
            {% if token %}
              <code class="bg-secondary-lighter radius-sm">{{ token }}</code>
            {% endif %}
            <span class="utility-value-color">
              <span class="utility-value-color-chip bg-{{ color.token }}"></span>
              {{ value }}
            </span>
          </span>
        </div>
      {% endfor %}
    </section>
  </section>

  <section class="utility" id="text-transform">
    {% include utilities/utility-title-bar.html
      title="Uppercase and lowercase"
      property="text-transform"
      var="text-transform"
    %}
    <section class="utility-examples">
      <p class="utility-example-container text-uppercase">.text-uppercase</p>
      <p class="utility-example-container text-lowercase">.text-lowercase</p>
      <p class="utility-example-container text-no-uppercase">.text-no-uppercase</p>
      <p class="utility-example-container text-no-lowercase">.text-no-lowercase</p>
    </section>
  </section>

  <section class="utility" id="vertical-align">
    {% include utilities/utility-title-bar.html
      title="Vertical alignment"
      property="vertical-align"
      var="vertical-align"
    %}
    <section class="utility-examples">
      <p class="utility-example-container">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-baseline"></span> <span class="text-baseline text-red">.text-baseline</span></p>
      <p class="utility-example-container">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-bottom"></span> <span class="text-bottom text-red">.text-bottom</span></p>
      <p class="utility-example-container">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-middle"></span> <span class="text-middle text-red">.text-middle</span></p>
      <p class="utility-example-container">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-sub"></span> <span class="text-sub text-red">.text-sub</span></p>
      <p class="utility-example-container">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-super"></span> <span class="text-super text-red">.text-super</span></p>
      <p class="utility-example-container">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-tbottom"></span> <span class="text-tbottom text-red">.text-tbottom</span></p>
      <p class="utility-example-container">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-ttop"></span> <span class="text-ttop text-red">.text-ttop</span></p>
      <p class="utility-example-container">A line of text and <span class="display-inline-block bg-red height-2px width-4 text-top"></span> <span class="text-top text-red">.text-top</span></p>
    </section>
  </section>

  <section class="utility" id="whitespace">
    {% include utilities/utility-title-bar.html
      title="Whitespace formatting"
      property="white-space"
      var="whitespace"
    %}
    <section class="utility-examples">
      <p class="utility-example-container"><span class="display-inline-block width-card padding-1 border-1px"> <span class="text-pre"><span class="text-red">.text-pre</span> formatted line   with     multiple       spaces</span></span></p>
      <p class="utility-example-container"><span class="display-inline-block width-card padding-1 border-1px"> <span class="text-pre-line"><span class="text-red">.text-pre-line</span> formatted line   with     multiple       spaces</span></span></p>
      <p class="utility-example-container"><span class="display-inline-block width-card padding-1 border-1px"> <span class="text-pre-wrap"><span class="text-red">.text-pre-wrap</span> formatted line   with     multiple       spaces</span></span></p>
      <p class="utility-example-container"><span class="display-inline-block width-card padding-1 border-1px"> <span class="text-wrap"><span class="text-red">.text-wrap</span> formatted line   with     multiple       spaces</span></span></p>
      <p class="utility-example-container"><span class="display-inline-block width-card padding-1 border-1px"> <span class="text-no-wrap"><span class="text-red">.text-no-wrap</span> formatted line   with     multiple       spaces</span></span></p>
    </section><!-- examples -->
  </section><!-- utility -->
</section><!-- utilities -->

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
          .text-<code>style</code>
        </span>
      </td>
      <td data-title="Mixin">
        <span>
          u-text(<code>style</code>)
        </span>
      </td>
      <td data-title="Example">
        <span>
          @include u-text('italic')
        </span>
      </td>
    </tr>
    <tr>
      <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
        <span>
          .text-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-weight/" class="token">weight</a>
        </span>
      </td>
      <td data-title="Mixin">
        <span>
          u-text(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-weight/" class="token">weight</a>)
        </span>
      </td>
      <td data-title="Example">
        <span>
          @include u-text('light')
        </span>
      </td>
    </tr>
    <tr>
      <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
        <span>
          .text-<code>tabular</code>
        </span>
      </td>
      <td data-title="Mixin">
        <span>
          u-text('<code>tabular</code>')
        </span>
      </td>
      <td data-title="Example">
        <span>
          @include u-text('no-tabular')
        </span>
      </td>
    </tr>
    <tr>
      <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
        <span>
          .text-<code>decoration</code>
        </span>
      </td>
      <td data-title="Mixin">
        <span>
          u-text(<code>decoration</code>)
        </span>
      </td>
      <td data-title="Example">
        <span>
          @include u-text('underline')
        </span>
      </td>
    </tr>
    <tr>
      <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
        <span>
          .underline-<a href="{{ site.baseurl }}/design-tokens/color/" class="token">color</a>
        </span>
      </td>
      <td data-title="Mixin">
        <span>
          u-underline(<a href="{{ site.baseurl }}/design-tokens/color/" class="token">color</a>)
        </span>
      </td>
      <td data-title="Example">
        <span>
          @include u-underline('primary-vivid')
        </span>
      </td>
    </tr>
    <tr>
      <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
        <span>
          .text-<code>case</code>
        </span>
      </td>
      <td data-title="Mixin">
        <span>
          u-text(<code>case</code>)
        </span>
      </td>
      <td data-title="Example">
        <span>
          @include u-text('uppercase')
        </span>
      </td>
    </tr>
    <tr>
      <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
        <span>
          .text-<code>vertical-align</code>
        </span>
      </td>
      <td data-title="Mixin">
        <span>
          u-text(<code>vertical-align</code>)
        </span>
      </td>
      <td data-title="Example">
        <span>
          @include u-text('ttop')
        </span>
      </td>
    </tr>
    <tr>
      <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
        <span class="font-lang-2xs">
          multiple text utilities...
        </span>
      </td>
      <td data-title="Mixin">
        <span>
          u-text(<code>token</code>, <code>token</code>, <code>token</code>...)
        </span>
      </td>
      <td data-title="Example">
        <span>
          @include u-text('uppercase', 'primary-darker', 'no-wrap', 'italic', 'bold', 'no-underline')
        </span>
      </td>
    </tr>
  </tbody>
</table>

<section id="utility-mixins" class="padding-top-4">
  <h2 class="site-h2 margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <div class="grid-row font-lang-3xs text-bold border-bottom border-base-light padding-bottom-05 margin-top-2 margin-top-3">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-4">Mixin</div>
    <div class="grid-col-4">Example</div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>style</code></div>
    <div class="grid-col-4">u-text(<code>style</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('italic')</span>
      <span class="display-block margin-top-1">u-text('no-italic')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>weight</code></div>
    <div class="grid-col-4">u-text(<code>weight</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('thin')</span>
      <span class="display-block margin-top-1">u-text('normal')</span>
      <span class="display-block margin-top-1">u-text(900)</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-ls-<code>value</code></div>
    <div class="grid-col-4">u-text('ls-<code>value</code>'')</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('ls-1')</span>
      <span class="display-block margin-top-1">u-text('ls-auto')</span>
      <span class="display-block margin-top-1">u-text('ls-neg-1')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>tabular</code></div>
    <div class="grid-col-4">u-text('<code>tabular</code>')</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('tabular')</span>
      <span class="display-block margin-top-1">u-text('no-tabular')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>decoration</code></div>
    <div class="grid-col-4">u-text('<code>decoration</code>')</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('underline')</span>
      <span class="display-block margin-top-1">u-text('strike')</span>
      <span class="display-block margin-top-1">u-text('no-underline')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.underline-<code>color</code></div>
    <div class="grid-col-4">u-underline(<code>color</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-underline('secondary-dark')</span>
      <span class="display-block margin-top-1">u-underline('red-50v')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>case</code></div>
    <div class="grid-col-4">u-text(<code>case</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('uppercase')</span>
      <span class="display-block margin-top-1">u-text('lowercase')</span>
      <span class="display-block margin-top-1">u-text('no-uppercase')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>vertical-align</code></div>
    <div class="grid-col-4">u-text(<code>vertical-align</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('baseline')</span>
      <span class="display-block margin-top-1">u-text('sup')</span>
      <span class="display-block margin-top-1">u-text('ttop')</span>
    </div>
  </div>
  <div class="grid-row font-mono-2xs padding-y-1 border-bottom border-base-light">
    <div class="grid-col-4">.text-<code>white-space</code></div>
    <div class="grid-col-4">u-text(<code>white-space</code>)</div>
    <div class="grid-col-4">
      <span class="display-block">u-text('pre-line')</span>
      <span class="display-block margin-top-1">u-text('no-wrap')</span>
      <span class="display-block margin-top-1">u-text('wrap')</span>
    </div>
  </div>

  {% include utilities/utility-mixin-using.html %}
</section>

<section id="advanced-settings" class="padding-top-4">
<h2 class="site-h2 margin-y-0">Advanced settings</h2>

  {% include utilities/responsive-variants.html %}

  {% include utilities/state-variants.html %}

  {% include utilities/output-control.html %}

  <section class="utilities-section margin-top-6">
    {% include utilities/values-intro.html %}
    {% include utilities/color-palettes.html %}
  </section>
</section>
