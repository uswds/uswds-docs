---
type: component
title: Address form
parent: Form templates
order: 02
lead: Enter a standard U.S. mailing or shipping address
---

{% include code/preview.html component="address-form" %}
{% include code/accordion.html component="address-form" %}
<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="address-form-docs">
    Guidance
  </button>
  <div id="address-form-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use an address form</h4>
    <ul class="usa-content-list">
      <li><strong>You need separate data elements.</strong> When you need to be able to parse out the specific parts of a mailing address.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Nonstandard addresses.</strong> If you need to collect addresses that may not fit this format (for example, international addresses).</li>
      <li><strong>You don’t need separate data elements.</strong> If you don’t need to be able to parse out the individual pieces of an address, consider letting users type the entire address into one large text area. </li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li><strong>Don’t call out required fields.</strong> Call out optional fields instead. Users can infer that non-optional fields are required.</li>
      <li><strong>Avoid dropdowns.</strong> If possible, let users type their state’s abbreviation when they reach the state drop-down menu.</li>
      <li><strong>Support both five- and nine-digit ZIP codes.</strong> Some addresses require a nine-digit ZIP code. If you would like to use an input mask, it should be “#####-####” so that the text is properly formatted, regardless of whether a user enters a five- or nine-digit ZIP code.</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>As you customize this form template, make sure it continues to follow the <a href="{{ site.baseurl }}/form-templates/">accessibility guidelines for form templates</a> and the <a href="{{ site.baseurl }}/form-controls/">accessibility guidelines for form controls</a>.</li>
    </ul>
    <h4 class="usa-heading">Package information</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Package usage:</strong> <code>@import form-templates</code>
      </li>
      <li>
        <strong>Requires:</strong> <code>required</code>, <code>global</code>
      </li>
    </ul>  </div>
</div>
