---
type: component
title: Prose
parent: typography
order: 01
lead: "Format a block of running text."
---

<!-- prose section begin -->

{% include code/preview.html component="typesetting" %}
{% include code/accordion.html component="typesetting" %}
<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="typesetting-docs">
    Guidance
  </button>
  <div id="typesetting-docs" class="usa-accordion__content site-component-usage">
    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li><code>usa-prose</code> is meant for blocks of text where it’s more difficult to add custom classes to individual elements, like a blog post where the content is coming out of markdown or a CMS.</li>
      <li>Adding <code>usa-prose</code> to any container adds USWDS default heading and body text styling to the following <strong>direct-child elements</strong>:
        <ul>
          <li><code>h1</code>-<code>h6</code></li>
          <li><code>p</code></li>
          <li><code>ul</code> and <code>ol</code>, <em>plus</em> child <code>li</code></li>
          <li><code>table</code>, <em>plus</em> child <code>thead</code>, <code>th</code>, <code>td</code>, and <code>caption</code></li>
        </ul>
      </li>
      <li>You can change the measure of elements styled with <code>usa-prose</code> in <code>_uswds-theme-typography.scss</code> with the following variables. Each accepts a <a class="token" href="{{ site.baseurl }}/design-tokens/typesetting/measure/">measure</a> token:
        <ul>
          <li><code>$theme-text-measure</code></li>
          <li><code>$theme-lead-measure</code></li>
        </ul>
      </li>
    </ul>
    <h4 class="usa-heading">Package information</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Package usage:</strong> <code>@import typography</code>
      </li>
      <li>
        <strong>Requires:</strong> <code>required</code>, <code>global</code>
      </li>
    </ul>
  </div>
</div>
