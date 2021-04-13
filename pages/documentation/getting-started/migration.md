---
permalink: /documentation/migration/
layout: styleguide
title: Migrating to USWDS 2
category: How to use USWDS
subnav:
- text: Summary
  href: '#summary'
- text: Integrating tokens
  href: '#integrating-tokens'
- text: BEM
  href: '#bem'
- text: Mixins and functions
  href: '#mixins-and-functions'
- text: Spacing units
  href: '#spacing-units'
- text: Variables
  href: '#variables'
- text: Migration by component
  href: '#migration-by-component'
- text: 2.0.0 release notes
  href: '#version-200'
- text: Beta 7 release notes
  href: '#version-200-beta-7-release-candidate'
- text: Beta 6 release notes
  href: '#version-200-beta-6'
- text: Beta 5 release notes
  href: '#version-200-beta-5'
- text: Beta 4 release notes
  href: '#version-200-beta-4'
- text: Beta 3 release notes
  href: '#version-200-beta-3'
- text: Beta 2 release notes
  href: '#version-200-beta-2'
- text: Beta 1 release notes
  href: '#version-200-beta'
- text: Alpha release notes
  href: '#version-200-alpha'
---
{:.site-text-intro}
USWDS 2 is a major rewrite of the entire codebase and migration can be complicated. We’ve outlined the high-level changes any project will need to implement, followed by more specific component changes and complete release notes from each related release.

{: .site-note }
**Note:** If you're migrating, expect that every USWDS component on your site will change, and that [USWDS v1](https://v1.designsystem.digital.gov/) functions, mixins, and variables will not work as expected. We will expand and improve this page as we learn from teams that are migrating their own projects. Leave feedback and make suggestions at this site’s [GitHub page [github.com]](https://github.com/uswds/uswds-site).

