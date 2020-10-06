---
permalink: /components/button/
redirect_from:
- /buttons/
- /components/buttons/
layout: styleguide
type: element
title: Button
category: Components
lead: Use buttons to draw attention to important actions.
component_url: 'https://components.designsystem.digital.gov/components/detail/buttons.html'
---

{% include code/preview.html component="buttons" %}

<section class="site-component-section">
  {% include code/accordion.html component="buttons" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="accordion-bordered-docs">
      Guidance
    </button>
    <div id="accordion-bordered-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the button component</h4>
      <ul class="usa-content-list">
        <li><strong>Important actions.</strong> Use buttons for the most important actions you want users to take on your site, such as <code>Download</code>, <code>Sign up</code> or <code>Log out</code>.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>Linking between a site’s pages.</strong> Use regular links instead.</li>
        <li><strong>If the action is less popular or less important.</strong> Less popular or less important actions may be visually styled as links.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Use standard buttons for actions that go a next step.</strong></li>
        <li><strong>Use outline buttons for actions that happen on the current page.</strong></li>
        <li><strong>Give an important action a distinctive style.</strong> Style the button most users should click in a way that distinguishes it from other buttons on the page. Try using the <code>usa-button--big</code> variant or the most visually distinct color variant.</li>
        <li><strong>Make sure buttons look clickable.</strong> Use color variations to distinguish static, hover, and active states.</li>
        <li><strong>Avoid using too many buttons on a page.</strong></li>
        <li><strong>Use sentence case for button labels.</strong></li>
        <li><strong>Keep button text short.</strong> Button text should be as short as possible with action words that clearly explain what will happen when the button is selected (for example, <code>Download</code>, <code>View</code> or <code>Sign up</code>).</li>
        <li><strong>Lead with a verb.</strong> Make the first word of the button’s text a verb. For example, instead of <code>Complaint filing</code> label the button <code>File a complaint</code>.</li>
        <li><strong>Icons can also be helpful.</strong> At times, consider adding an icon to signal specific actions (<code>Download</code>, <code>Open in a new window</code>, etc). </li>
      </ul>
    <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Buttons should display a visible focus state when users tab to them.</strong></li>
        <li><strong>Use standard markup.</strong> Avoid using <code>&lt;div&gt;</code> or <code>&lt;img&gt;</code> tags to create buttons. Screen readers don't automatically know either is a usable button.</li>
        <li><strong>Screen readers handle buttons and links differently.</strong> When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <ul class="usa-content-list">
        <li>The examples demonstrate how to use button elements. To use a button style on a link, add the <code>usa-button</code> class to your link.</li>
        <li>To use a different style button on your link, add button variant classes in addition to <code>usa-button</code>:
          <ul>
            <li><code>usa-button--secondary</code></li>
            <li><code>usa-button--base</code></li>
            <li><code>usa-button--accent-cool</code></li>
            <li><code>usa-button--accent-warm</code></li>
            <li><code>usa-button--outline</code></li>
            <li><code>usa-button--inverse</code></li>
            <li><code>usa-button--big</code></li>
            <li><code>usa-button--unstyled</code></li>
          </ul>
        </li>
        <li>For example, a secondary button style would use the following code:
        <code>&lt;a class="usa-button usa-button--secondary" href=&quot;/my-link"&gt;My button&lt;/a&gt;</code></li>
      </ul>
      <h5 id="component-settings">Button settings</h5>
      {% assign settings = site.data.settings.components.buttons %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h5 id="component-variants">Button variants</h5>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variant" class="flex-6">usa-button--secondary</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">The secondary style of button.</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-button--accent-cool</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Button with a accent-cool background.</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-button--accent-warm</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Button with a accent-warm background.</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-button--base</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Button with a base gray background.</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-button--outline</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Transparent button with a stroke.</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-button--inverse</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Outlined button for dark backgrounds.</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-button--big</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">A bigger version of the default button.</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-button--unstyled</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">A button that looks like a link.</span>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-button</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
