---
title: Validation
parent: Form controls
maturity: alpha
order: 13
lead: Stating validation requirements up front, with live feedback, means users won't be left guessing.
---

{% include code/preview.html component="validation" %}
{% include code/accordion.html component="validation" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="validation-docs">
    Guidance
  </button>
  <div id="validation-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>
        The validation component is intended primarily for usability, not as a
      robust security solution, since all the validation logic occurs on the
      client-side. The validation should be "mirrored" on the server-side for
      security purposes.
      </li>
      <li>
        Input fields which have custom validation logic can automatically
        provide helpful feedback to users if they are assigned a
        <code>data-validation-element</code> attribute set to a
        CSS selector that uniquely identifies a <code>.usa-checklist</code>,
        e.g. <code>data-validation-element="#validate-code"</code>.
      </li>
      <li>
        For each kind of validation you'd like to provide feedback on:
        <ol>
          <li>
            Come up with a name for the validator, e.g.
            <code>uppercase</code>. It shouldn't have any spaces in it.
          </li>
          <li>
            On one of the list elements in the <code>.usa-checklist</code>,
            set the <code>data-validator</code> attribute to the
            name of the validator, e.g. <code>data-validator="uppercase"</code>.
            This is the list item that will appear "checked" when the
            validator's condition is met.
          </li>
          <li>
            On the input field, add a field called
            <code>data-validate-<em>validator name</em></code> and set
            its value to a <a href="https://regexone.com/">regular
            expression</a> that represents whether the validator's
            condition is met, e.g. <code>data-validate-uppercase="[A-Z]"</code>.
          </li>
        </ol>
      </li>
    </ul>
    <h5 id="validation-settings">Validation settings</h5>
    <p>This component has no settings.</p>
    <h5 id="validation-variants">Validation variants</h5>
    <p>This component has no variants.</p>
    <h4 class="usa-heading">Package information</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Package usage:</strong> <code>@import validation</code>
      </li>
      <li>
        <strong>Requires:</strong> <code>required</code>, <code>global</code>
      </li>
    </ul>
  </div>
</div>
