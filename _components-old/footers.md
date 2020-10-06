---
permalink: /components/footer/
redirect_from:
- /footers/
- /components/footers/
layout: styleguide
type: component
title: Footer
category: Components
lead: A footer serves site visitors who arrive at the bottom of a page without finding what they want.
subnav:
- text: Big footer
  href: '#big-footer'
- text: Medium footer
  href: '#medium-footer'
- text: Slim footer
  href: '#slim-footer'
---

{% include code/preview.html component="footers" %}
<section class="site-component-section">
  {% include code/accordion.html component="footers" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="footer-docs">
      Guidance
    </button>
    <div id="footer-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the footer component</h4>
      <ul class="usa-content-list">
        <li><strong>Big footer:</strong> Use the big footer when you want to replicate your site’s navigation scheme in the footer and offer newsletter signups.</li>
        <li><strong>Medium footer:</strong> Use the medium footer when you want to offer only a few footer links (for disclaimers, terms of service, etc.), social media icons, and contact information.</li>
        <li><strong>Slim footer:</strong> Use the slim footer when you only want to offer a few footer links and nothing else.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>Medium and slim footers:</strong> Use the big footer when your footer has more than five links.</li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Curate your footer.</strong> Footer links should point to popular content that might answer a visitor’s remaining questions. Links to disclaimers and legal content sometimes need to be in the footer, but try to minimize “disclaimer bloat” wherever possible.</li>
        <li><strong>The footer doesn’t need to mirror the header.</strong> Link grouping in the footer does not have to mirror link grouping in top level header navigation (especially if the navigation offers many more links than the footer can).</li>
        <li><strong>Include newsletter signup.</strong> Include the newsletter signup if one of your website’s goals is getting visitors to sign up for a newsletter.</li>
        <li><strong>Avoid stale social media accounts.</strong> Link only to social media your agency updates frequently or uses to communicate with customers.</li>
        <li><strong>Limit contact information to email and phone.</strong> Important contact information should be limited to general email or phone numbers, which should be clickable links to dial from a mobile phone. Physical addresses should live on contact pages users can navigate to from the accordion links.</li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Use tab focus.</strong> Code the navigation so that pressing the tab key moves focus from link to link in the navigation, even when the navigation has collapsed into an accordion.</li>
        <li><strong>Use accessible accordions.</strong> On small screens: when collapsed into an accordion, the navigation should also meet the accessibility requirements outlined in the "Accordion" section.</li>
      </ul>
      <h4 class="usa-heading">Implementation</h4>
      <ul class="usa-content-list">
        <li>The social media icons used in the footer are from Font Awesome. To use additional icons, visit <a href="https://fontawesome.com/">Font Awesome</a>.</li>
      </ul>
      <h5 id="component-settings">Footer settings</h5>
      {% assign settings = site.data.settings.components.footer %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h5 id="component-variants">Footer variants</h5>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td class="flex-6" data-title="Variant">usa-footer--big</td>
            <td class="flex-6" data-title="Description">
              <span class="font-lang-3xs">
                A multi-column footer that expands and collapses on mobile.
              </span>
            </td>
          </tr>
          <tr>
            <td class="flex-6" data-title="Variant">usa-footer--slim</td>
            <td class="flex-6" data-title="Description">
            <span class="font-lang-3xs">
              A compact version of the footer.
            </span>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-footer</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
