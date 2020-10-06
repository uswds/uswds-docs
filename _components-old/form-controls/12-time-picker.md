---
title: Time picker
parent: Form controls
order: 12
lead: A time picker helps users select a specific time.
initProps:
  - property: "`data-min-time`"
    element: .usa-time-picker
    description: The start time used in the time picker in `hh:mm` 24-hour format. The default is `00:00`.
  - property: "`data-max-time`"
    element: .usa-time-picker
    description: The end time used for the time picker in `hh:mm` 24-hour format. The default is `23:59`.
  - property: "`data-step`"
    element: .usa-time-picker
    description: The number of minutes between options. The minimum is `1` minute and the default is `30` minutes.
---

{% include code/preview.html component="time-picker" %}
{% include code/accordion.html component="time-picker" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="time-picker-docs">
    Guidance
  </button>
  <div id="time-picker-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the time picker component</h4>
    <ul class="usa-content-list">
      <li><strong>Scheduling.</strong> Use the time picker to schedule a time from common, consistent increments, such as planning a meeting time in 30-minute blocks.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Exact time.</strong> Plain text input is more appropriate for historical exact times, like time of birth.</li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li><strong>See combo box usability guidance.</strong> The time picker is a specialized combo box, see the <a href="{{ site.baseurl }}/components/form-controls/#combo-box">combo box</a> documentation for complete usability guidance.</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li><strong>See combo box accessibility guidance.</strong> The time picker is a specialized combo box, see the <a href="{{ site.baseurl }}/components/form-controls/#combo-box">combo box</a> documentation for complete accessibility guidance.</li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
<div class="usa-prose site-prose">
  <p>The properties and procedures listed below that show <code>.usa-time-picker</code> as the element are specific to the time picker, but the time picker is a specialized <a href="{{ site.baseurl }}/components/form-controls/#combo-box">combo box</a> instance and supports all combo box properties and procedures on <code>.usa-time-picker</code> just as on <code>.usa-combo-box</code>. </p>
  <ul class="usa-content-list">
    <li>
        <strong>Initialization properties.</strong> The following properties update the component during initialization. These properties must be set before the component is initialized in order to have an effect. Those listed below that show <code>.usa-time-picker</code> as the element are specific to the time picker, but the time picker is a specialized <a href="{{ site.baseurl }}/components/form-controls/#combo-box">combo box</a> instance and supports the combo box initialization properties on <code>.usa-time-picker</code> just as on <code>.usa-combo-box</code>.
        {% assign comboBox = site.components | where: "title", "Combo box" | first %}
        {% assign initPropsCombined = comboBox.initProps | concat: page.initProps %}
        {% include settings-table-flex.html
          content=initPropsCombined
          cols="flex-1, flex-1, flex-2"
          section="initialization properties"
        %}
    </li>
    <li class="border-0">
        <strong>Component properties.</strong> The following properties modify component functionality. These properties can be set or adjusted at any time before or after initialization in order to have an effect.
        {% assign propsCombined = comboBox.props %}
        {% include settings-table-flex.html
          content=propsCombined
          cols="flex-1, flex-1, flex-2"
          section="component properties"
        %}
    </li>
    <li class="border-0">
        <strong>Additional component procedures.</strong> The following static procedures update the component after initialization. These are in addition to the primary methods referenced in the <a href="{{ site.baseurl }}/documentation/developers/#js-customization">JS customization</a> documentation.
        {% assign proceduresCombined = comboBox.procedures %}
        {% include settings-table-flex.html
          content=proceduresCombined
          cols="flex-1, flex-1, flex-2"
          section="additional component procedures"
        %}
    </li>
  </ul>
</div>
    <h5 id="time-picker-settings">Time picker settings</h5>
    {% include settings-table-flex.html
      content=site.data.settings.components.combo-box
      cols="flex-1, flex-1"
      section="settings"
    %}
    <h5 id="time-picker-variants">Time picker variants</h5>
    {% include settings-table-flex.html
      content=page.variants
      cols="flex-1, flex-1"
      section="variants"
    %}
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
