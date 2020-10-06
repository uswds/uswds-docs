---
permalink: /utilities/flex/
layout: styleguide
type: utility
title: Flex
category: Utilities
lead: Set an item’s flexbox properties.
subnav:
- text: Flex
  href: '#utility-flex'
- text: Flex direction
  href: '#utility-flex-direction'
- text: Flex wrap
  href: '#utility-flex-wrap'
- text: Flex align
  href: '#utility-flex-align'
- text: Flex align self
  href: '#utility-flex-align-self'
- text: Flex justify
  href: '#utility-flex-justify'
- text: Order
  href: '#utility-order'
- text: Utility mixins
  href: '#utility-mixins'
- text: Advanced settings
  href: '#advanced-settings'

values:
  flex:
  - token: 1
    value: '1 0 0'
  - token: 2
    value: '2 0 0'
  - token: 3
    value: '3 0 0'
  - token: 4
    value: '4 0 0'
  - token: 5
    value: '5 0 0'
  - token: 6
    value: '6 0 0'
  - token: 7
    value: '7 0 0'
  - token: 8
    value: '8 0 0'
  - token: 9
    value: '9 0 0'
  - token: 10
    value: '10 0 0'
  - token: 11
    value: '11 0 0'
  - token: 12
    value: '12 0 0'
  - token: auto
    value: auto
  - token: fill
    value: '1 0 0'

  flex_direction:
  - token: column
    value: 'column'
  - token: row
    value: 'row'

  flex_wrap:
  - token: wrap
    value: 'wrap'
  - token: no-wrap
    value: 'nowrap'

  flex_align:
  - token: start
    value: 'flex-start'
  - token: center
    value: 'center'
  - token: end
    value: 'flex-end'
  - token: stretch
    value: 'stretch'

  flex_align_self:
  - token: start
    value: 'flex-start'
  - token: center
    value: 'center'
  - token: end
    value: 'flex-end'
  - token: stretch
    value: 'stretch'

  flex_justify:
  - token: justify
    value: 'space-between'
  - token: justify-start
    value: 'flex-start'
  - token: justify-center
    value: 'center'
  - token: justify-end
    value: 'flex-end'

  order:
  - token: first
    value: '-1'
  - token: last
    value: '999'
  - token: initial
    value: 'initial'
  - token: 0
    value: '0'
  - token: 1
    value: '1'
  - token: 2
    value: '2'
  - token: 3
    value: '3'
  - token: 4
    value: '4'
  - token: 5
    value: '5'
  - token: 6
    value: '6'
  - token: 7
    value: '7'
  - token: 8
    value: '8'
  - token: 9
    value: '9'
  - token: 10
    value: '10'
  - token: 11
    value: '11'

utilities:
- base:         flex
  var:          flex
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         flex
  var:          flex-direction
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         flex
  var:          flex-wrap
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         flex-align
  var:          align-items
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         flex-align-self
  var:          align-self
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         flex-justify
  var:          justify-content
  output:       true
  responsive:   false
  active:       false
  focus:        false
  hover:        false
  visited:      false
- base:         order
  var:          order
  output:       true
  responsive:   true
  active:       false
  focus:        false
  hover:        false
  visited:      false

---

<div class="utilities-properties">
  <h3 class="utilities-property-title">CSS properties</h3>
  <div class="margin-top-1">
    <span class="property utilities-property">align-items</span>
    <span class="property utilities-property">align-self</span>
    <span class="property utilities-property">flex</span>
    <span class="property utilities-property">flex-direction</span>
    <span class="property utilities-property">flex-wrap</span>
    <span class="property utilities-property">justify-content</span>
    <span class="property utilities-property">order</span>
  </div>
</div>

<section class="utilities-section">
{% include utilities/utilities-section-title-bar.html %}

  <section class="utility" id="utility-flex">
    {% include utilities/utility-title-bar.html
      title="Flex"
    %}
    <section class="utility-examples">

    {% for value in page.values.flex %}
      <div class="grid-row grid-gap-sm margin-bottom-1">
        <div class="grid-col flex-{{ value.token }}">
          <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center padding-x-105">
            <span class="utility-class text-no-wrap">.flex-{{ value.token }}</span>
          </div>
        </div>
        <div class="grid-col flex-1">
          <div class="height-6 width-full display-flex flex-align-center border border-base-dark flex-justify-center">
            {% if forloop.first %}<span class="utility-class">.flex-1</span>{% endif %}
          </div>
        </div>
        <div class="grid-col flex-1">
          <div class="height-6 width-full display-flex flex-align-center border border-base-dark flex-justify-center">
            {% if forloop.first %}<span class="utility-class">.flex-1</span>{% endif %}
          </div>
        </div>
        <div class="grid-col flex-1">
          <div class="height-6 width-full display-flex flex-align-center border border-base-dark flex-justify-center">
            {% if forloop.first %}<span class="utility-class">.flex-1</span>{% endif %}
          </div>
        </div>
      </div>
      {% endfor %}

      <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4 margin-bottom-1">
        <button class="usa-accordion__button" aria-controls="code-flex" aria-expanded="true">Code</button>
        <div id="code-flex" class="usa-accordion__content">
