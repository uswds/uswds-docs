---
title: Password reset form
parent: Form templates
order: 03
lead: Reset a password
---

{% include code/preview.html component="password-reset" %}
{% include code/accordion.html component="password-reset" %}
<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="password-reset-docs">
    Guidance
  </button>
  <div id="password-reset-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use a password reset form</h4>
    <ul class="usa-content-list">
      <li><strong>Any time your site requires passwords for sign-in.</strong> To offer a way to easily reset a password any time users are able to sign in to your site.</li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li><strong>Users forget passwords.</strong> If users need a password to access your site, they will forget that password and need a way to reset it.</li>
      <li><strong>Be clear about password requirements.</strong> State any password requirements (for example, “Must include one capital letter”) up front. Don’t leave users guessing about password requirements, only to hit them with an error message later.</li>
      <li><strong>More about passwords:</strong> For more guidance on password requirements, see NIST's <a href="https://github.com/usnistgov/800-63-3/blob/nist-pages/sp800-63b/appA_memorized.md">Appendix A—Strength of Memorized Secrets</a>.</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li><strong>Customize accessibly.</strong> As you customize this form template, make sure it continues to follow the <a href="{{ site.baseurl }}/form-templates/">accessibility guidelines for form templates</a> and the <a href="{{ site.baseurl }}/form-controls/">accessibility guidelines for form controls</a>.</li>
    </ul>
    <h4>Implementation</h4>
    <ul class="usa-content-list">
      <li>For guidance on the technical details of validation, see the
        <a href="/components/form-controls/#validation">validation documentation</a>.</li>
      </ul>
    <h4 class="usa-heading">Package information</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Package usage:</strong> <code>@import form-templates</code>
      </li>
      <li>
        <strong>Requires:</strong> <code>required</code>, <code>global</code>
      </li>
    </ul>
  </div>
</div>
