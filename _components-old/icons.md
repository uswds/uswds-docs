---
permalink: /components/icons/
layout: styleguide
type: component
title: Icons
category: Components
lead: Icons communicate meaning in a graphical user interface.
---

USWDS uses a subset of [Font Awesome](https://fontawesome.com/) icons on the project. They are available for use in `src/img`. If you need additional icons, use [Font Awesome](https://fontawesome.com/) in your project.

<div class="usa-accordion usa-accordion--bordered site-accordion-docs site-component-section">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="icons-docs">
    Guidance
  </button>
  <div id="icons-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4 class="usa-heading">Usability guidance</h4>
    <p>See <a href="https://www.nngroup.com/articles/icon-usability/">Icon Usability - Nielsen Norman Group</a>.</p>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>Provide descriptive text when an icon is meaningful or has an action associated with it. Do not provide additional text when the icon is decorative.</li>
      <li>See <a href="https://accessibility.digital.gov/front-end/images/">Images - Accessibility for Teams</a> and <a href="https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility">Accessibility - Font Awesome</a>.</li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
    <p>Use USWDS icons available in <code>src/img</code> or <a href="https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css">add Font Awesome to your project</a>. USWDS uses icons in two ways:</p>
    <ul>
      <li>SVG in HTML <code>img</code> elements</li>
      <li>SVG in CSS backgrounds</li>
    </ul>
  </div>
</div>
