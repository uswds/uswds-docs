---
permalink: /utilities/float/
layout: styleguide
type: utility
title: Float
category: Utilities
lead: Float an item within a layout flow.

subnav:
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         float
  var:          float
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">float</span>
  </div>
</div>

<section class="utilities-section">

{% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="utility-float">
    {% include utilities/utility-title-bar.html
      title="Float"
    %}

    <section class="utility-examples">
      <div class="clearfix">
        <p class="float-none bg-base-lighter padding-2"><span class="utility-class">.float-none</span></p>
      </div>
      <div class="clearfix">
        <p class="float-left bg-base-lighter padding-2"><span class="utility-class">.float-left</span></p>
      </div>
      <div class="clearfix">
        <p class="float-right bg-base-lighter padding-2"><span class="utility-class">.float-right</span></p>
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
            .float-<code>value</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-float(<code>value</code>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-float('left')
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
    {% include utilities/values-no-palettes.html %}
  </section>
</section>
