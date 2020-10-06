---
permalink: /components/accordion/
redirect_from:
  - /accordions/
  - /components/accordions/
layout: styleguide
type: component
title: Accordion
category: Components
lead: An accordion is a list of headers that hide or reveal additional content when selected.
---

<section class="site-component-section">
  {% include code/preview.html component="accordion" %}
  {% include code/accordion.html component="accordion" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
    aria-expanded="true" aria-controls="documentation">
    Guidance
  </button>
  <div id="documentation" class="usa-accordion__content site-component-usage">
    <h4>When to use the accordion component</h4>
    <ul class="usa-content-list">
      <li><strong>If users will only need a few specific pieces of content within a page.</strong></li>
      <li><strong>If you have only a small space to display a lot of content.</strong></li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>If users need to see most or all of the information on a page.</strong> Use well-formatted text instead.</li>
      <li><strong>If there is not enough content to warrant condensing.</strong> Accordions increase cognitive load and interaction cost, as users have to make decisions about what headers to click on.</li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li><strong>Make the entire header selectable.</strong> Allow users to click anywhere in the header area to expand or collapse the content; a larger target is easier to manipulate.</li>
      <li><strong>Give interactive elements enough space.</strong> Make sure interactive elements within the collapsible region are far enough from the headers that users don’t accidentally trigger a collapse. (The exact distance depends on the device.)</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Code header areas in the accordion as buttons.</strong> Using a <code>&lt;button&gt;</code> assures that accordions are usable with both screen readers and the keyboard.
      </li>
      <li>
        <strong>Use aria-expanded on buttons to express an accordion’s default state.</strong> Buttons should state if they are expanded by default with <code>aria-expanded=<wbr>"true"</code>. The <code>aria-expanded=<wbr>"false"</code> attributes will be added to other buttons when the accordion is initialized by the JavaScript.
        </li>
        <li>
          <strong>Use unique ids.</strong> Each button has a unique name <code>aria-controls=<wbr>"id"</code> that associates the control to the appropriate region by referencing the controlled element&rsquo;s <code>id</code>.
          </li>
          <li>
            <strong>The accordion uses javascript to set the <code>hidden</code> value of its content area.</strong> Each content area will have its <code>hidden</code> attribute set by the component, depending on its corresponding button&rsquo;s <code>aria-expanded</code> attribute. To ensure that your content is accessible in the event that the JavaScript does not load or is disabled, you should not manually set <code>hidden</code> on any of your content areas.
          </li>
        </ul>
        <h4 class="usa-heading">Implementation</h4>
        <ul class="usa-content-list">
          <li>
            <strong>Multiselectable accordion groups.</strong> Add the <code>aria-multiselectable="true"</code> attribute to any <code>usa-accordion</code> to create a multiselectable accordion group.
          </li>
          <li>
            <strong>Default an accordion button to open.</strong> Add the <code>aria-expanded="true"</code> attribute to any <code>usa-accordion__button</code> to have that section open by default at page load.
          </li>
        </ul>
        <h5 id="component-settings">Accordion settings</h5>
        {% assign settings = site.data.settings.components.accordion %}
        {% include settings-table-simple.html
          settings=settings.contents
        %}
        <h5 id="component-variants">Accordion variants</h5>
        <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
          <thead>
            <tr>
              <th scope="col" class="flex-6">Variant</th>
              <th scope="col" class="flex-6">Description</th>
            </tr>
          </thead>
          <tbody class="font-mono-2xs">
            <tr>
              <td data-title="Variant" class="flex-6">
                usa-accordion--bordered
              </td>
              <td data-title="Description" class="flex-6">
                <span class="font-lang-3xs">
                  <p>Display a border around accordion content.</p>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <h4 class="usa-heading">Package information</h4>
        <ul class="usa-content-list">
          <li>
            <strong>Package usage:</strong> <code>@import usa-accordion</code>
          </li>
          <li>
            <strong>Requires:</strong> <code>required</code>, <code>global</code>
          </li>
        </ul>
      </div>
    </div>
  </section>
