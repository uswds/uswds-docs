---
type: component
title: Lists
parent: typography
order: 03
lead: "Lists organize information into discrete sequential sections."
---

<!-- Lists section begin -->

{% include code/preview.html component="lists" classes="preview-lists" %}
{% include code/accordion.html component="lists" %}
<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="list-docs">
    Guidance
  </button>
  <div id="list-docs" class="usa-accordion__content site-component-usage">
    <h4>When to use the list component</h4>
    <ul class="usa-content-list">
      <li><strong>Ordered list:</strong> Use an ordered list when you need to display text in some ranking, hierarchy, or series of steps.</li>
      <li><strong>Unordered list:</strong> Use unordered lists to display text in no specific order.</li>
    </ul>
    <h4>When to consider something different</h4>
    <ul class="usa-content-list">
      <li>If you need to communicate long lists of narrative text.</li>
    </ul>
    <h4>Usability guidelines</h4>
    <ul class="usa-content-list">
      <li><strong>Use sentence case and begin lists with a capital letter.</strong></li>
      <li><strong>Use punctuation appropriate to the text.</strong> Do not leave sentences without periods.</li>
    </ul>
    <h4>Implementation</h4>
    <ul class="usa-content-list">
      <li>For unstyled lists, use either the <code>.usa-list.usa-list--unstyled</code> classes or the unstyled list mixin: <code>@include unstyled-list;</code>.</li>
    </ul>
    <h4 class="usa-heading">Package information</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Package usage:</strong> <code>@import typography</code>
      </li>
      <li>
        <strong>Requires:</strong> <code>required</code>, <code>global</code>
      </li>
    </ul>
  </div>
</div>
