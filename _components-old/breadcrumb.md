---
permalink: /components/breadcrumb/
redirect_from:
- /breadcrumbs/
- /breadcrumb/
- /components/breadcrumbs/
layout: styleguide
type: component
title: Breadcrumb
category: Components
lead: Breadcrumbs provide secondary navigation to help users understand where they are in a website.
---

A breadcrumb bar (or _breadcrumbs_, or _breadcrumb trail_) is a series of links that describes the hierarchical relationship between the current page and the overall site structure. Breadcrumbs allow a user to navigate “up” instead of using the “Back” button to return to the previous page. A breadcrumb bar facilitates orientation when a user navigates to an interior page from a web search or link from another site.

{% include code/preview.html component="breadcrumb" %}

<section class="site-component-section">
  {% include code/accordion.html component="breadcrumb" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button" aria-expanded="true" aria-controls="breadcrumb-docs">Guidance</button>
    <div id="breadcrumb-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the breadcrumb component</h4>
      <ul class="usa-content-list">
        <li>
          <strong>When orientation matters.</strong> Breadcrumbs show where the current page is located in the website hierarchy. Use a breadcrumb when it's likely that a user will arrive at an interior page from search or from an outside link.
        </li>
        <li>
          <strong>To facilitate navigation.</strong> Breadcrumbs make it easier to understand complex sites. Use breadcrumbs to reinforce your site's structure.
        </li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Simple sites.</strong> If the website is not very
          deep and the context for the current page is clear from the main
          navigation.
        </li>
        <li>
          <strong>Landing pages.</strong> Omit breadcrumbs on the homepage of a site. Breadcrumbs could also be omitted from section landing pages. Breadcrumbs are most useful when the hierarchy is not immediately apparent from the main navigation.
        </li>
        <li>
          <strong>Redundant side navigation.</strong> When side navigation is used in combination with main navigation, it may be redundant to include breadcrumbs.
        </li>
        <li>
          <strong>Step-by-step processes.</strong> Use breadcrumbs for hierarchical relationships, not linear relationships (like individual steps in a multi-step process).
        </li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Consider alternatives to wrapping.</strong> In general, rely on truncating the title of the current page over wrapping breadcrumb text. But usability comes first. Consider alternative approaches if the title of the current page is completely truncated. For example, a mobile-friendly breadcrumb may show only a page's direct parent. Sites with very long breadcrumb trails might ultimately need to wrap breadcrumbs, or consider flattening the information architecture of the site.
        </li>
        <li>
          <strong>Use complete page titles.</strong> Use the same wording in breadcrumb text as in the page title.
        </li>
        <li>
          <strong>Start with the word “Home”.</strong> Rather than using a house icon, spell out the word “Home” as the first link in the breadcrumbs.
        </li>
        <li>
          <strong>Consider size of tap targets on small widths.</strong> Although breadcrumbs are frequently displayed using smaller text, make sure the text is not too small to select at small widths.
        </li>
        <li>
          <strong>Optimize for search engines.</strong> To be eligible for rich results display in search engine results, mark up your site’s breadcrumbs using JSON-LD (recommended) or RDFa.
        </li>
      </ul>
      <h4>Accessibility</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Use the <code>nav</code> element.</strong> This allows assistive technology to present the breadcrumbs in context as a navigational element on the page.
        </li>
        <li>
          <strong>Consider separators text when it comes to contrast.</strong> Use separators that have AA contrast against their background.
        </li>
        <li>
          <strong>Use ordered lists and list items.</strong> Use an <code>ol</code> for breadcrumbs and an <code>li</code> for each item. This allows assistive technology to enumerate the items in the breadcrumbs and allows shortcuts between list items.
        </li>
        <li>
          <strong>Use ARIA markup for additional context.</strong> Use <code>aria-label="Breadcrumbs"</code> on the main element and <code>aria-current="page"</code> on the current page.
        </li>
        <li>
          <strong>Hide separators from screen readers.</strong> The separators between links in the breadcrumbs should not be read by screen readers.
        </li>
      </ul>
      <h4>Implementation</h4>
      <h5 id="component-settings">Breadcrumb settings</h5>
      {% assign settings = site.data.settings.components.breadcrumb %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h5 id="component-variants">Breadcrumb variants</h5>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variable" class="flex-6">usa-breadcrumb--wrap</td>
            <td data-title="Description" class="flex-6">
              <p class="font-lang-3xs">
                Wrap the breadcrumb bar instead of truncating.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
