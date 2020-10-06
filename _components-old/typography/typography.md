---
permalink: /components/typography/
redirect_from:
- /typography/
layout: styleguide
title: Typography
category: Components
lead: "Government websites need clear and consistent headings, highly legible body paragraphs, clear labels, and easy-to-use input fields. Our default typefaces are designed for legibility and can adapt to a variety of visual tones."
subnav:
- text: Typesetting with USWDS
  href: '#typesetting-with-uswds'
- text: Included typefaces
  href: '#included-typefaces'
- text: Prose
  href: '#prose'
- text: Links
  href: '#links'
- text: Lists
  href: '#lists'
---

<h2 id="typesetting-with-uswds">Typesetting with USWDS</h2>
<p>Typesetting controls the readability of a text with the size, style, and spacing of its type. It’s a function of microtypography (how text is styled within a text block) and macrotypography (how content elements are arranged on the page). The more readable a text the more easily users can understand its content. Text with poor readability turns off readers and can make it challenging for them to stay focused.</p>
<p>In USWDS we control typesetting values with a token system. You can read more about typesetting tokens in the <a href="{{ site.baseurl }}/design-tokens/typesetting/">Typesetting tokens</a> section and in the <a href="{{ site.baseurl }}/utilities/">Utilities</a> section.</p>
<p><a href="https://accessibility.digital.gov/visual-design/typography/"> Accessibility for Teams</a> also provides good guidance around typesetting.</p>

### Font size

{:.usa-content-list}
- **Use a comfortable reading size for body text.** For most text, including body copy, use at least an effective size of 16px ([font-size 5]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token}). Smaller and larger text can be used sparingly for special purposes (like headings, captions, photo credits, footnotes, data tables, or specialized UI).
- **Font size tokens:**
  - Use tokens between [font-size 5]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token} and [font-size 8]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token} for most running text.
  - Tokens smaller than [font-size 5]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token} should be used more sparingly — for shorter companion text like captions, footnotes, photo credits, or specialized UI.

### Text alignment
While right-aligned, centered, and justified text have their place, most websites benefit from a consistent use of left-aligned text. Justified text, common in print, does not yet display well enough in a web browser to be considered a best practice.

{:.usa-content-list}
- **Set type flush left.** Type set flush left provides the eye a constant starting point for each line, making text easier to read.
- **Alignment tokens:** none

### Measure (line length)
Controlling the length of lines of text (also known as _measure_) helps readers’ attention flow easily from one line to the next, making reading more natural and comfortable.

{:.usa-content-list}
- **Most lines of text should be 45-90 characters.** Somewhere between 45 ([measure 1]({{ site.baseurl }}/design-tokens/typesetting/measure/){:.token}) and 90 characters per line ([measure 5]({{ site.baseurl }}/design-tokens/typesetting/measure/){:.token}) is broadly considered to be a readable line length, with 66 characters ([measure 2]({{ site.baseurl }}/design-tokens/typesetting/measure/){:.token}) considered a comfortable target for long texts.
- **Text with greater line height can have a longer measure.** Since of the functions of measure is to help readers move from one line of text to another more naturally, the effects of a long measure can be lessened by increasing the space between lines. Thus, text with more space between lines can have somewhat longer line length.
- **Short passages can have measure outside the ideal range.** Contexts in which users will not be reading long passages of text (such as footnotes or alerts) can safely be set with somewhat longer or shorter lines than usual.
- **Large text can have a shorter measure.** Since larger text takes up more screen real estate, it can make sense to assign it a relatively small measure.
- **Measure tokens:**
  - Use tokens between [measure 2]({{ site.baseurl }}/design-tokens/typesetting/measure/){:.token} and [measure 5]({{ site.baseurl }}/design-tokens/typesetting/measure/){:.token} for most long running text
  - The [measure 6]({{ site.baseurl }}/design-tokens/typesetting/measure/){:.token} token can be appropriate for shorter blocks of text, like captions of fewer than three lines — or for text that isn't meant for longform reading
  - The [measure 1]({{ site.baseurl }}/design-tokens/typesetting/measure/){:.token} token can be appropriate for helper text (no longer than a paragraph or two) or for larger text (like a subheading or intro text).

### Line height
Line height controls the vertical rhythm and density of a block of text. It is written as a unitless multiplier of the text’s font size — for instance, a line height of 1.5 on 16px text results in a line height of 24px.