<div markdown="1" class="font-mono-xs">

{% highlight html linenos %}
<div class="grid-row">
  <div class="grid-col flex-1"></div>
  <div class="grid-col flex-1"></div>
  <div class="grid-col flex-1"></div>
  <div class="grid-col flex-1"></div>
</div>
<div class="grid-row">
  <div class="grid-col flex-2"></div>
  <div class="grid-col flex-1"></div>
  <div class="grid-col flex-1"></div>
  <div class="grid-col flex-1"></div>
</div>
<div class="grid-row">
  <div class="grid-col flex-3"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-4"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-5"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-6"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-7"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-8"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-9"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-10"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-11"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-12"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-auto"></div>
  ...
</div>
<div class="grid-row">
  <div class="grid-col flex-fill"></div>
  ...
</div>
{% endhighlight %}
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utility" id="utility-flex-direction">
    {% include utilities/utility-title-bar.html
      title="Flex direction"
    %}
    <section class="utility-examples">

    {% for value in page.values.flex_direction %}
      <div class="border padding-1 radius-md{% if forloop.first %} margin-bottom-2{% endif %}">
        <span class="utility-class">.flex-{{ value.token }}</span>
        <div class="grid-row flex-{{ value.token }} margin-top-2">
          <div class="grid-col flex-1 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
            </div>
          </div>
          <div class="grid-col flex-1 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
            </div>
          </div>
          <div class="grid-col flex-1 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
            </div>
          </div>
          <div class="grid-col flex-1 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
            </div>
          </div>
        </div>
      </div>
    {% endfor %}

    <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4 margin-bottom-1">
      <button class="usa-accordion__button" aria-controls="code-flex-direction" aria-expanded="true">Code</button>
      <div id="code-flex-direction" class="usa-accordion__content">
<div markdown="1" class="font-mono-xs">
{% highlight html linenos %}
<div class="grid-row flex-column">
  <div class="grid-col"></div>
  <div class="grid-col"></div>
  <div class="grid-col"></div>
  <div class="grid-col"></div>
</div>
<div class="grid-row flex-row">
  <div class="grid-col"></div>
  <div class="grid-col"></div>
  <div class="grid-col"></div>
  <div class="grid-col"></div>
</div>
{% endhighlight %}
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utility" id="utility-flex-wrap">
    {% include utilities/utility-title-bar.html
      title="Flex wrap"
    %}
    <section class="utility-examples">

    {% for value in page.values.flex_wrap %}
      <div class="border padding-1 radius-md{% if forloop.first %} margin-bottom-2{% endif %}">
        <span class="utility-class">.flex-{{ value.token }}</span>
        <div class="grid-row flex-{{ value.token }} margin-top-2">
          <div class="grid-col-4 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              <span class="utility-class">.grid-col-4</span>
            </div>
          </div>
          <div class="grid-col-4 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              <span class="utility-class">.grid-col-4</span>
            </div>
          </div>
          <div class="grid-col-4 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              <span class="utility-class">.grid-col-4</span>
            </div>
          </div>
          <div class="grid-col-4 padding-1px">
            <div class="height-6 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              <span class="utility-class">.grid-col-4</span>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}

    <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4 margin-bottom-1">
      <button class="usa-accordion__button" aria-controls="code-flex-wrap" aria-expanded="true">Code</button>
      <div id="code-flex-wrap" class="usa-accordion__content">
<div markdown="1" class="font-mono-xs">
{% highlight html linenos %}
<div class="grid-row flex-wrap">
  <div class="grid-col-4"></div>
  <div class="grid-col-4"></div>
  <div class="grid-col-4"></div>
  <div class="grid-col-4"></div>
