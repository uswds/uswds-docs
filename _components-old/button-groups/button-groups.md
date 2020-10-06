---
permalink: /components/button-groups/
layout: styleguide
title: Button groups
type: component
category: Components
lead: Use button groups to collect similar or related actions
component_url: 'https://components.designsystem.digital.gov/components/detail/button-groups--default.html'
subnav:
- text: Default
  href: '#default-button-group'
- text: Segmented
  href: '#segmented'
---


<div class="site-component-usage usa-prose site-prose margin-top-5">
  <h3 class="usa-heading heading-margin-alt">General accessibility guidance for button groups</h3>
  <ul class="usa-content-list">
    <li><strong>Convey relationship.</strong> If not using a list element, give the parent element <code>role="group"</code> in order to convey to screen readers that actions are part of a group. If using as part of a toolbar, use <code>role="toolbar"</code>.</li>
  </ul>
  <h3 class="usa-heading">General implementation guidance for button groups</h3>
  <ul class="usa-content-list">
    <li>Buttons inside of a button group follow the same guidelines as the <a href="{{ site.baseurl }}/components/button/">button component</a>.</li>
    <li>Button groups support any style and size.</li>
  </ul>
</div>

{% include child-sections.html parent='Button groups' %}