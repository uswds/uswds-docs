---
title: Date range picker
parent: Form controls
order: 06
lead: A date range picker helps users select a range between two dates.
---

{% include code/preview.html component="date-range-picker" %}
{% include code/accordion.html component="date-range-picker" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="date-range-picker-docs">
    Guidance
  </button>
  <div id="date-range-picker-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the date range picker component</h4>
    <ul class="usa-content-list">
      <li><strong>Scheduling.</strong> When users need to schedule or record an event and benefit from the context of a calendar.</li>
      <li><strong>When the day of the week is important.</strong> When knowing the day of the week helps users choose a specific date.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>When the day of the week is irrelevant.</strong> If there's no benefit to knowing the day of the week for a date or range, consider <a href="{{ site.baseurl }}/form-controls/#date-input">date input fields</a>.</li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li><strong>Describe the date format.</strong> Provide a hint of <code>mm/dd/yyyy</code> to help users enter the proper date format if they opt not to use the date picker.</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li><strong>Customize accessibly.</strong> If you customize the date picker, ensure it continues to meet the the <a href="{{ site.baseurl }}/form-controls/"> accessibility requirements that apply to all form controls.</a></li>
      <li><strong>Avoid auto-submission.</strong> Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.</li>
    </ul>
      <h4 class="usa-heading">Implementation</h4>
<div class="usa-prose site-prose" markdown="1">

{:.usa-content-list}

- **Initialization properties.** The following properties update the component during initialization. These properties must be set before the component is initialized in order to have an effect.

| property | element | effect |
| --- | --- | ---
data-min-date | .usa-date-picker | The date picker will not allow a date selection before this date. The date should be in the format YYYY-MM-DD. Typing in an earlier date will cause native form validation error. A default min date or 0000-01-01 is used as a default.
data-max-date | .usa-date-picker | The date picker will not allow a date selection after this date. The date should be in the format YYYY-MM-DD. Typing in an later date will cause native form validation error. There is no default maximum date.

</div>
    <h5 id="date-range-picker-settings">Date range picker settings</h5>
    <p>This component has no settings.</p>
    <h5 id="date-range-picker-variants">Date range picker variants</h5>
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
