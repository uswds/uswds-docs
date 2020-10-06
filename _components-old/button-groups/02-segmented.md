---
title: Segmented
parent: Button groups
order: 02
lead: Segmented button groups display a set of discrete buttons in a row as a single element.
---

{% include code/preview.html component="button-groups-segmented" %}

<section class="site-component-section">
    {% include code/accordion.html component="button-groups-segmented" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="segmented-button-groups-docs">
      Guidance
    </button>
    <div id="segmented-button-groups-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the segmented button groups</h4>
      <ul class="usa-content-list">
        <li><strong>Categorically related controls.</strong> For example, segmented buttons can be used as a switch between different views.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>No clear relationship.</strong> Consider how placement and alternative structure of unrelated controls can improve usability over placing all actions in a group.</li>
        <li><strong>If there are more than three buttons.</strong> Be mindful of how a long list of buttons might appear on small screens. An alternative type of control might be more suitable.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Avoid ambiguity of current state.</strong> Make sure current states are clearly communicated and understood.</li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Use <code>aria-label</code> to give the buttons a useful name.</strong> Some contexts may require additional context provided to screen readers.</li>
        <li><strong>Use the <code>&lt;button&gt;</code> element.</strong> Don't use <code>&lt;a&gt;</code> because it's a link. Don't use <code>&lt;span&gt;</code> because screen readers won't know it's a usable button.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <ul class="usa-content-list">
        <li>Don't mix differently-sized buttons (like a default button and a big button) in the same group.</li>
        <li>Use short, descriptive button labels to describe controls.</li>
        <li>Use default buttons as a current state and outline buttons as a non-current state. The segmented button group works with all button variants. However, you may need to create custom styles to distinguish state for some button variants.</li>
      </ul>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-button-group</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>