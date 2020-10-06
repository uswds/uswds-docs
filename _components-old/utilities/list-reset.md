---
permalink: /utilities/list-reset/
layout: styleguide
type: utility
title: List reset
category: Utilities
lead: Reset default list styling

subnav:
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         add-list-reset
  var:          add-list-reset
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

<div class="font-sans-4 weight-300">

  <section class="utilities-section">
    {% include utilities/utilities-section-title-bar.html %}

    <section class="utility">
      {% include utilities/utility-title-bar.html
        title="List reset"
        property=false
        var="add-list-reset"
      %}
      <section class="utility-examples">
        {% assign thisWrap =              false %}
        {% assign thisContainerClasses =  nil %}
        {% assign thisUtilityClasses =    nil %}
        {% assign thisValueClasses =      nil %}
        {% assign thisExampleClasses =    'bg-secondary-light padding-left-0 grid-col-6' %}
        {% capture thisClass %}
          default
        {% endcapture %}
        {% capture thisValue %}
        {% endcapture %}
        {% capture thisExample %}
          <ul class="bg-white">
            <li>Red apples</li>
            <li>Yellow bananas</li>
            <li>Purple eggplants</li>
          </ul>
        {% endcapture %}
        {% include utilities/utility-example.html
          wrap = thisWrap
          containerClasses = thisContainerClasses
          utility = thisClass
          utilityClasses = thisUtilityClasses
          value = nil
          valueClasses = thisValueClasses
          example = thisExample
          exampleClasses = thisExampleClasses
        %}
        {% capture thisClass %}
          .add-list-reset
        {% endcapture %}
        {% capture thisExample %}
          <ul class="add-list-reset bg-white">
            <li>Red apples</li>
            <li>Yellow bananas</li>
            <li>Purple eggplants</li>
          </ul>
        {% endcapture %}
        {% include utilities/utility-example.html
          wrap = thisWrap
          containerClasses = thisContainerClasses
          utility = thisClass
          utilityClasses = thisUtilityClasses
          value = nil
          valueClasses = thisValueClasses
          example = thisExample
          exampleClasses = thisExampleClasses
        %}
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
              .add-list-reset
            </span>
          </td>
          <td data-title="Mixin">
            <span>
              add-list-reset
            </span>
          </td>
          <td data-title="Example">
            <span>
              @include add-list-reset
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

    {% include utilities/values-no-custom-values.html %}
  </section>
