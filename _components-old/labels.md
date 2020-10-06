---
permalink: /components/tag/
redirect_from:
- /labels/
- /components/labels/
layout: styleguide
type: element
title: Tag
category: Components
lead: A tag draws attention to new or categorized content elements.
---

<section class="site-component-section">
  {% include code/preview.html component="labels" %}
  {% include code/accordion.html component="labels" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="tag-docs">
      Guidance
    </button>
    <div id="tag-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the tag component</h4>
      <ul class="usa-content-list">
        <li>
          <strong>To draw attention to new, important content.</strong>
          Tags can focus attention on important content on that might otherwise be missed.
        </li>
        <li>
          <strong>To filter results with one or more tags.</strong>
        </li>
        <li>
          <strong>To indicate the number of new or unread items within a container.</strong>
          For example, to indicate the number of unread emails within a person’s inbox.
        </li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Confusion with buttons.</strong> Avoid tags if they might appear
          in the same area of the page as buttons.
        </li>
        <li>
          <strong>New or updated content.</strong> To call attention to new or
          updated content, consider changing the background color of the object
          itself or experiment with changing the font weight.
        </li>
        <li>
          <strong>When users already expect content to be updated frequently.</strong>
          For example, on a site dedicated to breaking news. In this case placing
          the new content at the top may be enough.
        </li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Users frequently confuse tags as buttons.</strong>
          Always conduct usability testing to make sure your particular implementation
          is not causing frustration.
        </li>
        <li>
          <strong>If your tags aren’t interactive, disable hover, focus, and
          active styles.</strong>
        </li>
        <li>
          <strong>Don’t mix interactive and static tags.</strong> Once you
          establish a pattern for how tags behave on your site, users will expect
          that behavior every time.
        </li>
        <li>
          <strong>Don’t overdo it.</strong> If everything on a page is called out
          as important, nothing commands unique attention.
        </li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Use ARIA live regions to highlight dynamically loaded content.</strong>
          When tags are used to call out new content that is dynamically loaded
          onto a page, be sure to use ARIA live regions to alert screen readers
          of the change.
        </li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <h5 id="component-settings">Tag settings</h5>
      {% assign settings = site.data.settings.components.label %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h5 id="component-variants">Tag variants</h5>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variant" class="flex-6">usa-tag--big</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">A tag with increased padding and font size.</span>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-tag</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
