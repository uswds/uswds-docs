---
permalink: /components/card/
redirect_from:
- /cards/
- /card/
- /components/cards/
layout: styleguide
type: component
title: Card
category: Components
lead: Cards contain content and actions about a single subject.
---

A **card** is often a subset or summary of a larger idea. It acts as an entry point to more detailed information. This summary can contain a variety of content types, such as text, images and multimedia, or buttons and links.

An individual card is typically **a member of a collection** of similar cards, not a single card in isolation. A card is distinguished from others in its collection by its content, and cards are distinguished from the broader page context in form — usually with a border or a shadow.

{:.margin-bottom-4}

Finally, a card is **modular**. This means that you can vary the order of cards in a collection without destroying any individual card’s meaning.

{% include code/preview.html component="card" %}
<section class="site-component-section">
  {% include code/accordion.html component="card" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="card-docs">
      Guidance
    </button>
    <div id="card-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h4>When to use the card component</h4>
      <ul class="usa-content-list">
        <li>
            <strong>Collections of related content.</strong> When you need to present a collection of related groups of content, like articles or sections of a website.
        </li>
      </ul>
      <h4>When to consider something else</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Tabular data.</strong> Don't use a card as a substitute for a table row.
        </li>
        <li>
          <strong>Simple calls to action.</strong> Use a button instead.
        </li>
        <li>
          <strong>Standalone content.</strong> Consider an <code>aside</code> or another standalone element.
        </li>
        <li>
          <strong>Sequential, continuous text.</strong> Cards should be self-contained and modular. If the reader is meant to read from card to card, consider a list or simple body text and headings.
        </li>
      </ul>
      <h4>Usability guidance</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Make cards actionable.</strong> Since cards are used as a summary of more detailed information, any individual card should link out to that information.
        </li>
        <li>
          <strong>Don't use the card component only for decoration.</strong> Use the card component for cards, not for any type of content that's designed to have a border around it.
        </li>
        <li>
          <strong>Include non-redundant content.</strong> Don't repeat images or content common to all or most cards in a collection. Repeated information (like using the same image for each card in a collection) makes it more difficult to distinguish cards from one another.
        </li>
        <li>
          <strong>Make sure images are properly sized.</strong> Cards often change size depending on the device. Make sure you use an image that works well on any device at any size.
        </li>
        <li>
          <strong>Use simple styling.</strong> Avoid distracting skeumorphism. Don't include any card styling that calls too much attention to the metaphor of a paper card, like folds, bent edges, or paper texture.
        </li>
      </ul>
      <h4>Accessibility</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Use unordered lists and list items.</strong> Use a <code>ul</code> for a card group and an <code>li</code> for each card. This allows screen readers to enumerate the items in the card group and allows shortcuts between list items.
        </li>
        <li>
          <strong>Use the appropriate heading level for your page.</strong> Update heading level based on the content of your page to make sure card headings are in the correct logical outline order.
        </li>
        <li>
          <strong>Use CSS to order the media element.</strong> Logically, the media element should follow the header elmement. Don't re-organize the markup to reverse their order.
        </li>
      </ul>
      <h4>Implementation</h4>
      <ul class="usa-content-list">
        <li><strong>Control card size and layout with grid utilities.</strong> The <code>usa-card-group</code> block is functionally a wrap-able <code>grid-row</code> and each individual <code>usa-card</code> is a <code>grid-col</code>. This means that you can use a grid utility like <code>tablet:grid-col-4</code> to set a four-column size on a card at tablet width. You can also set custom grid gaps on a <code>usa-card-group</code> using the <code>grid-gap</code> utilities. Since the USWDS grid is based on flexbox, you can use flex positioning utilities on the card group. The default alignment is stretch (this aligns the top and bottom of each card in a row), but the <code>flex-align-start</code> utility can set the alignment to the top of the row.</li>
        <li><strong>Style cards with utilities.</strong> Style the <code>usa-card__container</code> element with utilities to achieve custom effects, such as changing the border or background color, or adding a drop shadow.</li>
      </ul>
      <h5 id="component-settings">Card settings</h5>
      {% assign settings = site.data.settings.components.card %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h5 id="component-variants">Card variants</h5>
      <table class="usa-table--borderless site-table-responsive site-table-simple" aria-labelledby="component-variants">
        <thead>
          <tr>
            <th scope="col" class="flex-6">Variant</th>
            <th scope="col" class="flex-6">Description</th>
          </tr>
        </thead>
        <tbody class="font-mono-2xs">
          <tr>
            <td data-title="Variant" class="flex-6">usa-card--flag</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Display in a horizontal ("flag") orientation at a specified width (`$theme-card-flag-min-width`).</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-card--header-first</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">Displays the header element before the media element.</span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-card--media-right</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                In combination with <code>usa-card--flag</code>, sets the media
                element on the right. (Flag cards display media on the left by default.)
              </span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-card__media--indent</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Indents the media element so it doesn't extend to the edge of the card.
              </span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-card__media--set-aspect</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Sets a fixed aspect ratio on the card media. The default is 16x9,
                but this can be changed by adding an <code>add-aspect</code> utility
                to the media element, like <code>usa-card__media--set-aspect.add-aspect-1x1</code>
              </span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-card__media--exdent</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Extends the media element out over the card border.
                Useful for light-bordered cards.
              </span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-card__body--exdent</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Extends the body element out over the card border.
                Useful for light-bordered cards.
              </span>
            </td>
          </tr>
          <tr>
            <td data-title="Variant" class="flex-6">usa-card__footer--exdent</td>
            <td data-title="Description" class="flex-6">
              <span class="font-lang-3xs">
                Extends the footer element out over the card border.
                Useful for light-bordered cards.
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-card</code>
        </li>
        <li>
          <strong>Requires:</strong>
          <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>
