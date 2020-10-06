---
title: Radio buttons
parent: Form controls
order: 09
lead: Radio buttons allow users to see all available choices and select exactly one.
---

{% include code/preview.html component="radio-buttons" %}
{% include code/accordion.html component="radio-buttons" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="radio-docs">
    Guidance
  </button>
  <div id="radio-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the radio button component</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Single selection.</strong> When users need to select only one
        option out of a set of mutually exclusive choices.
      </li>
      <li>
        <strong>Limited choices.</strong> When the number of available options
        can fit onto a mobile screen.
      </li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Multiple selections.</strong> Consider checkboxes if users need
        to select more than one option or if there is only one item to select.
      </li>
      <li>
        <strong>Limited space.</strong> Consider a dropdown if you don’t have
        enough space to list out all available options.
      </li>
      <li>
        <strong>Selecting none.</strong> If users should be able to select zero
         of the options.
      </li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Use the label as a target.</strong> Users should be able to tap
         on or click on either the text “label” or the radio button to select
         or deselect an option.
      </li>
      <li>
        <strong>List items vertically.</strong> Options that are listed vertically
         are easier to read than those that are listed horizontally.
         Horizontal listings can make it difficult to tell which label pertains
         to which radio button.
      </li>
      <li>
        <strong>Use adequate spacing.</strong> If you customize, make sure
         selections are adequately spaced for touch screens.
      </li>
      <li>
        <strong>Set default values with caution.</strong> Setting a default
         value can discourage users from making conscious decisions, seem pushy,
         or alienate users who don’t fit into your assumptions.
         If you are unsure, leave nothing selected by default.
      </li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Customize accessibly.</strong> If you customize the radio
        buttons, ensure they continue to meet the the <a href="{{ site.baseurl }}/form-controls/"> accessibility requirements that apply to all form controls.</a>
      </li>
      <li>
        <strong>Use fieldset and legend.</strong> Group related radio buttons
        together with <code>&lt;fieldset></code> and describe the group
        with <code>&lt;legend&gt;</code>.
      </li>
      <li>
        <strong>Use proper labels and attributes.</strong> Each radio button
        should have a <code>&lt;label&gt;</code>. Associate the two by matching
        the <code>&lt;label&gt;</code>’s <code>for</code> attribute to the
        <code>&lt;input&gt;</code>’s <code>id</code> attribute.
      </li>
      <li>
        The <code>title</code> attribute can replace <code>&lt;label&gt;</code>.
      </li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
    <h5 id="radio-buttons-settings">Radio buttons settings</h5>
    <p>This component has no settings.</p>
    <h5 id="radio-buttons-variants">Radio buttons variants</h5>
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