</div>
<div class="grid-row flex-no-wrap">
  <div class="grid-col-4"></div>
  <div class="grid-col-4"></div>
  <div class="grid-col-4"></div>
  <div class="grid-col-4"></div>
</div>
{% endhighlight %}
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utility" id="utility-flex-align">
    {% include utilities/utility-title-bar.html
      title="Flex align"
      var="align-items"
      property="align-items"
    %}
    <section class="utility-examples">

    {% for direction in page.values.flex_direction %}
      <div class="border padding-1 radius-md{% if forloop.first %} margin-bottom-2{% endif %}">
        <div class="padding-bottom-4 border-bottom margin-bottom-2">
          <span class="utility-class">.flex-{{ direction.token }}</span>
        </div>
      {% for align in page.values.flex_align %}
        <span class="utility-class">.flex-align-{{ align.token }}</span>
          <div class="grid-row flex-{{ direction.token }} flex-align-{{ align.token }} margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
            <div class="grid-auto padding-1px">
              <div class="height-full minh-7 minw-7 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              </div>
            </div>
            <div class="grid-auto padding-1px">
              <div class="height-full minh-8 minw-8 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              </div>
            </div>
            <div class="grid-auto padding-1px">
              <div class="height-full minh-9 minw-9 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              </div>
            </div>
            <div class="grid-auto padding-1px">
              <div class="height-full minh-10 minw-10 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
              </div>
            </div>
          </div>
      {% endfor %}
        </div>
    {% endfor %}

    <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4 margin-bottom-1">
      <button class="usa-accordion__button" aria-controls="code-flex-align" aria-expanded="true">Code</button>
      <div id="code-flex-align" class="usa-accordion__content">
<div markdown="1" class="font-mono-xs">
{% highlight html linenos %}
<div class="display-flex flex-column flex-align-start">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-column flex-align-center">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-column flex-align-end">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-column flex-align-stretch">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-row flex-align-start">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-row flex-align-center">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-row flex-align-end">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-row flex-align-stretch">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
{% endhighlight %}
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utility" id="utility-flex-align-self">
    {% include utilities/utility-title-bar.html
      title="Flex align self"
      var="align-self"
      property="align-self"
    %}
    <section class="utility-examples">
    {% for direction in page.values.flex_direction %}
      <div class="border padding-1 radius-md{% if forloop.first %} margin-bottom-2{% endif %}">
        <div class="padding-bottom-4 border-bottom margin-bottom-2">
          <span class="utility-class">.flex-{{ direction.token }}</span>
        </div>
        <div class="grid-row flex-{{ direction.token }} margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2 minh-card margin-x-neg-05 flex-no-wrap">
          {% for align-self in page.values.flex_align_self %}
          <div class="flex-1 padding-1px flex-align-self-{{ align-self.token }} display-flex flex-align-center bg-secondary-light flex-justify-center minh-7 minw-7 padding-1 margin-bottom-1 margin-x-05">
            <span class="utility-class">.flex-align-self-{{ align-self.token }}</span>
          </div>
          {% endfor %}
        </div>
        </div>
    {% endfor %}
    <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4 margin-bottom-1">
      <button class="usa-accordion__button" aria-controls="code-flex-align" aria-expanded="true">Code</button>
      <div id="code-flex-align-self" class="usa-accordion__content">
<div markdown="1" class="font-mono-xs">
{% highlight html linenos %}
<div class="display-flex flex-column">
  <div class="flex-align-self-start"></div>
  <div class="flex-align-self-center"></div>
  <div class="flex-align-self-end"></div>
  <div class="flex-align-self-stretch"></div>
</div>

<div class="display-flex flex-row">
  <div class="flex-align-self-start"></div>
  <div class="flex-align-self-center"></div>
  <div class="flex-align-self-end"></div>
  <div class="flex-align-self-stretch"></div>
</div>

