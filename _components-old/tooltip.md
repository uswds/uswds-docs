---
permalink: /components/tooltip/
layout: styleguide
title: Tooltip
type: component
category: Components
lead: A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.
---

{% include code/preview.html component="tooltip" %}

<section class="site-component-section">
  {% include code/accordion.html component="tooltip" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="tooltip-docs">
      Guidance
    </button>
    <div id="tooltip-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the tooltip component</h4>
      <ul class="usa-content-list">
        <li><strong>Helpful, non-critical information.</strong> Use tooltips to strengthen an existing message.</li>
        <li><strong>Enhance confidence.</strong> Use tooltips to increase certainty about an interaction.</li>
        <li><strong>Brief descriptions.</strong> Tooltips perform best with succinct helper text.</li>
        <li><strong>Lack of space.</strong> Tooltips are useful as a last resort for space-constrained UI. Explore other options for keeping content visible without a tooltip.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>Critical information.</strong> Don’t hide information necessary for completing a task behind an tooltip interaction.</li>
        <li><strong>Lengthy descriptions.</strong> Tooltips are microcopy, and should be brief. Don't use a tooltip if you need a lot of text.</li>
        <li><strong>Redundant content.</strong> Don’t use a tooltip when its content is repetitive or if usability is obvious.</li>
        <li><strong>Sufficient space.</strong> If content can fit outside a tooltip, don't use a tooltip.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Use affordances.</strong> A hidden tooltip is unusable. Use tooltips only on elements that appear interactive, like buttons or links.</li>
        <li><strong>Avoid collisions.</strong> Be careful not introduce conflicting hover or focus events.</li>
        <li><strong>Be consistent.</strong> If using tooltips in one context, use in all similar contexts.</li>
        <li><strong>Don’t block content.</strong> Use the <code>data-position</code> attribute to prevent the tooltip from covering other page elements.</li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Use as <code>title</code> attribute.</strong> Tooltips are progressive enhancements for the <code>title</code> attribute, and will display as the <code>title</code> attribute if the component doesn’t initialize.</li>
        <li><strong>Keyboard accessibility</strong> Tooltips make <code>title</code> attributes keyboard accessible.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <ul class="usa-content-list">
        <li>Any element with the class name <code>usa-tooltip</code> and a <code>title</code> attribute will become a tooltip.</li>
        <li>Place tooltips on elements with as few child elements as possible</li>
        <li>Elements or text that show a tooltip when hovered or focused will not wrap onto a new line and will get <code>tabindex="0"</code> for keyboard interaction.</li>
        <li>By default, tooltips appear on the top of their related element.</li>
        <li>Use the <code>data-position</code> attribute to indicate the tooltip's position in relation to the related element:
          <ul>
            <li><code>data-position="top"</code>: On top, horizontally centered. If the <code>data-position</code> attribute is omitted, the tooltip will appear on top by default.</li>
            <li><code>data-position="bottom"</code>: Below, horizontally centered</li>
            <li><code>data-position="right"</code>: To the right, vertically centered</li>
            <li><code>data-position="left"</code>: To the left, vertically centered</li>
          </ul>
        </li>
        <li>Tooltips are protected from viewport clipping. If clipping is detected, the tooltip is positioned on the opposite side as <code>data-position</code> attribute indicates. If the tooltip is still clipped, it is positioned on top of the element, with its width constrained to the width its related element. Only then does the tooltip wrap to multiple lines.</li>
        <li>JavaScript generated most of the tooltip’s markup. Apply <a href="{{ site.baseurl }}/utilities/">utility classes</a> to any tooltip’s wrapping element, by including them inside a <code>data-classes</code> attribute, separated by spaces.</li>
      </ul>
      <h5 id="component-settings">Tooltip settings</h5>
      {% assign settings = site.data.settings.components.tooltip %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h5 id="tooltip-variants">Tooltip variants</h5>
      <p>This component has no variants.</p>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-tooltip</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