{:.usa-content-list}
- **Longer texts require more line height.** Headings and other content elements no longer than a line or two can have a line height between 1 ([line-height 1]({{ site.baseurl }}/design-tokens/typesetting/line-height/){:.token}) and 1.35 ([line-height 3]({{ site.baseurl }}/design-tokens/typesetting/line-height/){:.token}). Longer texts should have a line height of at least 1.5 ([line-height 4]({{ site.baseurl }}/design-tokens/typesetting/line-height/){:.token}).
- **Longer lines usually require more line height.** It can be difficult to distinguish between lines of text when the eye has to travel from the end of one long line to the beginning of the next. Using more line height makes it easier to distinguish individual lines. Though, somewhat counterintuitively, very long lines of text can benefit from slightly less line height than usual, as too much line height can make each individual line appear too prominent.
- **Readable text has a medium density.** Strive for text that appears neither very dense or very loose. The reader typically shouldn’t notice the space between lines of text.
- **Line height tokens:**
  - [line-height 1]({{ site.baseurl }}/design-tokens/typesetting/line-height/){:.token}: most buttons and other short UI elements. (This improves vertical alignment.)
  - [line-height 2]({{ site.baseurl }}/design-tokens/typesetting/line-height/){:.token}: most headings and introductory text no longer than 1-2 sentences.
  - [line-height 3]({{ site.baseurl }}/design-tokens/typesetting/line-height/){:.token}: short text (under a paragraph), captions, and very long lines.
  - [line-height 4]({{ site.baseurl }}/design-tokens/typesetting/line-height/){:.token}: when your chunks of running text are a paragraph or two long, especially when using a short measure (like [measure 1]({{ site.baseurl }}/design-tokens/typesetting/measure/){:.token}  or [measure 2]({{ site.baseurl }}/design-tokens/typesetting/measure/){:.token}
  - [line-height 5]({{ site.baseurl }}/design-tokens/typesetting/line-height/){:.token}: most reading text, especially text meant for extended reading.
  - [line-height 6]({{ site.baseurl }}/design-tokens/typesetting/line-height/){:.token}: shorter text (around 1-2 paragraphs) meant to be distinguished from other page text, like pullquotes.

### Whitespace
The space around your content elements affects the relationship between these elements. Use less whitespace to group elements and more whitespace to distinguish them from each other.

{:.usa-content-list}
- **Don't indent paragraphs, use whitespace before.** While most longform print design uses indented lines to distinguish paragraphs, it's more conventional on the web to use unindented paragraphs separated by whitespace.
- **Use at least 1em of whitespace between paragraphs.** To properly separate paragraphs from one other, use the equivalent of one blank line of whitespace between them. Using more than 1.5em disturbs the flow of the text and using less than 0.5em doesn't provide enough separation.
- **Use at least 0.5em of whitespace between list items.** List items should also be separated by whitespace, but they need less space than paragraphs because the list item indicator also helps distinguish adjacent items.
- **Headings should be closer to the text they introduce than the text that preceeds them.** It's important that headings are more visually connected to the text for which they're the heading than the text of the previous section to reduce ambiguity and cognitive dissonance. Use at least 1.5 times the amount of whitespace above the heading as below it.
- **Text should have sufficient margin on the left and right**. Running text requires right and left margin proportional to the width of the viewport. Use at least [1 unit]({{ site.baseurl }}/design-tokens/spacing-units/){:.token} of margin between the text and the edge of the viewport at mobile widths and at least [2 units]({{ site.baseurl }}/design-tokens/spacing-units/){:.token} on a tablet. Desktop widths can require as much as [4-5 units]({{ site.baseurl }}/design-tokens/spacing-units/){:.token} of minimum horizontal margin between the body of the text and any adjacent elements.

### Font style
The style of a typeface affects its readability. In general, serif typefaces are more appropriate for long blocks of text and sans serif typefaces are more appropriate for user interfaces — but this is not a hard-and-fast rule. The conventions of the web are more forgiving of longer, sans serifed texts and serif UIs are not out of the question for sites of a certain tone.

{:.usa-content-list}
- **Serif faces can be a good choice for long texts.** Serif typefaces tend to be designed for readability. While they are most useful for true extended longform reading like novels, nonfiction, and essays, any site that requires long stretches of continuous reading could benefit from using a serif body typeface.
- **Neutral faces can be a good choice for interfaces.** User interfaces are the practical expression of a site’s organization and functionality. A straightforward and neutral typeface can help the user focus on using the interface as a tool.
- **Avoid long sections of italic or bold text.** Both italic and bold text can degrade readability. Both are best used for limited sections of contrast. Consider replacing long sections of bold or italic text with a callout box, a section header, or some other technique that avoids extended stretches of styled text.
- **Avoid long sections of uppercase text.** Uppercase text has a serious negative effect on readability. Unless mandated by law, consider other type treatments for any uppercase text longer than just a few words.

### Letterspacing
Letterspacing is the spacing between individual letterforms in a block of text. Typically, this is defined by the type designer and shouldn't be modified. However, certain specific situations can call for letterspacing adjustments.

{:.usa-content-list}
- **Very small text can use looser letterspacing.** At very small type sizes, extra letterspacing helps improve readability. Consider using [letterspacing 1]({{ site.baseurl }}/design-tokens/typesetting/letterspacing/){:.token} when using [font size micro]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token} or [font size 1]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token}.
- **Very large text can use tighter letterspacing.** Tighter letterspacing can improve large headings. Headings of [font-size 9+]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token} could use [letterspacing -1]({{ site.baseurl }}/design-tokens/typesetting/letterspacing/){:.token}. Headings of [font-size 12+]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token} could use [letterspacing -2]({{ site.baseurl }}/design-tokens/typesetting/letterspacing/){:.token}. Headings of [font-size 17+]({{ site.baseurl }}/design-tokens/typesetting/font-size/){:.token} could use [letterspacing -3]({{ site.baseurl }}/design-tokens/typesetting/letterspacing/){:.token}.
- **Text set in uppercase or small caps should use looser letterspacing.** Uppercase text and small caps can appear too tight with normal letterspacing. Consider using [letterspacing 1]({{ site.baseurl }}/design-tokens/typesetting/letterspacing/){:.token} with uppercase buttons, and [letterspacing 2-3]({{ site.baseurl }}/design-tokens/typesetting/letterspacing/){:.token} with longer stretches of uppercase or small cap text (like acronyms or section intros).