{% endhighlight %}
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utility" id="utility-flex-justify">
    {% include utilities/utility-title-bar.html
      title="Flex justify"
      property="justify-content"
      var="justify-content"
    %}
    <section class="utility-examples">

      <div class="border padding-1 radius-md margin-bottom-2">
        <div class="padding-bottom-4 border-bottom margin-bottom-2">
          <span class="utility-class">.flex-row</span>
        </div>
        {% for justify in page.values.flex_justify %}
          <span class="utility-class">.flex-{{ justify.token }}</span>
            <div class="grid-row flex-{{ direction.token }} flex-{{ justify.token }} margin-top-2 border-bottom border-base-light padding-bottom-2 margin-bottom-2">
              <div class="grid-auto padding-1px">
                <div class="height-full minh-7 minw-7 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
                </div>
              </div>
              <div class="grid-auto padding-1px">
                <div class="height-full minh-8 minw-8 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
                </div>
              </div>
              <div class="grid-auto padding-1px">
                <div class="height-full minh-9 minw-9 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
                </div>
              </div>
              <div class="grid-auto padding-1px">
                <div class="height-full minh-10 minw-10 width-full display-flex flex-align-center bg-secondary-light flex-justify-center">
                </div>
              </div>
            </div>
        {% endfor %}
        </div>

    <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4 margin-bottom-1">
      <button class="usa-accordion__button" aria-controls="code-flex-justify" aria-expanded="true">Code</button>
      <div id="code-flex-justify" class="usa-accordion__content">
<div markdown="1" class="font-mono-xs">
{% highlight html linenos %}
<div class="display-flex flex-column flex-justify">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-column flex-justify-start">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-column flex-justify-center">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-column flex-justify-end">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-row flex-justify">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-row flex-justify-start">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-row flex-justify-center">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>

<div class="display-flex flex-row flex-justify-end">
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
  <div class="example"></div>
</div>
{% endhighlight %}
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

    </section><!-- examples -->
  </section><!-- utility -->

  <section class="utility" id="utility-order">
    {% include utilities/utility-title-bar.html
      title="Order"
    %}
    <section class="utility-examples">

    <div class="grid-row grid-gap-sm">
      {% for value in page.values.order reversed %}
        <div class="grid-col-auto order-{{ value.token }}">
          <div class="padding-x-1 padding-y-1 border border-secondary-light margin-y-1px display-flex flex-column flex-align-start">
            <span class="font-lang-3xs text-red-warm-50v margin-bottom-2">intital: {{ forloop.index }}</span>
            <span class="utility-class">.order-{{ value.token }}</span>
          </div>
        </div>
      {% endfor %}
    </div>

    <div class="usa-accordion usa-accordion--bordered site-accordion-code margin-top-4 margin-bottom-1">
      <button class="usa-accordion__button" aria-controls="code-order" aria-expanded="true">Code</button>
      <div id="code-order" class="usa-accordion__content">
<div markdown="1" class="font-mono-xs">
{% highlight html linenos %}
<div class="grid-row">
  <div class="grid-col order-11"></div>
  <div class="grid-col order-10"></div>
  <div class="grid-col order-9"></div>
  <div class="grid-col order-8"></div>
  <div class="grid-col order-7"></div>
  <div class="grid-col order-6"></div>
  <div class="grid-col order-5"></div>
  <div class="grid-col order-4"></div>
  <div class="grid-col order-3"></div>
  <div class="grid-col order-2"></div>
  <div class="grid-col order-1"></div>
  <div class="grid-col order-0"></div>
  <div class="grid-col order-initial"></div>
  <div class="grid-col order-last"></div>
  <div class="grid-col order-first"></div>
</div>
{% endhighlight %}
</div><!-- markdown -->
        </div><!-- code-content -->
      </div><!-- code-sample -->

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
        <td scope="row" data-title="Utility" class="tablet:maxw-card-lg">
          <span>
            .flex-<a href="{{ site.baseurl }}/design-tokens/flex/" class="token">flex</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-flex(<a href="{{ site.baseurl }}/design-tokens/flex/" class="token">flex</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-flex('fill')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .flex-<code>direction</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-flex(<code>direction</code>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-flex('row')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .flex-<code>wrap</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-flex(<code>wrap</code>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-flex('no-wrap')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .flex-align-<code>value</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-flex('align-<code>value</code>')
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-flex('align-center')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .flex-align-self-<code>value</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-flex('align-self-<code>value</code>')
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-flex('align-self-center')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .flex-justify-<code>value</code>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-flex('justify-<code>value</code>')
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-flex('justify')
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" data-title="Utility" class="tablet:text-no-wrap tablet:maxw-card-lg">
          <span>
            .order-<a href="{{ site.baseurl }}/design-tokens/order/" class="token">order</a>
          </span>
        </td>
        <td data-title="Mixin">
          <span>
            u-order(<a href="{{ site.baseurl }}/design-tokens/order/" class="token">order</a>)
          </span>
        </td>
        <td data-title="Example">
          <span>
            @include u-order('last')
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
    {% include utilities/values-no-palettes.html %}
  </section>
</section>
