---
permalink: /components/form-controls/
redirect_from:
- /form-controls/
layout: styleguide
type: component
title: Form controls
category: Components
lead: Form controls allow users to enter information into a page.
subnav:
- text: Character count
  href: '#character-count'
- text: Checkbox
  href: '#checkbox'
- text: Combo box
  href: '#combo-box'
- text: Date input
  href: '#date-input'
- text: Date picker
  href: '#date-picker'
- text: Date range picker
  href: '#date-range-picker'
- text: Dropdown
  href: '#dropdown'
- text: File input
  href: '#file-input'
- text: Radio buttons
  href: '#radio-buttons'
- text: Range slider
  href: '#range'
- text: Text input
  href: '#text-input'
- text: Time picker
  href: '#time-picker'
- text: Validation
  href: '#validation'
---

<div class="site-note"><strong>Note:</strong> If you are a building a form with multiple controls, also consider the <a href="{{ site.baseurl }}/form-templates/">accessibility guidelines in the “Form Templates” section</a>.</div>

{% include accessibility.html %}
<div id="settings" class="site-component-section">
  <h3>Form settings</h3>
  {% assign settings = site.data.settings.components.form %}
  {% include settings-table-simple.html
    settings=settings.contents
  %}
</div>
{% include child-sections.html parent='Form controls' %}
