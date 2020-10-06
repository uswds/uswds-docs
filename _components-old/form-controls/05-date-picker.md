---
title: Date picker
parent: Form controls
order: 05
lead: A date picker helps users select a single date.
---

{% include code/preview.html component="date-picker" %}
{% include code/accordion.html component="date-picker" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="date-picker-docs">
    Guidance
  </button>
  <div id="date-picker-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the date picker component</h4>
    <ul class="usa-content-list">
      <li><strong>Scheduling.</strong> When users need to schedule or record an event and benefit from the context of a calendar.</li>
      <li><strong>When the day of the week is important.</strong> When knowing the day of the week helps users choose a specific date.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Familiar dates.</strong> When asking users for a date they know well, or can look up without using a calendar (like a birthday), use <a href="{{ site.baseurl }}/form-controls/#date-input">date input fields</a>.</li>
      <li><strong>When the day of the week is irrelevant.</strong> If there's no benefit to knowing the day of the week for a particular date, consider <a href="{{ site.baseurl }}/form-controls/#date-input">date input fields</a>.</li>
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
required | input | The date picker component will be required in terms of native form validation.
disabled | input | The date picker component will be disabled/readonly. You can re-enable by executing the `enable` procedure on the component.
data-default-value | .usa-date-picker | The date picker input will set this value if it is a valid date. The date should be in the format YYYY-MM-DD.

{:.usa-content-list}

- **Component properties.** The following properties modify component functionality. These properties can be set or adjusted at any time before or after initialization in order to have an effect.

| property | element | effect |
| --- | --- | ---
data-min-date | .usa-date-picker | The date picker will not allow a date selection before this date. The date should be in the format YYYY-MM-DD. Typing in an earlier date will cause native form validation error. A default min date or 0000-01-01 is used as a default.
data-max-date | .usa-date-picker | The date picker will not allow a date selection after this date. The date should be in the format YYYY-MM-DD. Typing in an later date will cause native form validation error. There is no default maximum date.
data-range-date | .usa-date-picker | The date picker will show a range selection from the range date. The date should be in the format YYYY-MM-DD.

{:.usa-content-list}

- **Additional component procedures.** The following static procedures update the component after initialization. These are in addition to the primary methods referenced in the <a href="{{ site.baseurl }}/documentation/developers/#js-customization">JS customization</a> documentation.

| procedure | parameters | effect |
| --- | --- | ---
enable | .usa-date-picker element | The date picker component will be enabled.
disable | .usa-date-picker element | The date picker component will be disabled/readonly.

</div>
    <h5 id="date-picker-settings">Date picker settings</h5>
    <p>This component has no settings.</p>
    <h5 id="date-picker-variants">Date picker variants</h5>
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
