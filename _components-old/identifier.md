---
permalink: /components/identifier/
redirect_from:
  - /identifier/
layout: styleguide
type: element
title: Identifier
category: Components
lead: The identifier communicates a site's parent agency and displays agency links required by federal laws and policies.
---

{% include code/preview.html component="identifier" %}

<section class="site-component-section">
  {% include code/accordion.html component="identifier" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="table-docs">
      Guidance
    </button>
    <div id="table-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the identifier component</h4>
      <ul class="usa-content-list">
        <li><strong>To identify a site's parent agency.</strong> The identifier is a complement to the USWDS <a href="{{ site.baseurl }}/components/banner">banner</a>. Use the identifier to tell users what agency is responsible for your website.</li>
        <li><strong>To display links required by federal laws and policies.</strong> The identifier includes <a href="https://digital.gov/resources/required-web-content-and-links/">links required on all government sites</a>.</li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li><strong>Any time it would be misleading.</strong> The identifier should be used to reduce confusion. Avoid using the identifier on any site meant only for testing or otherwise not meant to be identified as an official government website.</li>
        <li><strong>Redundant content.</strong> Don't add the identifier without removing any duplicate links from your existing site footer. Favor the common links and content in the identifier over any equivalent content in your site footer. </li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li><strong>Use the indicator component for required links.</strong> If your site already includes the federally required links in its site footer, remove them in favor of the links in the identifier. This assures that site visitors find the required links in a consistent location from site to site.</li>
        <li><strong>Display the parent agency logo, not the product logo.</strong> The identifier is meant to identify a website's parent agency as a complement to the site footer. Site-specific logos, like a product logo, should be in the site footer, not the identifier. </li>
        <li><strong>Display multiple parents and logos in hierarchical order. </strong> If a site has more than one parent agency, you may display a reference and a logo for each parent in hierarchical order, highest first. For example,"An official website of [Grandparent Department] and [Parent Agency]".</li>
        <li><strong>Avoid distraction.</strong> The identifier appears on every page of your site. Choose background colors that fit with your site theme and avoid color combinations that draw excessive attention to the identifier.</li>
        <li><strong>Keep the text up-to-date.</strong> Use the most current version of the identifier.</li>
      </ul>
      <h4 class="usa-heading">Accessibility</h4>
      <ul class="usa-content-list">
        <li><strong>Use proper landmarks for each identifier section.</strong> Each identifier section should be either a <code>section</code> or a <code>nav</code>, and include an appropriate <code>aria-label</code> property.</li>
        <li><strong>Add an <code>alt</code> attribute to each logo image.</strong> Use <code>[Agency shortname] logo</code> as the alt text for each logo image you add.</li>
        <li><strong>Use image role for any SVG images.</strong> Use <code>role="img"</code> with any SVG logo image.</li>
      </ul>
      <h4 class="usa-heading" id="implementation">Implementation</h4>
      <ul class="usa-content-list">
        <li><strong>Except where noted, use the entire component without deletions or additions.</strong> With rare exceptions, if you use the identifier, include the entire identifier. That is, don't delete sections or required links or change any link text beyond the customizations mentioned in the implementation section.</li>
        <li><strong>Use a background color darker than that of the footer.</strong> Use color to anchor the identifier to the bottom of the page and distinguish it from other site content. Use primary or base family background colors of grade <code>80</code> or higher, or <code>black</code>.</li>
        <li><strong>Use an SVG logo if possible.</strong> Ensure the logo is high resolution. We recommend using the SVG version of any logo if you have one. Otherwise, use an image that's at least 120 pixels tall.</li>
        <li><strong>Use logos intended for dark backgrounds if possible.</strong> The indicator has a dark background. If your agency has a version of its logo intended for dark backgrounds, use that version.</li>
        <li><strong>Update the required links to point to the proper URLs. </strong> The identifier includes links required of any federal website, and these links are specific to a department, agency, or website. We've linked each section below to the guidance on Digital.gov to provide further context.
          <ul>
            <li>
              <p><strong><a href="https://digital.gov/resources/required-web-content-and-links/#about-page">About [Official parent agency acronym]</a>:</strong> Update the link text to include the department of agency's official acronym. Link to the "About" page of your parent agency's principal website. If your site includes multiple parents, include only the organization highest in the hierarchy in this link.</p>
              <p>Example: <a href="https://www.gsa.gov/about-us">https://www.gsa.gov/about-us</a></p>
            </li>
            <li>
              <p><strong><a href="https://digital.gov/resources/required-web-content-and-links/#accessibility-statement">Accessibility</a>:</strong> Link to the “Accessibility” page of your parent agency's principal website.</p>
              <p>Example: <a href="https://www.gsa.gov/website-information/accessibility-aids">https://www.gsa.gov/website-information/accessibility-aids</a></p>
            </li>
            <li>
              <p><strong><a href="https://digital.gov/resources/required-web-content-and-links/#freedom-of-information-act-foia">FOIA requests</a>:</strong> Link to a page that includes information about how the public can request information under the Freedom of Information Act on your parent agency's principal website.</p>
              <p>Example: <a href="https://www.gsa.gov/reference/freedom-of-information-act-foia">https://www.gsa.gov/reference/freedom-of-information-act-foia</a></p>
            </li>
            <li>
              <p><strong><a href="https://digital.gov/resources/required-web-content-and-links/#equal-employment">No FEAR Act data</a>:</strong> Link to the "Equal Employment Opportunity Data Posted Pursuant to the No Fear Act" page on your parent agency's principal website. </p>
              <p>Example: <a href="https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002">https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002</a></p>
            </li>
            <li>
              <p><strong><a href="https://digital.gov/resources/required-web-content-and-links/#report-fraud-to-the-inspector-general">Office of the Inspector General</a>:</strong> Link to your parent agency's  Office of the Inspector General.</p>
              <p>Example: <a href="https://www.gsaig.gov">https://www.gsaig.gov</a></p>
            </li>
            <li>
              <p><strong><a href="http://digital.gov/resources/required-web-content-and-links#budget-and-performance-reports">Performance reports</a>:</strong> Link to a “Budget and Performance” page that includes the agency’s strategic plan among other financial and performance documentation.</p>
              <p>Example: <a href="https://www.gsa.gov/reference/reports/budget-performance">https://www.gsa.gov/reference/reports/budget-performance</a></p>
            </li>
            <li>
              <p><strong><a href="https://digital.gov/resources/required-web-content-and-links/#privacy-policy">Privacy policy</a>:</strong> Link to the "Privacy" page most specific to your website. For example, if both your product website and your parent agency's principal website have privacy pages, link to your product website's privacy page here.</p>
              <p>Example: <a href="https://www.dhs.gov/privacy-policy">https://www.dhs.gov/privacy-policy</a></p>
            </li>
          </ul>
        </li>
        <li><strong>Use the Spanish version if for Spanish-language sites.</strong> If you have an official Spanish language website, use the Spanish version of the identifier.</li>
        <li><strong>Duplicate the logo element if using multiple logos.</strong> If you're using multiple logos, duplicate the <code>usa-identifier__logo</code> element and link the image to your image source.</li>
        <li><strong>If applicable, include any taxpayer disclaimer after the standard text.</strong> If the organization must provide a taxpayer expense disclaimer, include it following the "Official website" text, as a separate sentence. For example, "An official website of [Department]. Produced and published at taxpayer expense."</li>
      </ul>
      <h5 id="component-settings">Identifier settings</h5>
      {% assign settings = site.data.settings.components.identifier %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h5 id="component-variants">Identifier variants</h5>
      <p>This component has no variants.</p>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-identifier</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
