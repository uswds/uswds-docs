---
permalink: /utilities/font-size-and-family/
layout: styleguide
type: utility
title: Font size and family
category: Utilities
lead: Set the font size and the font family together.
subnav:
  - text: Font size and family
    href: "#utility-font"
  - text: Font family
    href: "#utility-font-family"
  - text: Utility mixins
    href: "#utility-mixins"
  - text: Advanced settings
    href: "#advanced-settings"

utilities:
  - base: font
    var: font
    output: true
    responsive: true
    active: false
    focus: false
    hover: false
    visited: false
  - base: font-family
    var: font-family
    output: true
    responsive: false
    active: false
    focus: false
    hover: false
    visited: false
---

{% assign tokens = site.data.tokens.typesetting %}

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">font-family</span>
    <span class="property utilities-property">font-size</span>
  </div>
</div>

<section class="utilities-section">

{% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="utility-font">
    {% include utilities/utility-title-bar.html
      title="Font size and family"
      property="font-size, font-family"
      var="font"
    %}
    <section class="utility-examples">

      <h4 class="utility-examples-title margin-bottom-2">Type-based size and family utilities</h4>

      <p class="utility-note"><strong>Note:</strong> You can modify both the default theme sizes and default typefaces in your project settings. Use valid system tokens following the guidance in the <strong><a href="{{ site.baseurl }}/design-tokens/typesetting/">Typesetting</a></strong> section of USWDS <a href="{{ site.baseurl }}/design-tokens/">design tokens</a> documentation.</p>


      {% for family in tokens.family.type %}
        {% if family.default %}
          {% assign font = tokens.family.font
            | where: 'token', family.default
            | first %}
            <h5 class="utility-examples-title">font-{{ family.token }} <span class="text-normal font-sans-3xs">(Shown: {{ font.name }})</span></h5>
          {% for size in tokens.size.theme %}
            {% assign font = tokens.family.font
              | where: 'token', family.default
              | first %}
            {% assign px = tokens.size.system
              | where: 'token', size.default
              | first %}
            {% assign normal = tokens.meta.normal
              | divided_by: font.normal %}
            {% assign output = px.value
              | times: normal
              | round: 1 %}
            {% capture this_class %}
              .font-{{ family.token }}-{{ size.token }}
            {% endcapture %}
            {% capture this_value %}
              {{ output }}px
            {% endcapture %}
            {% capture this_example %}
              <div class="font-{{ family.token }}-{{ size.default }} line-height-{{ family.token }}-1 text-gray-90">
                Tuscaloosa
              </div>
            {% endcapture %}
            {% include utilities/utility-example.html
              utility=this_class
              utilityClasses='width-card flex-auto'
              value=this_value
              valueClasses='flex-fill'
              example=this_example
              exampleClasses='flex-auto'
            %}
          {% endfor %}
        {% endif %}
      {% endfor %}

      <h4 class="utility-examples-title">Role-based size and family utilities</h4>

      <p class="utility-note"><strong>Note:</strong> You can modify both the default theme sizes and default typefaces in your project settings. Use valid system tokens following the guidance in the <strong><a href="{{ site.baseurl }}/design-tokens/typesetting/">Typesetting</a></strong> section of USWDS <a href="{{ site.baseurl }}/design-tokens/">design tokens</a> documentation.</p>

      {% for role in tokens.family.role %}
        {% if role.default %}
          {% assign type = tokens.family.type
            | where: 'token', role.default
            | first %}
          {% assign font = tokens.family.font
            | where: 'token', type.default
            | first %}
            <h5 class="utility-examples-title">font-{{ role.token }} <span class="text-normal font-sans-3xs">(Shown: {{ font.name }})</span></h5>
          {% for size in tokens.size.theme %}
            {% assign type = tokens.family.type
              | where: 'token', role.default
              | first %}
            {% assign font = tokens.family.font
              | where: 'token', type.default
              | first %}
            {% assign px = tokens.size.system
              | where: 'token', size.default
              | first %}
            {% assign normal = tokens.meta.normal
              | divided_by: font.normal %}
            {% assign output = px.value
              | times: normal
              | round: 1 %}
            {% capture this_class %}
              .font-{{ role.token }}-{{ size.token }}
            {% endcapture %}
            {% capture this_value %}
              {{ output }}px
            {% endcapture %}
            {% capture this_example %}
              <div class="font-{{ role.default }}-{{ size.default }} line-height-{{ role.token }}-1 text-gray-90">
                Tuscaloosa
              </div>
            {% endcapture %}
            {% include utilities/utility-example.html
              utility=this_class
              utilityClasses='width-card flex-auto'
              value=this_value
              valueClasses='flex-fill'
              example=this_example
              exampleClasses='flex-auto'
            %}
          {% endfor %}
        {% endif %}
      {% endfor %}
    </section><!-- examples -->

  </section><!-- utility -->

  <section class="utility" id="utility-font-family">
    {% include utilities/utility-title-bar.html
      title="Font family"
    %}

    <section class="utility-examples">

      <h4 class="utility-examples-title margin-bottom-2">Type-based</h4>
      {% for type in tokens.family.type %}
        {% if type.default %}
          <div class="utility-example-container">
            <div class="utility-class">.font-family-{{ type.token }}</div>
          </div>
        {% endif %}
      {% endfor %}

      <h4 class="utility-examples-title margin-bottom-2">Role-based</h4>
      {% for role in tokens.family.role %}
        {% if role.default %}
          <div class="utility-example-container">
            <div class="utility-class">.font-family-{{ role.token }}</div>
          </div>
        {% endif %}
      {% endfor %}

    </section><!-- examples -->

  </section><!-- utility -->
</section><!-- utilities -->

<section id="utility-mixins" class="padding-top-4">
  <h2 class="site-h2 margin-y-0">Utility mixins</h2>
  {% include utilities/utility-mixin-intro.html %}

  <table class="usa-table--borderless site-table-responsive site-table-simple">
    <thead>
      <tr>
        <th scope="col" class="tablet:maxw-card-lg">Utility</th>
        <th scope="col">Mixin</th>
        <th scope="col">Example</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .font-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-font(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>, <a href="{{ site.baseurl }}/design-tokens/typesetting/font-size/" class="token">size</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-font('sans', 'sm')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .font-family-<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-font-family(<a href="{{ site.baseurl }}/design-tokens/typesetting/font-family/" class="token">family</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-font-family('sans')
          </span>
        </td>
      </tr>
    </tbody>
  </table>

{% include utilities/utility-mixin-using.html %}

</section>

<section id="advanced-settings" class="padding-top-4">
  <h2 class="site-h2 margin-y-0">Advanced settings</h2>

{% include utilities/responsive-variants.html %}
{% include utilities/state-variants.html %}
{% include utilities/output-control.html %}

  <section class="utilities-section margin-top-6">
    {% include utilities/values-intro.html %}

    <aside class="example border-left-05 border-secondary-light padding-left-105 margin-top-2">
      <h4 class="font-lang-2xs margin-top-0 margin-bottom-05">Example</h4>

<pre class="font-mono-xs margin-0 padding-0 bg-transparent">
$font-palettes: (
  'palette-font-theme-types' // note: no trailing comma
);
</pre>

    </aside>

    {% include utilities/standard-palettes.html %}
    {% include utilities/typescale-palettes.html %}

  </section>
</section>
