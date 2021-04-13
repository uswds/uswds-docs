---
permalink: /documentation/accessibility/
redirect_from:
- /accessibility/
- /components/accessibility/
layout: styleguide
title: Accessibility
category: How to use USWDS
lead: Accessibility tips to help you deliver delightful experiences to all users.
order: 25
---

## Accessibility for Teams

Everyone who works on government websites has a role to play in making federal resources accessible and inclusive. Visit [Accessibility for Teams [digital.gov]](https://accessibility.digital.gov/) to learn how to embed accessibility and inclusive design practices into your team’s workflow. Read more: [Introducing Accessibility for Teams [gsa.gov]](https://18f.gsa.gov/2018/07/10/introducing-accessibility-for-teams/).

## Hiding and showing content

There will be cases in which you will need to selectively "show" and "hide"
content by either removing it from the visual flow or preventing screen
readers from reading it. We have settled on the following conventions for each
use case:

{% capture show %}**show**{% endcapture %}
{% capture hide %}_hide_{% endcapture %}

<div class="site-table-wrapper margin-top-4">
  <table class="usa-table--borderless site-table-responsive">
    <thead>
      <tr>
        <th scope="col" class="text-no-wrap">Visual browsers</th>
        <th scope="col" class="text-no-wrap">Screen readers</th>
        <th scope="col" class="text-no-wrap">Solution</th>
      </tr>
    </thead>
    <tr>
      <td data-title="Visual browsers">
        <span>
          hide
        </span>
      </td>
      <td data-title="Screen readers">
        <span>
          hide
        </span>
      </td>
      <td data-title="Solution">
        <span>
          Add the boolean <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden"><code>hidden</code> [mozilla.org]</a> attribute to dynamically hide content from all users. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute">Remove the attribute [mozilla.org]</a> to show it again.
        </span>
      </td>
    </tr>
    <tr>
      <td data-title="Visual browsers">
        <span>
          <strong>show</strong>
        </span>
      </td>
      <td data-title="Screen readers">
        <span>
          hide
        </span>
      </td>
      <td data-title="Solution">
        <span>
          Use the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden"><code>aria-hidden="true"</code> [mozilla.org]</a> attribute to "hide" content from screen readers while keeping it visually perceivable.
        </span>
      </td>
    </tr>
    <tr>
      <td data-title="Visual browsers">
        <span>
          hide
        </span>
      </td>
      <td data-title="Screen readers">
        <span>
          <strong>show</strong>
        </span>
      </td>
      <td data-title="Solution">
        <span>
          Use the <code>usa-sr-only</code> class to show content to screen readers only. This removes the content from the visual flow of the document but retains its legibility by screen readers.
        </span>
      </td>
    </tr>
  </table>
</div>
