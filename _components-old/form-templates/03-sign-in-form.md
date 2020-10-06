---
title: Sign-in form
parent: Form templates
order: 03
lead: Sign a user in to a website or application
---

{% include code/preview.html component="sign-in-form" %}
{% include code/accordion.html component="sign-in-form" %}
<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="signin-form-docs">
    Guidance
  </button>
  <div id="signin-form-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use a sign-in form</h4>
    <ul class="usa-content-list">
      <li><strong>Accessing customized or private content.</strong> When users expect information to be customized or private, place it behind a sign-in form.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Accessing public content.</strong> Allow users to access as much as of your online services as possible without having to sign in. Sign-in forms are a barrier between users and the content they want.</li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li><strong>Less is more.</strong> Make your explanations concise. Users sign in faster when less text surrounds the form.</li>
      <li><strong>Allow email addresses to sign in.</strong> People have an easier time remembering their email address than they do a unique username.</li>
      <li><strong>Consider keeping users signed in.</strong> If you must include a sign-in form, consider allowing users to stay logged in (“Remember me”) on trusted computers so they can avoid this barrier in the future.</li>
      <li><strong>Make it easy to retrieve forgotten sign-in info.</strong> Most authentication failures occur because a user has forgotten their username or password. This is especially common when a long time passes between visits, as is the case with most federal websites.</li>
      <li><strong>Toggle password masking.</strong> Password masking (replacing what the user types with a generic symbol) makes it more likely that users will make mistakes when trying to sign in, and doesn't offer much in the way of additional security. Allow users to unmask the password field so they can see what they type. This is especially useful on mobile devices, when users are more likely to mistype.</li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li><strong>Customize accessibly.</strong> As you customize this form template, make sure it continues to follow the <a href="{{ site.baseurl }}/form-templates/">accessibility guidelines for form templates</a> and the <a href="{{ site.baseurl }}/form-controls/">accessibility guidelines for form controls</a>.</li>
      <li><strong>Give adequate advance notice before automatic sign-out.</strong> Don’t automatically sign out a user without giving them 20 seconds' advance notice to request more time. Users with disabilities sometimes require more time to respond to prompts.</li>
    </ul>
    <h4 class="usa-heading">Package information</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Package usage:</strong> <code>@import form-templates</code>
      </li>
      <li>
        <strong>Requires:</strong> <code>required</code>, <code>global</code>
      </li>
    </ul>  </div>
</div>
