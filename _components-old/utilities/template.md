---
permalink: /utilities/template/
layout: styleguide
type: utility
title: Template
category: Utilities
lead: Utility dek
---

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">property</span>
  </div>
</div>

<section class="utilities-section">
  {% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="utility-display">
    <section class="utility-title-bar">
      <div class="grid-row">
        <div class="grid-col-fill">
          <h3 class="grid-col-auto utility-title">Utility</h3>
          <p class="utility-property">CSS property: <span class="utility-property-code">property</span></p>
        </div>

        <ul class="grid-col-auto utility-scope">
          <li class="utility-scope-button-disabled">responsive</li>
          <li class="utility-scope-button-disabled">active</li>
          <li class="utility-scope-button-disabled">hover</li>
          <li class="utility-scope-button-disabled">focus</li>
          <li class="utility-scope-button-disabled">visited</li>
        </ul>
      </div>
    </section>
    <section class="utility-examples">

      <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4 margin-bottom-1">
        <button class="usa-accordion__button" aria-controls="code-flex" aria-expanded="true">Code</button>
        <div id="code-flex" class="usa-accordion__content">
<div markdown="1" class="font-mono-xs">
{% highlight html linenos %}
<div class="display-block border-1px ...">.display-block</div>
<div class="display-flex border-1px ...">.display-flex</div>
<div class="display-inline border-1px ...">.display-inline</div>
<div class="display-inline-block border-1px ...">.display-inline-block</div>
<div class="display-inline-flex border-1px ...">.display-inline-flex</div>
<div class="display-none border-1px ...">.display-inline</div>
<div class="display-table">
<div class="display-table-row">
<div class="display-table-cell border-1px ...">.display-table-cell</div>
<div class="display-table-cell border-1px ...">.display-table-cell</div>
</div>
{% endhighlight %}
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->
</section><!-- utilities -->

{% include utilities/responsive-variants.html %}

{% include utilities/state-variants.html %}

<section class="utilities-section">
  <h2 class="utilities-section-title">Default output</h2>
  <div class="grid-row font-sans-1 text-bold border-bottom padding-bottom-05 margin-top-2 border-base-light">
    <div class="grid-col-4">Utility</div>
    <div class="grid-col-6">Output SCSS</div>
    <div class="grid-col-2">Default variable value</div>
  </div>
  <dl class="output-list">
  </dl>
</section>

{% include utilities/output-control.html %}

<section class="utilities-section margin-top-6">
  {% include utilities/values-intro.html %}
</section>
