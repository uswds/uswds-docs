---
permalink: /utilities/layout-grid/
layout: styleguide
type: utility
title: Layout grid
category: Utilities
type: docs
lead: Use our flexible grid system to structure website content. The grid is mobile-first, powered by flexbox, and based on a twelve-column system.
redirect_from:
  - /components/grids/
  - /grids/
subnav:
- text: How it works
  href: '#how-it-works'
- text: Responsive variants
  href: '#responsive-variants'
- text: Auto layout columns
  href: '#auto-layout-columns'
- text: Responsive classes
  href: '#responsive-classes'
- text: Offsetting columns
  href: '#offsetting-columns'
- text: Column wrapping
  href: '#column-wrapping'
- text: Gutters
  href: '#gutters'
- text: Sass mixins
  href: '#sass-mixins'
---

<h2 id="how-it-works">How it works</h2>

<p>The grid system uses a series of containers, rows, and columns to lay out and align content. Below is an example and an in-depth look at how the grid comes together.</p>
<div class="docs-grid-example">
{% capture grid-1 %}
<div class="grid-container">
  <div class="grid-row">
    <div class="tablet:grid-col">tablet:grid-col</div>
    <div class="tablet:grid-col">tablet:grid-col</div>
    <div class="tablet:grid-col">tablet:grid-col</div>
  </div>
