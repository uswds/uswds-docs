---
permalink: /utilities/shadow/
layout: styleguide
type: utility
title: Shadow
category: Utilities
lead: Set size of an item’s drop shadow
subnav:
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         shadow
  var:          box-shadow
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        true
  visited:      false
---

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">box-shadow</span>
  </div>
</div>

<section class="utilities-section">
  {% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="box-shadow">
    {% include utilities/utility-title-bar.html
      title="Shadow"
      property="box-shadow"
      var="box-shadow"
    %}
    <section class="utility-examples">
      {% for item in site.data.tokens.shadow %}
        {% assign thisWrap =              false %}
        {% assign thisContainerClasses =  'overflow-visible' %}
        {% assign thisUtilityClasses =    nil %}
        {% assign thisValueClasses =      'display-none tablet:display-block' %}
        {% assign thisExampleClasses =    'padding-y-2' %}
        {% capture thisClass %}
          .shadow-{{ item.token }}
        {% endcapture %}
        {% capture thisValue %}
          {{ item.value }}
        {% endcapture %}
        {% capture thisExample %}
          <div class="square-9 bg-white shadow-{{ item.token }}"></div>
        {% endcapture %}
        {% include utilities/utility-example.html
          wrap = thisWrap
          containerClasses = thisContainerClasses
          utility = thisClass
          utilityClasses = thisUtilityClasses
          value = thisValue
          valueClasses = thisValueClasses
          example = thisExample
          exampleClasses = thisExampleClasses
        %}
      {% endfor %}
    </section><!-- utility-examples -->
  </section><!-- utility -->
</section><!-- utilities-section -->

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
            .shadow-<a href="{{ site.baseurl }}/design-tokens/shadow/" class="token">shadow</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-shadow(<a href="{{ site.baseurl }}/design-tokens/shadow/" class="token">shadow</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-shadow(2)
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
