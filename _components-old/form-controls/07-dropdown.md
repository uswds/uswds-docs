---
title: Dropdown
parent: Form controls
order: 07
lead: A dropdown allow users to select one option from a temporary modal menu.
---


{% include code/preview.html component="dropdown" classes="preview-dropdown" %}
{% include code/accordion.html component="dropdown" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="dropdown-docs">
    Guidance
  </button>
  <div id="dropdown-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the dropdown component</h4>
    <ul class="usa-content-list">
      <li><strong>Use sparingly.</strong> Use the dropdown component only when a user needs to choose from about seven to 15 possible options and you have limited space to display the options.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Fewer than seven options.</strong> Use radio buttons instead.</li>
      <li><strong>More than 15 options.</strong> If the list of options is very long. Let users type the same information into a text input that suggests possible options instead.</li>
      <li><strong>Multi-select.</strong> If you need to allow users to select more than one option at once. Users often don’t understand how to select multiple items from dropdowns. Use checkboxes instead.</li>
      <li><strong>Site navigation.</strong> Use the navigation components instead.</li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li><strong>Make sure to test.</strong> Test dropdowns thoroughly with members of your target audience. Several usability experts suggest they should be the “UI of last resort.” Many users find them confusing and difficult to use.</li>
      <li><strong>Avoid dependent options.</strong> Avoid making options in one dropdown menu change based on the input to another. Users often don’t understand how selecting an item in one impacts another.</li>
      <li><strong>Use a good default.</strong> When most users will (or should) pick a particular option, make it the default: <code>&lt;option selected=<wbr>"selected"&gt;Default<wbr>&lt;/option&gt;</code></li>
      <li><strong>Avoid auto-submission.</strong> Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Offer a “submit” button at the end of the form instead. Users often change their choices multiple times. Auto-submission is also less accessible.</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li><strong>Customize accessibly.</strong> If you customize the dropdown, ensure it continues to meet the the <a href="{{ site.baseurl }}/form-controls/"> accessibility requirements that apply to all form controls.</a></li>
      <li><strong>Always use a label.</strong> Make sure your dropdown has a label. Don’t replace it with the default menu option (for example, removing the “State” label and just having the dropdown read “Select a state” by default).</li>
      <li><strong>Avoid auto-submission.</strong> Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.</li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
    <h5 id="dropdown-settings">Dropdown settings</h5>
    <p>This component has no settings.</p>
    <h5 id="dropdown-variants">Dropdown variants</h5>
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