## Summary
Every component has changed in some way or another from [USWDS v1](https://v1.designsystem.digital.gov/components/) to USWDS v2. There are also some important conceptual differences in v2 — most notably, the introduction of [design tokens]({{ site.baseurl }}/design-tokens/) which, in most cases, are used somewhat differently from [v1](https://v1.designsystem.digital.gov/documentation/developers#sass) variables. Design tokens are at the core of the USWDS 2 design language and we expect that sites will transition toward using these tokens exclusively for their projects, though this may be an incremental process.

- Now USWDS CSS almost always applies to classes not directly to HTML elements.
- We've moved toward a flatter, more modular coding style.
- We changed our overall naming system to BEM.
- The values we apply to rules are drawn from a fixed palette of value keys called design tokens. We use functions and mixins to apply these tokens to our Sass rules.
- A suite of settings files that use design tokens replace a single `variables`.

## Integrating tokens
You can think of a design token as a **key** that unlocks a specific **value**. They are distinct from variables in that they are usually strings or unitless numbers (like `'sm'` or `2`) instead of something like `$variable`. Unlike variables, system tokens are constants and not meant to be modified. They aren't included directly in component Sass like `color: $primary`, rather the mechanism by which the final display value is unlocked is a function, mixin, or utility class, like `color: color('primary')`.

The [design tokens]({{ site.baseurl }}/design-tokens/) section of the documentation describes how we use design tokens in depth, but here's a simple example:

{:.font-lang-sm}
### In settings files
Settings variables are assigned design tokens.

```sass
$theme-site-max-width:              'desktop';
$theme-site-margins-breakpoint:     'desktop';
$theme-site-margins-width:          4;
$theme-site-margins-mobile-width:   2;
```

{:.font-lang-sm}
### In component Sass
We use tokens (or tokens expressed as variables) in mixins and functions.

```sass
.usa-example {
  @include u-padding-x($theme-site-margins-mobile-width);
  max-width: units($theme-site-max-width);

  @include at-media($theme-site-margins-breakpoint) {
    @include u-padding-x($theme-site-margins-width);
  }
}

or

.usa-example {
  @include u-padding-x(2);
  max-width: units('desktop');

  @include at-media('desktop') {
    @include u-padding-x(4);
  }
}
```
## BEM
To change your components from [USWDS v1](https://v1.designsystem.digital.gov/) to USWDS v2, you’ll need to update your classes to the BEM naming convention. We’ll walk through how to do that by looking at the alert component.
- `usa-alert` is the **block**, the outermost parent element of the component. No need to change anything from [v1](https://v1.designsystem.digital.gov) to v2.
- The "informative status” or “info" alert is a variation of the alert component. In BEM, this is called the **modifier** and is separated by two dashes (`usa-alert--info`).
- There are several items nested inside the alert component: a body, heading, and text. These are called the **elements** and are separated by two underscores (`usa-alert__body`, `usa-alert__heading`, `usa-alert__text`)

This is what the HTML markup looks like going from [v1](https://v1.designsystem.digital.gov) to v2:

{:.font-lang-sm}
### USWDS v1
```html
<div class="usa-alert usa-alert-info" >
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Information Status</h3>
    <p class="usa-alert-text">An alert message.</p>
  </div>
</div>
```

{:.font-lang-sm}
### USWDS v2
```html
<div class="usa-alert usa-alert--info" >
  <div class="usa-alert__body">
    <h3 class="usa-alert__heading">Informative status</h3>
    <p class="usa-alert__text">An alert message.</p>
  </div>
</div>
```

## Mixins and functions
{% include migration-table-mixins.html class='mixins' %}

## Spacing units
Spacing units in USWDS 2 are based on multiples of `8px` with a handful of half sizes (`0.5`, `1.5`, and `2.5`), plus `1px` and `2px`. You'll need to update your project spacing when you migrate from [v1](https://v1.designsystem.digital.gov) to v2 to use these new [units]({{ site.baseurl }}/design-tokens/spacing-units){:.token} tokens.

Negative values should use the same migration pattern as positive values. See the [units]({{ site.baseurl }}/design-tokens/spacing-units){:.token} section for their naming convention and how to use negative tokens in functions, mixins, settings, and utilities.

{: .site-note }
**Rule of thumb:** We recommend rounding up to the larger spacing token when you have an existing value that falls between tokens. Only round down if the existing value is within `2px` of the token _and_ less than half of the distance between the bigger token and the smaller token. For instance `14px` would round up to `2 units` since `14px` is halfway between `1.5 units` (`12px`) and `2 units` (`16px`).


{% include migration-units.html %}

## Variables
[USWDS v1](https://v1.designsystem.digital.gov) variables have been replaced with new variables called [settings]({{ site.baseurl }}/documentation/settings). Theme settings variables control the appearance of USWDS components and the values of USWDS theme tokens.

{% include migration-variables.html %}

## Migration by component

{: .site-note }
**Note:** While this page should serve as a reference for the kind of class name changes in USWDS v2, most components have additional markup changes. When in doubt, replace your existing [v1](https://v1.designsystem.digital.gov) component with the updated v2 markup and don't count on find-and-replaces to work effectively.

### Layout grid
- Deprecated the float-based grid system (and Bourbon Neat) in favor of a flexbox grid system
- Grid no longer makes assumptions about responsive behavior. Breakpoints are specified manually.
- Grid column classes must be enclosed by a `grid-row`.
- See the [layout grid documentation]({{ site.baseurl }}/utilities/layout-grid/) for more details.
{% include migration-table.html class='layout-grid' %}

### Typography
{% include migration-table.html class='typography' %}

### Button
{% include migration-table.html class='button' %}

### Embed
{% include migration-table.html class='embed' %}

### Figure
{% include migration-table.html class='figure' %}

### Inputs
{% include migration-table.html class='inputs' %}

### List
{% include migration-table.html class='list' %}

### Table
{% include migration-table.html class='figure' %}

### Tag
- Formerly called “labels”
{% include migration-table.html class='tag' %}

### Accordion
{% include migration-table.html class='accordion' %}

### Alert
{% include migration-table.html class='alert' %}

### Banner
{% include migration-table.html class='banner' %}

### Checklist
{% include migration-table.html class='checklist' %}

### Footer
{% include migration-table.html class='footer' %}

### Form controls
{% include migration-table.html class='form' %}

### Graphic list
{% include migration-table.html class='graphic-list' %}

### Header
{% include migration-table.html class='header' %}

### Hero
{% include migration-table.html class='hero' %}

### Layout
{% include migration-table.html class='layout' %}

### Media block
{% include migration-table.html class='media-block' %}

### Navigation
{% include migration-table.html class='navigation' %}

### Search
{% include migration-table.html class='search' %}

### Section
{% include migration-table.html class='section' %}

### Sidenav
{% include migration-table.html class='sidenav' %}

### Skipnav
{% include migration-table.html class='skipnav' %}

{% for release in site.data.releases %}
{% if release.target_commitish == "release-2.0" or release.name == "2.0.0-beta" or release.name == "2.0.0" %}

## Version {{ release.name }}

<p class="site-subheading">{{ release.published_at | date: "%B %d, %Y" }}</p>

{% assign id_replace = 'id="v%-' | replace: '%', release.name %}
{{ release.body | markdownify | replace: 'id="', id_replace | remove_relative_links }}

<hr>
{% endif %}
{% endfor %}
