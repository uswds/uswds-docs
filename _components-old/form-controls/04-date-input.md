---
title: Date input
parent: Form controls
maturity: alpha
order: 04
lead: Three text fields are the easiest way for users to enter most dates.
---

{% include code/preview.html component="date-input" %}
{% include code/accordion.html component="date-input" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="date-input-docs">
    Guidance
  </button>
  <div id="date-input-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the date input component</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Appropriate for most dates.</strong> Use this format for most
        dates, particularly memorized dates.
      </li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Consider a calendar picker for scheduling.</strong> If users are
        trying to schedule something, a calendar picker might make more sense.
        Be sure to also provide an option for text entry as well.
      </li>
    </ul>
    <h4>Usability guidelines</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Label each field.</strong> Be sure each field is properly labeled
        — some countries enter dates in day, month, year order.
      </li>
      <li>
        <strong>Avoid dropdowns.</strong> It may be tempting to switch all or
        some of these text fields to dropdowns, but these tend to be more
        difficult to use than text boxes.
      </li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Follow input guidance.</strong> These text fields should follow
        the <a href="{{ site.baseurl }}/form-controls/#text-inputs">
          accessibility guidelines for all text inputs.
        </a>
      </li>
      <li>
        <strong>Don’t auto-advance focus.</strong> Do not use JavaScript to auto
        advance the focus from one field to the next. This makes it difficult
        for keyboard-only users to navigate and correct mistakes.
      </li>
      <li>
        <strong>Use "text" instead of "number" inputs.</strong> Research indicates
         that <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">
          numeric inputs still carry many usability problems
        </a>.
      </li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>
        The year input is set to accept only a four-digit number while the month
        and day inputs can accept up to a two-digit number.
      </li>
      <li>
        Always use back-end validation on dates for correctness.
      </li>
    </ul>
    <h5 id="date-input-settings">Date input settings</h5>
    <p>This component has no settings.</p>
    <h5 id="date-input-variants">Date input variants</h5>
    <p>This component has no variants.</p>
    <h4 class="usa-heading">Package information</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Package usage:</strong> <code>@import form-controls</code>
      </li>
      <li>
        <strong>Requires:</strong> <code>required</code>, <code>global</code>
      </li>
    </ul>
  </div>
</div>
