---
type: component
title: Links
parent: typography
order: 02
lead: "Links connect users to a different page or further information."
---

<!-- Links section begin -->

{% include code/preview.html component="links" %}
{% include code/accordion.html component="links" %}
<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="link-docs">
    Guidance
  </button>
  <div id="link-docs" class="usa-accordion__content site-component-usage">
    <h4>Accessibility</h4>
    <ul class="usa-content-list">
      <li>Users should be able to tab to navigate between links.</li>
      <li>Users should be able to activate a link when pressing ‘Enter’ on their keyboard.</li>
      <li>Users should be able to identify links without relying on color alone.</li>
      <li>Users should be able to activate hover and focus states with both a mouse and a keyboard.</li>
    </ul>
    <h4 class="usa-heading">Package information</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Package usage:</strong> <code>@import global</code>
      </li>
      <li>
        <strong>Requires:</strong> <code>required</code>
      </li>
    </ul>
  </div>
</div>