<h2 id="included-typefaces">Included typefaces</h2>
<h3 class="usa-heading-alt">Source Sans Pro</h3>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col usa-prose site-prose">
    <p>Source Sans Pro, designed by Paul D. Hunt, is an open-source sans serif typeface created for legibility in UI design. With a variety of weights that read easily at all sizes, Source Sans Pro provides clear headers as well as highly-readable body text.</p>
    <p>Inspired by twentieth-century American gothic typeface design, its slender but open letters offer a clean and friendly simplicity. Advanced hinting allows Source Sans Pro to render well on Windows systems which run Cleartype, and across browsers and devices. Moreover, it supports a variety of languages and alphabets, including Western and European language, Vietnamese, pinyin Romanization of Chinese, and Navajo.</p>
  </div>

  <div class="typography-sans-intro tablet:grid-col">
    <span class="text-huge">Aa</span>
    <div>
      <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
      <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
      <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
    </div>
  </div>
</div>

<h3 class="usa-heading-alt">Merriweather</h3>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <p>Merriweather, designed by Sorkin Type, is an open-source serif typeface designed for on-screen reading. This font is ideal for text-dense design: the letterforms have a tall x-height but remain relatively small, making for excellent readability across screen sizes while not occupying extra horizontal space.</p>
    <p>The combination of thin and thick weights gives the typeface stylistic range while conveying a desirable mix of classic, yet modern, simplicity. Merriweather communicates warmth and credibility at both large and small font sizes.</p>
  </div>

  <div class="typography-serif-intro tablet:grid-col font-alt-md">
    <span class="text-huge">Aa</span>
    <div>
      <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
      <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
      <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
    </div>
  </div>
</div>

<h3 class="usa-heading-alt">Public Sans</h3>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <p><a href="https://github.com/uswds/public-sans">Public Sans</a> is an open-source sans serif typeface designed and maintained by USWDS and derived from <a href="https://github.com/impallari/Libre-Franklin">Libre Franklin</a>. It is a strong, neutral, principles-driven typeface for text or display based on a traditional American form. (The Franklin form is most noticeable in the two-story design of the “g” character.) It uses metrics similar to common system fonts for smoother progressive enhancement. It has a plain, straightforward style, appropriate for interfaces and running text. Its large x-height makes it legible at small sizes. It features a broad range of weights — and its heavier weights have tighter letterspacing than its lighter weights, meaning running text (which tends to be relatively small) is spaced more generously and headings (which tend to be relatively large) are more compact. It has tabular numerals for aligning numbers in tables.</p>
  </div>
  <div class="typography-lang-intro tablet:grid-col font-alt-md">
    <span class="text-huge">Aa</span>
    <div>
      <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
      <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
      <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
    </div>
  </div>
</div>

<h3 class="usa-heading-alt">Roboto Mono</h3>
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <p>Roboto Mono, designed by Christian Robinson, is a monospaced addition to the Roboto type family. Like the other members of the Roboto family, the fonts are optimized for readability on screens across a wide variety of devices and reading environments.</p>
    <p>Special consideration is given to glyphs important for reading and writing code. Letters with similar shapes are easy to tell apart.</p>
  </div>

  <div class="typography-mono-intro tablet:grid-col font-alt-md">
    <span class="text-huge">Aa</span>
    <div>
      <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
      <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
      <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
    </div>
  </div>
</div>

{% include child-sections.html parent='typography' %}
