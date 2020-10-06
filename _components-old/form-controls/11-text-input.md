---
title: Text input
parent: Form controls
order: 11
lead: A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.
---

{% include code/preview.html component="text-input" %}
{% include code/accordion.html component="text-input" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="text-input-docs">
    Guidance
  </button>
  <div id="text-input-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the text input component</h4>
    <ul class="usa-content-list">
      <li><strong>Unpredictable or freeform responses.</strong> If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.</li>
      <li><strong>Input simplicity.</strong> When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a calendar picker.</li>
      <li><strong>Pasted content.</strong> When users want to be able to paste in a response.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Predetermined input options.</strong> When users are choosing from a specific set of options.</li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li><strong>Use fields appropriate to the length of the input.</strong> The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a text area instead.</li>
      <li><strong>Consider the mobile context.</strong> Text inputs are among the easiest type of input for desktop users but are more difficult for mobile users.</li>
      <li><strong>Wait to validate.</strong> Only show error validation messages or stylings after a user has interacted with a particular field.</li>
      <li><strong>Avoid placeholder text.</strong> Avoid using placeholder text that appears within a text field before a user starts typing. If placeholder text is no longer visible after a user clicks into the field, users will no longer have that text available when they need to review their entries. (People who have cognitive or visual disabilities have additional problems with placeholder text.)</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li><strong>Customize accessibly.</strong> If you customize the text inputs, ensure they continue to meet the the <a href="{{ site.baseurl }}/form-controls/"> accessibility requirements that apply to all form controls.</a></li>
      <li><strong>Avoid placeholder text.</strong> Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio.</li>
      <li><strong>Avoid splitting numbers.</strong> Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.</li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
    <h5 id="component-settings-text-input">Text input settings</h5>
    {% assign settings = site.data.settings.components.input %}
    {% include settings-table-simple.html
      settings=settings.contents
    %}
    <h5 id="component-variants-text-input">Text input variants</h5>
    <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants-text-input">
      <thead>
        <tr>
          <th scope="col" class="flex-6">Variant</th>
          <th scope="col" class="flex-6">Description</th>
        </tr>
      </thead>
      <tbody class="font-mono-2xs">
        <tr>
          <td class="flex-6" data-title="Variant">usa-input--error</td>
          <td class="flex-6" data-title="Description">
            <span class="font-lang-3xs">The error state of the text input.</span>
          </td>
        </tr>
        <tr>
          <td class="flex-6" data-title="Variant">usa-input--success</td>
          <td class="flex-6" data-title="Description">
            <span class="font-lang-3xs">The success state of the text input.</span>
          </td>
        </tr>
        <tr>
          <td class="flex-6" data-title="Variant">usa-input--small</td>
          <td class="flex-6" data-title="Description">
            <span class="font-lang-3xs">A smaller input with a max width of <code>8 units</code>.</span>
          </td>
        </tr>
        <tr>
          <td class="flex-6" data-title="Variant">usa-input--medium</td>
          <td class="flex-6" data-title="Description">
            <span class="font-lang-3xs">A smaller input with a max width of <code>15 units</code>.</span>
          </td>
        </tr>
      </tbody>
    </table>
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
