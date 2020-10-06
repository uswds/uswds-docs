---
title: Character count
parent: Form controls
order: 01
lead: Character count helps users know how much text they can enter when there is a limit on the number of characters.


---

{% include code/preview.html component="character-count" %}
{% include code/accordion.html component="character-count" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="character-count-docs">
    Guidance
  </button>
  <div id="character-count-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the character count component</h4>
    <ul class="usa-content-list">
      <li><strong>Brevity is desired.</strong> When users are likely to provide more detail than is needed, and you want to force them to user fewer words. Note: this will likely increase the amount of time it takes users to submit the form because editing requires thinking. In the words of Mark Twain, “I didn't have time to write a short letter, so I wrote a long one instead.”</li>
      <li><strong>Legal requirement.</strong> When there is a legal reason where an entry must be under a certain number of characters.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Backend limitations.</strong> If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a character count.</li>
      <li><strong>Already implied.</strong> If the character length is apparent or implied by the data type (i.e. phone number or zip code). </li>
      <li><strong>Exceeding the character limit is highly unlikely.</strong> If the vast majority of users (well over 99%) are very unlikely to run afoul of backend validation, such as an address field that has a database field limit of 250 characters.</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Associate the character count message to the input.</strong> Use <code>aria-describedby</code> on the input to allow the message to be announced to those using screen readers.
      </li>
      <li>
        <strong>Use the <code>aria-live</code> attribute on character count message.</strong> Use <code>aria-live=<wbr>"polite"</code> so that updates to character count message are also announced when using a screen reader.
      </li>
    </ul>
    <h4>Implementation</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Add component classes.</strong> The structure should include a base element with the class <code>usa-character-count</code>. Inside of that base element there should be an input element (input or textarea) with the class <code>usa-character-count__field</code> and an message element (span or div) with the class <code>usa-character-count__message</code>
      </li>
      <li>
        <strong>Add a <code>maxlength</code> attribute to the input element.</strong> This will be used as the limit referenced in the message and for validation.
      </li>
      <li>
        <strong>Account for no-JavaScript environments.</strong> Add a default message in the message element that refers to the character limit. This will appear in instances when JavaScript does not load.
      </li>
    </ul>
    <h5 id="character-count-settings">Character count settings</h5>
    <p>This component has no settings.</p>
    <h5 id="character-count-variants">Character count variants</h5>
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
