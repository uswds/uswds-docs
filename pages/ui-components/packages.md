---
permalink: /components/packages/
layout: styleguide
title: Packages
category: Components
lead: USWDS component packages allow you to import only the component your project needs.
type: docs
subnav:
  - text: Introducing packages
    href: '#introducing-packages'
  - text: Required and global package dependencies
    href: '#required-and-global-package-dependencies'
  - text: Using packages
    href: '#using-packages'
  - text: Reducing footprint with packages
    href: '#reducing-footprint-with-packages'
---

## Introducing packages
Not every USWDS project needs to use the entire design system. We support incremental adoption, in part by allowing any USWDS project to import only the components they need.

To do this, we're expanding the idea of **packages** that already existed in USWDS 2.0. The USWDS 2.0 version of packages allowed users to include only parts of the USWDS codebase by using `@import`ing specific files within `stylesheets/packages`. (See [the theme stylesheet [github.com]](https://github.com/uswds/uswds/blob/develop/src/stylesheets/theme/styles.scss) for an example of this.) The initial version of packages allowed importing only the fonts, the components, the utilities, or the layout grid. **Packages (starting in USWDS 2.1) are much more granular and modular.**

Now we consider a **package** to be a discrete unit of functionality — typically a component (like [search]({{ site.baseurl }}/components/search)). These packages are kept in `stylesheets/packages` and they point to each functional unit's dependencies and source code. For example, the `usa-search` package looks like this:

```sass
// dependencies
@import '../base/accessibility';
@import '../elements/form-controls/global';
@import '../elements/form-controls/text-input';
@import 'usa-button';

// src
@import '../components/search';
```

If developers want to use the `usa-search` component, `@import`ing `packages/usa-search` into their stylesheet will import all the styles necessary to make the component work.

## Required and global package dependencies
USWDS packages attempt to improve the performance of all this importing by requiring users `@import` certain non–code emitting internal Sass required of every component once. (This is Sass like mixins, settings, and functions.) These are collected in the `required` package.

`packages/required`:
```sass
@import '../settings/settings-general';
@import '../settings/settings-typography';
@import '../settings/settings-color';
@import '../settings/settings-spacing';
@import '../settings/settings-utilities';
@import '../settings/settings-components';
@import '../core/functions';
@import '../core/system-tokens';
@import '../core/variables';
@import '../core/properties';
@import '../core/mixins/all';
@import '../core/placeholders/all';
```

There's also a set of basic code-emitting global styles necessary for the best performance of components. These are collected in the `global` package.

`packages/global`:
```sass
@import '../lib/normalize';
@import '../global/font-face';
@import '../global/focus';
@import '../global/sizing';
@import '../global/typography';
```

## Using packages
Use packages as you would any USWDS `import`: import `required`, `global` and any individual functional packages after importing your project's theme settings, and before importing your project's custom styles. For example (assuming `'./node_modules/uswds/dist/scss'` in your `sass.includePaths`) the following file would import only the USWDS code necessary to render the banner and footer components:

```sass
// styles.scss
// import your project theme settings
@import 'uswds-theme-general';
@import 'uswds-theme-typography';
@import 'uswds-theme-spacing';
@import 'uswds-theme-color';
@import 'uswds-theme-utilities';

// then any packages
@import 'packages/required';
@import 'packages/global';
@import 'packages/usa-banner';
@import 'packages/usa-footer';

// then any custom Sass
@import 'my-custom-sass';
```

The current method of using `@import uswds` to import everything has not changed.

## Reducing footprint with packages
Using packages to subset your CSS can result in a dramatic reduction of your overall USWDS footprint. Using packages can also reduce the build time of your project.

| package | .css | .min | .zip
| --- | --- | --- | ---
**default USWDS** | **359** | **271** | **40 KB**
form-controls | 18 | 15 |  3
form-templates | 60 | 47 | 6
typography | 17 | 15 | 3
validation | 32 | 28 | 5
usa-accordion | 13 | 12 | 2
usa-alert | 13 | 12 | 2
usa-banner | 50 | 38 | 5
usa-breadcrumb | 62 | 12 | 3
usa-button | 19 | 16 | 3
usa-card | 76 | 23 | 4
usa-checklist | 11 | 9 | 2
usa-footer | 59 | 46 | 6
usa-header | 113 | 63 | 9
usa-hero | 48 | 37 | 5
usa-media-block | 10 | 9 | 2
usa-search | 29 | 25 | 4
usa-sidenav | 12 | 10 | 2
usa-skipnav | 10 | 9 | 2
usa-table | 11 |  9 | 2
usa-tag | 10 | 9 | 2
usa-header + usa-footer | 162 | 72 | 10
usa-banner + usa-footer | 99 | 55 | 7
