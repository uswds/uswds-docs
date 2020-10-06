---
title: Default
parent: Button groups
order: 01
lead: The default button group arranges each button as a separate element with a gap between them. On mobile devices, the buttons are arranged vertically.
---

{% include code/preview.html component="button-groups" %}

<section class="site-component-section">
    {% include code/accordion.html component="button-groups" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="default-button-groups-docs">
      Guidance
    </button>
    <div id="default-button-groups-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the default button groups</h4>
      <ul class="usa-content-list">
        <li><strong>Actions have a contextual relationship.</strong> For example, the default button group can be used when a form has both a primary and alternative action.</li>
        <li><strong>Stepping through linear content.</strong> Buttons in a button group can be used for directional navigation and actions (e.g., "Back," "Next," "Continue," "Skip," "Cancel.").</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>If actions are not related.</strong> Consider how placement and alternative structure of unrelated actions can improve usability over placing all actions in a group.</li>
        <li><strong>When mixing destructive and non-destructive actions.</strong> This can lead to input mistakes.</li>
        <li><strong>Linking to content.</strong> Buttons in button groups should not be used when text links would be simpler and more contextually appropriate. Grouped buttons such as "Next" and "Previous" are acceptable when content is organized sequentially.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Avoid burden of choice.</strong> Try not to present the user with too many options.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <ul class="usa-content-list">
        <li>Because the button group uses <code>flexbox</code>, there are several ways modify how the default button group is displayed.
        <ul>
          <li>The default button group will display as a column on smaller screen sizes. To override this behavior and display buttons in a row for all screen sizes, use the <a href="{{ site.baseurl }}/utilities/flex/#utility-flex-direction">flex-row</a> utility.</li>
          <li>On smaller screens, the first button in the source order will appear at the top of column. You can change this behavior using the <a href="{{ site.baseurl }}/utilities/flex/#utility-order">order</a> utility. The order utility includes <a href="{{ site.baseurl }}/utilities/flex/#advanced-settings">responsive advanced settings</a> that allow it to target specific screen sizes.</li>
          <li>Instead of each button appearing on the left-hand side on larger screens (or if you used <code>flex-row</code>), you can use <a href="{{ site.baseurl }}/utilities/flex/#utility-flex-justify">flex-justify</a> to justify the buttons</li>
        </ul>
        </li>
      </ul>
      <h5 id="component-settings">Button group settings</h5>
      <p>
        This component has no settings.
      </p>
      <h5 id="component-variants">Button group variants</h5>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variant" class="flex-6">usa-button-group--segmented</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display a group of buttons in a row as a single element.</span>
            </td>
          </tr>
        </tbody>
      </table>
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