</div>
{% endcapture %}
{{ grid-1 }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button class="usa-accordion__button" aria-controls="code-sticky" aria-expanded="true">Code</button>
  <div id="code-sticky" class="usa-accordion__content">
<div markdown="1">
{% highlight html linenos %}
{{ grid-1 | strip }}
{% endhighlight %}
</div>
  </div>
</div>

The above example creates three equal-width columns on tablet, desktop, and widescreen devices using our predefined grid classes. Those columns are centered in the page with the parent `grid-container` container.

Breaking it down, here's how it works:

### Containers, rows, and columns

{:.usa-content-list}
- **Containers:** `grid-container` centers the container and gives it a maximum width of `desktop` (1024px). If you would like the grid to span the full width of the page, do not use `grid-container`.
  - `grid-container` can also accept any breakpoint width like `grid-container-tablet-lg` or `grid-container-widescreen`. Set the default max width with `$theme-site-max-width` in `uswds-theme-spacing.scss`.
  - By default, `grid-container`s have padding-x of [2 units]({{ site.baseurl }}/design-tokens/spacing-units/){:.token}, with a padding-x of [4 units]({{ site.baseurl }}/design-tokens/spacing-units/){:.token} at `desktop` and wider. Control these values with the values of `$theme-site-margins-mobile-width`, `$theme-site-margins-width` and `$theme-site-margins-beakpoint` in `uswds-theme-spacing.scss`.
- **Rows:** Columns must have a `grid-row` as a parent.
- **Columns:** `grid-col-[1-12]` indicates the number of columns the item spans out of a possible 12 per row. So, if you want three equal-width columns across, use `grid-col-4` for each item.

### Additional functionality

{:.usa-content-list}
- **Equal-width columns:** With flexbox, grid columns without a specified width will display as equal-width columns. For example, four instances of `grid-col` will display as one-quarter-width columns across all sizes. See the [auto-layout columns](#auto-layout-columns) section for more examples.
- **Gutters:** Rows and columns don't have any gutters by default, but they can be added by adding `grid-gap-sm`, `grid-gap`, or `grid-gap-lg` at the row level. See [gutters](#gutters) for more info.
- **Media queries:** Grid breakpoints are based on minimum width media queries, meaning they apply to that specific width and all greater widths (e.g., `tablet:col-4` applies to tablet, desktop, and widescreen devices, but not at `mobile-lg` or any width below the tablet breakpoint). See [responsive variants](#responsive-variants) for full list.
- **Sass mixins:** You can use predefined grid classes (like `grid-col-4`) for presentational markup or [Sass mixins](#sass-mixins) for more semantic markup.


<h2 id="responsive-variants">Responsive variants</h2>

<div>
  <table class="usa-table--borderless site-table-responsive site-table-simple">
    <caption>Default responsive sizes</caption>
    <thead>
      <tr>
        <th scope="col" class="flex-2">Width</th>
        <th scope="col">Size</th>
        <th scope="col" class="flex-3">Utility class</th>
        <th scope="col">Columns</th>
        <th scope="col">Gutters</th>
        <th scope="col">Nestable</th>
      </tr>
    </thead>
    <tbody class="font-mono-2xs">
      <tr>
        <td scope="row" data-title="Width" class="flex-2">
          <span class="font-lang-2xs text-bold">
            Smallest
          </span>
        </td>
        <td data-title="Size">
          <span>
            ≥0
          </span>
        </td>
        <td data-title="Utility class" class="flex-3">
          <span>
            .grid-col
          </span>
        </td>
        <td data-title="Columns">
          <span>
            12
          </span>
        </td>
        <td data-title="Gutters">
          <span>
            0
          </span>
        </td>
        <td data-title="Nestable">
          <span>
            Yes
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Width" class="flex-2">
          <span class="font-lang-2xs text-bold">
            Mobile large
          </span>
        </td>
        <td data-title="Size">
          <span>
            ≥480px
          </span>
        </td>
        <td data-title="Utility class" class="flex-3">
          <span>
            <span class="text-secondary">.mobile-lg:</span>grid-col
          </span>
        </td>
        <td data-title="Columns">
          <span>
            12
          </span>
        </td>
        <td data-title="Gutters">
          <span>
            0
          </span>
        </td>
        <td data-title="Nestable">
          <span>
            Yes
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Width" class="flex-2">
          <span class="font-lang-2xs text-bold">
            Tablet
          </span>
        </td>
        <td data-title="Size">
          <span>
            ≥640px
          </span>
        </td>
        <td data-title="Utility class" class="flex-3">
          <span>
            <span class="text-secondary">.tablet:</span>grid-col
          </span>
        </td>
        <td data-title="Columns">
          <span>
            12
          </span>
        </td>
        <td data-title="Gutters">
          <span>
            0
          </span>
        </td>
        <td data-title="Nestable">
          <span>
            Yes
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Width" class="flex-2">
          <span class="font-lang-2xs text-bold">
            Desktop
          </span>
        </td>
        <td data-title="Size">
          <span>
            ≥1024px
          </span>
        </td>
        <td data-title="Utility class" class="flex-3">
          <span>
            <span class="text-secondary">.desktop:</span>grid-col
          </span>
        </td>
        <td data-title="Columns">
          <span>
            12
          </span>
        </td>
        <td data-title="Gutters">
          <span>
            0
          </span>
        </td>
        <td data-title="Nestable">
          <span>
            Yes
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="auto-layout-columns">Auto layout columns</h2>
<h3>Variable width content</h3>
<p><code>.grid-col-auto</code> items fit the natural width of their content.</p>
<p><code>.grid-col</code> and <code>.grid-col-fill</code> items flex to fill the available space.</p>


<div class="docs-grid-example">
{% capture grid-auto %}
<div class="grid-container">
  <div class="grid-row">
    <div class="grid-col-auto">.grid-col-auto</div>
    <div class="grid-col-fill">.grid-col</div>
    <div class="grid-col-fill">.grid-col</div>
    <div class="grid-col-auto">.grid-col-auto</div>
  </div>
</div>
{% endcapture %}
{{ grid-auto }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button class="usa-accordion__button" aria-controls="code-auto" aria-expanded="true">Code</button>
  <div id="code-auto" class="usa-accordion__content">
<div markdown="1">
{% highlight html linenos %}
{{ grid-auto | strip }}
{% endhighlight %}
</div>
  </div>
</div>

<h2 id="responsive-classes">Responsive classes</h2>
<h3>Same at all breakpoints</h3>
<p>For columns that should maintain the same proportion at any viewport width, use the <code>.grid-col</code> and <code>.grid-col-*</code> classes. Specify a numbered class when you need a column of a specific width; otherwise, use <code>.grid-col</code>.</p>
<p><code>.grid-col-[1-12]</code> set a fixed width of [n] grid-columns in a 12-column grid.</p>

{% capture grid-markers %}
<div class="grid-row margin-top-3 font-sans-1 border-left border-secondary-light">
  {% for i in (1..12) %}
  <div class="grid-col-1 border-right border-secondary-light">
    <div class="text-center padding-x-05">{{ i }}</div>
  </div>
  {% endfor %}
</div>
{% endcapture %}
{{ grid-markers }}

<div class="docs-grid-example">
{% capture grid-responsive %}
<div class="grid-row">
  <div class="grid-col-1">.grid-col-1</div>
  <div class="grid-col-2">.grid-col-2</div>
  <div class="grid-col-3">.grid-col-3</div>
  <div class="grid-col-4">.grid-col-4</div>
  <div class="grid-col-2">.grid-col-2</div>
</div>

<div class="grid-row">
  <div class="grid-col-8">.grid-col-8</div>
  <div class="grid-col-2">.grid-col-2</div>
  <div class="grid-col-2">.grid-col-2</div>
</div>
{% endcapture %}
{{ grid-responsive }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button class="usa-accordion__button" aria-controls="code-responsive" aria-expanded="true">Code</button>
  <div id="code-responsive" class="usa-accordion__content">
<div markdown="1">
{% highlight html linenos %}
{{ grid-responsive | strip }}
{% endhighlight %}
</div>
  </div>
</div>

<h3>Stacked columns at narrow widths</h3>
<p>Columns are full-width until the narrowest breakpoint specified in a <code>.grid-col</code> class. For instance, using a single set of <code>tablet:grid-col-*</code> classes, you can create a basic grid system that starts out stacked before displaying as columns at the tablet breakpoint (<code>tablet:</code>).</p>

<div class="docs-grid-example">
{% capture grid-stacked %}
<div class="grid-row">
  <div class="tablet:grid-col">.tablet:grid-col</div>
  <div class="tablet:grid-col">.tablet:grid-col</div>
  <div class="tablet:grid-col">.tablet:grid-col</div>
</div>

<div class="grid-row">
  <div class="tablet:grid-col-4">.tablet:grid-col-4</div>
  <div class="tablet:grid-col-8">.tablet:grid-col-8</div>
</div>
{% endcapture %}
{{ grid-stacked }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button class="usa-accordion__button" aria-controls="code-stacked" aria-expanded="true">Code</button>
  <div id="code-stacked" class="usa-accordion__content">
<div markdown="1">
{% highlight html linenos %}
{{ grid-stacked | strip }}
{% endhighlight %}
</div>
  </div>
</div>

<h3>Mix and match</h3>
<p>Don’t want your columns to simply stack in some breakpoints? Use a combination of different classes for each breakpoints as needed. See the example below for a better idea of how it all works.</p>
<div class="docs-grid-example">
{% capture grid-mix %}
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="grid-row">
  <div class="tablet:grid-col-8">.tablet:grid-col-8</div>
  <div class="grid-col-6 tablet:grid-col-4">.col-6 .tablet:grid-col-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="grid-row">
  <div class="grid-col-6 tablet:grid-col-4">.col-6 .tablet:grid-col-4</div>
  <div class="grid-col-6 tablet:grid-col-4">.col-6 .tablet:grid-col-4</div>
  <div class="grid-col-6 tablet:grid-col-4">.col-6 .tablet:grid-col-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="grid-row">
  <div class="grid-col-6">.col-6</div>
  <div class="grid-col-6">.col-6</div>
</div>
{% endcapture %}
{{ grid-mix }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button class="usa-accordion__button" aria-controls="code-mix" aria-expanded="true">Code</button>
  <div id="code-mix" class="usa-accordion__content">
<div markdown="1">
{% highlight html linenos %}
{{ grid-mix | strip }}
{% endhighlight %}
</div>
  </div>
</div>

<h2 id="offsetting-columns">Offsetting columns</h2>
<p><code>.grid-offset-[1-12]</code> offsets the item by the specified number of grid columns.</p>
{{ grid-markers }}

<div class="docs-grid-example">
{% capture grid-offsets %}
<div class="grid-row">
  <div class="grid-col-8 grid-offset-4">.grid-col-8.grid-offset-4</div>
</div>
{% endcapture %}
{{ grid-offsets }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button class="usa-accordion__button" aria-controls="code-offsets" aria-expanded="true">Code</button>
  <div id="code-offsets" class="usa-accordion__content">
<div markdown="1">
{% highlight html linenos %}
{{ grid-offsets | strip }}
{% endhighlight %}
</div>
  </div>
</div>

<h2 id="column-wrapping">Column wrapping</h2>
<p>Items wrap when the sum of the grid columns is more than 12.</p>
{{ grid-markers }}

<div class="docs-grid-example">
{% capture grid-wrapping %}
<div class="grid-row">
  <div class="grid-col-8">.grid-col-8</div>
  <div class="grid-col-3">.grid-col-3</div>
  <div class="grid-col-5">.grid-col-5</div>
</div>
{% endcapture %}
{{ grid-wrapping }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button class="usa-accordion__button" aria-controls="code-wrapping" aria-expanded="true">Code</button>
  <div id="code-wrapping" class="usa-accordion__content">
<div markdown="1">
{% highlight html linenos %}
{{ grid-wrapping | strip }}
{% endhighlight %}
</div>
  </div>
</div>

<h2 id="gutters">Gutters</h2>

### Default gutter
Add `grid-gap` to a grid row to add a gap (or gutter) between each column in the row. The default gap width is 2 units and 4 units at `desktop` and higher. Customize the width of the gap by adjusting the value of `$theme-column-gap` in project settings.

{{ grid-markers }}
<div class="docs-grid-example margin-top-2">
{% capture grid-gutters %}
<div class="grid-row grid-gap">
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
</div>
{% endcapture %}
{{ grid-gutters }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button class="usa-accordion__button" aria-controls="code-gutters" aria-expanded="true">Code</button>
  <div id="code-gutters" class="usa-accordion__content">

{% highlight html linenos %}
{{ grid-gutters | strip }}
{% endhighlight %}

  </div>
</div>

<h3>Large gutter</h3>
<p><code>grid-gap-lg</code> adds a larger gap (or gutter) between each column in a row. The default large gap width is 32px (4 spacing units). Customize the width of the large gap by adjusting the value of <code>$theme-column-gap-lg</code> in project settings. There is also a <code>.grid-gap-sm</code> (2px) set with <code>$theme-column-gap-sm</code>. Also, you can add the following system values with <code>grid-gap</code>:</p>
<div markdown="1">
- `grid-gap-2px`
- `grid-gap-05`
- `grid-gap-1`
- `grid-gap-2`
- `grid-gap-3`
- `grid-gap-4`
- `grid-gap-5`
- `grid-gap-6`
</div>
{{ grid-markers }}


<div class="docs-grid-example">
{% capture grid-gutters-lg %}
<div class="grid-row grid-gap-lg">
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
  <div class="grid-col-4">
    <div>.grid-col-4</div>
  </div>
</div>
{% endcapture %}
{{ grid-gutters-lg }}
</div>

<div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4">
  <button class="usa-accordion__button" aria-controls="code-gutters-lg" aria-expanded="true">Code</button>
  <div id="code-gutters-lg" class="usa-accordion__content">

{% highlight html linenos %}
{{ grid-gutters-lg | strip }}
{% endhighlight %}

  </div>
</div>

<h2 id="sass-mixins">Sass mixins</h2>
When generating your CSS from USWDS source files, you have the option of customizing many system defaults by modifying project theme variables. USWDS also provides grid mixins for adding grid functionality to custom semantic component CSS.

### Variables
Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.

#### uswds-theme-spacing.scss

{% highlight scss %}
// Values are set as units tokens.

$theme-column-gap-sm:               2px;
$theme-column-gap-md:               2;
$theme-column-gap-lg:               3;
$theme-column-gap-mobile:           2;
$theme-column-gap-desktop:          4;
$theme-grid-container-max-width:    'desktop';
$theme-site-max-width:              'desktop';
$theme-site-margins-breakpoint:     'desktop';
$theme-site-margins-width:          4;
$theme-site-margins-mobile-width:   2;
{% endhighlight %}

#### uswds-theme-utilities.scss

{% highlight scss %}
// Turn on or off breakpoints
$theme-utility-breakpoints: (
  'card':              false,   // 160px
  'card-lg':           false,   // 240px
  'mobile':            false,   // 320px
  'mobile-lg':         true,    // 480px
  'tablet':            true,    // 640px
  'tablet-lg':         false,   // 800px
  'desktop':           true,    // 1040px
  'desktop-lg':        false,   // 1200px
  'widescreen':        false,   // 1400px
);
{% endhighlight %}

### Mixins
Mixins can be used in conjunction with the grid variables to add grid functionality to semantic component Sass.

{% highlight scss %}
// Creates a wrapper for a series of rows
// $container-size can be mobile, mobile-lg, tablet, tablet-lg, desktop, desktop-lg, or widescreen
@include grid-container;
@include grid-container($container-size);

// Creates a wrapper for a series of columns
@include grid-row;

// Specify the width between columns
// $gap-size can be sm, md, lg, 2px, 05, 1, 3, 4, 6
@include grid-gap;
@include grid-gap($gap-size);

// Make the element full-width
@include u-width(full);

// Specify the number of columns the element should span
// $columns can be auto, fill, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
@include grid-col;
@include grid-col($columns);

// Get fancy by offsetting or changing the display order
// $offset can be none, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
@include grid-offset($offset);

// $order can be first, last, initial, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
@include u-order($order);
{% endhighlight %}

### Example usage
You can modify the variables to your own custom values, or just use the mixins with their default values. Here’s an example of using the default settings to create a two-column layout with a gap between.

{% highlight scss %}
.example-container {
  @include grid-container;
}

.example-row {
  @include grid-row;

  // Add column gaps
  &.content-row {
    @include grid-gap;
  }
}

.example-content-main {
  @include u-width(full);

  @include at-media(tablet) {
    @include grid-col(6);
  }

  @include at-media(desktop) {
    @include grid-col(8);
  }
}

.example-content-secondary {
  @include u-width(full);

  @include at-media(tablet) {
    @include grid-col(6);
  }

  @include at-media(desktop) {
    @include grid-col(4);
  }
}
{% endhighlight %}
