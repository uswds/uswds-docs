---
title: Name form
parent: Form templates
order: 01
lead: Collect a full name as separate elements of data
---

{% include code/preview.html component="name-form" %}
{% include code/accordion.html component="name-form" %}
<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="name-form-docs">
    Guidance
  </button>
  <div id="name-form-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use a name form</h4>
    <ul class="usa-content-list">
      <li><strong>You need separate data elements.</strong> When you need to collect users’ full names and store the parts separately in a database.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>You don’t need separate data elements.</strong> If you don’t need to parse out the separate pieces of a person’s name, consider letting them enter it into a single text field.</li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li><strong>Avoid dropdowns.</strong> Leave the title and suffix fields as text boxes instead of offering dropdowns. There are many possible titles and suffixes; text boxes accommodate them all.</li>
      <li><strong>Don’t restrict characters.</strong> Do not restrict the types of characters users can enter in any of these fields. Names can include characters outside the standard Roman alphabet.</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li><strong>Customize accessibly.</strong> As you customize this form template, ensure it continues to follow the <a href="{{ site.baseurl }}/form-templates/">accessibility guidelines for form templates</a> and the <a href="{{ site.baseurl }}/form-controls/">accessibility guidelines for form controls</a>.</li>
    </ul>
    <h4 class="usa-heading">Package information</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Package usage:</strong> <code>@import form-templates</code>
      </li>
      <li>
        <strong>Requires:</strong> <code>required</code>, <code>global</code>
      </li>
    </ul>
  </div>
</div>
