---
permalink: /components/search/
redirect_from:
- /search-bar/
- /components/search-bar/
layout: styleguide
type: component
title: Search
category: Components
lead: Search allows users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation
---

<section class="site-component-section">
  {% include code/preview.html component="search-bar" classes="preview-search-bar" %}
  {% include code/accordion.html component="search-bar" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="search-bar-docs">
      Guidance
    </button>
    <div id="search-bar-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the search component</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Use site search.</strong> There will always be users who
          would benefit from being able to search your site.
        </li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Very small sites.</strong> On single-page or very small sites,
          you may be able to get away without a search bar.
        </li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Make the input at least 27 characters wide.</strong> Allow the
          search component to be as wide as possible, but a minimum of 27 characters
          wide. This allows users to enter multiple search terms and still be
          able to see all of them. The more users can see their search terms,
          the easier it is to review, verify, and submit their search query.
        </li>
        <li>
          <strong>The magnifying glass icon is effective.</strong> The magnifying
          glass has been shown to be almost universally recognized by users as
          an indicator of search, and doesn’t need to be visually paired with
          the word "Search" as long as it remains for screen readers.
        </li>
        <li>
          <strong>Search terms should persist into search results.</strong>
          When displaying the search results, preload the search bar content
          with the original search terms.
        </li>
        <li>
          <strong>Use a full search box on the home page.</strong> On a site’s
          home page the search function should appear as a search box instead of
          a link so users can locate it easily.
        </li>
        <li>
          <strong>Don’t offer advanced search as the default.</strong>
          The majority of people will do a simple search with one or two search terms.
          If advanced search is offered, it increases the likelihood of mistakes.
        </li>
        <li>
          <strong>Use a label even if it’s visually hidden.</strong> The form
          field should include a label for screen reader users.
        </li>
        <li>
          <strong>The search button should be a submit button.</strong>
          This reduces the number of keystrokes required to use the form.
        </li>
      </ul>
      <h5 id="component-settings">Search settings</h5>
      {% assign settings = site.data.settings.components.search %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h5 id="component-variants">Search variants</h5>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variant" class="flex-6">usa-search--big</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Search component with increased padding and font-size.
              </span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-search--small</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                A compact variation of the search. Uses a magnifying glass icon
                for the submit button.
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Customize accessibly.</strong> As you customize this form
          template, ensure it continues to follow the
          <a href="{{ site.baseurl }}/form-templates/">
            accessibility guidelines for form templates
          </a> and the <a href="{{ site.baseurl }}/form-controls/">accessibility guidelines for form controls</a>.
        </li>
        <li>
          <strong>Include the word “Search” in the button.</strong> Always include
          the word “search” inside the <code>&lt;button&gt;</code> element for
          screen readers. You can visually hide this text using the CSS class
          <code>usa-sr-only</code> or Sass mixin <code>@include sr-only;</code>.
        </li>
      </ul>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-search</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
