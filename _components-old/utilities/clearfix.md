---
permalink: /utilities/clearfix/
layout: styleguide
type: utility
title: Clearfix
category: Utilities
lead: Clear any floated elements

subnav:
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

utilities:
- base:         clearfix
  var:          clearfix
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
---

<section class="utilities-section">
  {% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="utility-clearfix">
    {% include utilities/utility-title-bar.html
      title="Clearfix"
      property=false
    %}

    <section class="utility-examples">
      <div class="clearfix border-1px">
        <span class="float-left bg-secondary-light padding-2">.float-left</span>
        <span class="float-right bg-secondary-light padding-2">.float-right</span>
      </div>
      <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
        <button class="usa-accordion__button" aria-controls="code-clearfix" aria-expanded="true">Code</button>
        <div id="code-clearfix" class="usa-accordion__content margin-bottom-1">
<div markdown="1">
{% highlight html linenos %}
<div class="clearfix">
  <span class="float-left">.float-left</span>
  <span class="float-right">.float-right</span>
</div>
{% endhighlight %}
</div>
        </div>
      </div>
    </section><!-- .utility-examples -->
  </section><!-- .utility#clearfix -->
</section><!-- .utilities -->

<section class="utilities-section margin-top-6">
  <h2 class="utilities-section-title">Default output</h2>
  <table class="usa-table--borderless site-table-responsive site-table-simple">
    <thead>
      <tr>
        <th scope="col" class="tablet:maxw-card-lg">Utility</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .clearfix
          </span>
        </td>
        <td data-title="Output">
          <span>
            ::after { clear: both; content: ""; display: block; }
          </span>
        </td>
      </tr>
    </tbody>
  </table>
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
            .cleafix
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            clearfix
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include clearfix
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
