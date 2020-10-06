---
permalink: /components/step-indicator/
layout: styleguide
type: component
title: Step indicator
category: Components
lead: A step indicator updates users on their progress through a multi-step process.
variants:
  - variant: "`.usa-step-indicator--no-labels`"
    description: Don't show step labels
  - variant: "`.usa-step-indicator--counters`"
    description: Show step counters
  - variant: "`.usa-step-indicator--counters-sm`"
    description: Show small step counters
  - variant: "`.usa-step-indicator--center`"
    description: Center counters and labels in each step
---

{% include code/preview.html component="step-indicator" %}

<section class="site-component-section">
  {% include code/accordion.html component="step-indicator" %}
  <div class="usa-accordion usa-accordion--bordered site-accordion-docs">
    <button class="usa-button-unstyled usa-accordion__button"
        aria-expanded="true" aria-controls="sidenav-docs">
      Guidance
    </button>
    <div id="sidenav-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
      <h3>When to use the step indicator</h3>
      <ul class="usa-content-list">
        <li><strong>Multiple steps and screens.</strong> Use the step indicator when the user is working through a form or process that will span several different pages that can be organized into three or more high-level steps or chapters. This helps users understand the progression of long forms and reduces uncertainty as they complete each screen.</li>
        <li>
          <strong>Linear progression.</strong> The step indicator is designed to complement standard back/next navigation in a linear sequence, not to be navigation of its own.
        </li>
      </ul>
      <h3>When to consider something else</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Long forms with conditional logic.</strong> Consider another approach if the number of steps might change due to user input.
        </li>
        <li>
          <strong>Nonlinear progression.</strong> The step indicator isn't appropriate for nonlinear forms or interactions that might be completed in any order.
        </li>
        <li>
          <strong>Very short forms.</strong> Don’t use a step indicator for short forms without chapters or sections. If a form or process has fewer than three sections, don't use a step indicator.
        </li>
      </ul>
      <h3>Usability guidance</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Indicate where a user is in the process.</strong> Use a color and text treatment for the current step segment that is distinct from both the completed and pending step segments. The current segment should be the most visually prominent segment in the step indicator. Pending segments should be the least visually prominent of the segments, but should still maintain accessible contrast and not appear disabled.
        </li>
        <li>
          <strong>Use short or single-word labels.</strong> If labelling the step indicators, stick to very short words.
        </li>
        <li>
          <strong>Provide navigation separately.</strong> Use navigation like a <a href="{{ site.baseurl }}/components/button-groups">button group</a> to step forward and backward through a form.
        </li>
        <li>
          <strong>Place a heading directly below the step indicator.</strong> Each step needs an explicit heading. The step indicator segments (even with labels and counters) are not sufficient as a heading for a page or screen.
        </li>
        <li>
          <strong>Display step and total left of the heading.</strong> Using text like "[step] of [total]" next to the heading reinforces the number of total steps and helps users keep track of their location in the overall process.
        </li>
      </ul>
      <h3 class="usa-heading">Accessibility</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Use semantic heading levels.</strong> Though our default code uses an <code>&lt;h2&gt;</code>, use the correct heading level in your own implementation.
        </li>
        <li>
          <strong>Use <code>aria-label="progress"</code>.</strong> Placing this <code>aria-label</code> on the element with the class <code>usa-step-indicator</code> helps provide important context to screen readers.
        </li>
        <li>
          <strong>Use visually hidden text on labels.</strong> Use visually hidden text make the completion status of each step explicit.
        </li>
        <li>
          <strong>Indicate the current step</strong> When using labeled segments, use <code>aria-current="true"</code> on the list item representing the current step.
        </li>
        <li>
          <strong>Hide unlabeled segments.</strong> TThere is no content inside the segments when labels aren't used, so it is safe to add <code>aria-hidden="true"</code> to the element with the class name <code>usa-step-indicator__segments</code>.
        </li>
      </ul>
      <h3 class="usa-heading">Implementation</h3>
      <ul class="usa-content-list">
        <li>
          <strong>Use counters to reinforce step progression. </strong> The counter pattern (step numbers in a circle) attracts more attention to the indicator bar, but more strongly communicates step-by-step progression. Use counters when you want to reinforce step progression. Omit them if testing proves that this reinforcement is unnecessary for your audience.
        </li>
        <li>
          <strong>Omit labels with verbose content.</strong> Aim for clear and crisp labels. Omit labels to save space or if the step names are too long to comfortably fit in the step indicator.
        </li>
        <li>
          <strong>Use the centered variant with centered content and headings.</strong> The centered variant is designed to complement centered content and headings. If you have left-aligned content and headings, use the default alignment.
        </li>
        <li>
          <strong>Center the heading with utilities.</strong> Use the <code>flex-justify-center</code> utility on <code>usa-step-indicator__header to center</code> the heading.
        </li>
        <li>
          <strong>Centered counters need narrower gaps and a thinner segment.</strong>  If you use a centered variant with counters, you should use a narrower gap (2px is a good starting point) to increase the continuity between segments. A narrower counter gap (again, 2px is a good starting point) can also improve legibility. Centered counters can also benefit from a  thinner segment, as the centered variant focusses emphasis on the counter instead of the segment.
        </li>
        <li>
          <strong>Pending text should use gray.</strong> Pending text should use the gray family that complements the background and the pending segment colors. Use warm grays with warm backgrounds and segments, and cool grays with cool backgrounds and segments.
        </li>
        <li>
          <strong>Pending segments can use gray or complete family.</strong> Pending segments can use gray, just as with pending text, but they can also use a light grade of the complete color family.
        </li>
        <li>
          <strong>The current color can be a contrast color.</strong> The current color can be in the same family as the complete color or it can be a contrast color that distinguishes itself from the complete color.
        </li>
        <li>
          <strong>Thicker segments use wider counter gaps.</strong> It can be distracting to use a thick segment with a narrow counter gap. Use a gap of at least 0.5 units on a 1 unit segment.
        </li>
        <li>
          <strong>Avoid wide counter gaps.</strong> Counter gaps cap improve legibility of the counters, but wide counter gaps hurt the overall continuity between the counters and the segments.
        </li>
      </ul>
      <h4 id="component-settings">Step indicator settings</h4>
      {% assign settings = site.data.settings.components.step-indicator %}
      {% include settings-table-simple.html
        settings=settings.contents
      %}
      <h4 id="component-variants">Step indicator variants</h4>
      {% include settings-table-flex.html
        content=page.variants
        cols="flex-1, flex-1"
        section="variants"
      %}
      <h4 class="usa-heading">Package information</h4>
      <ul class="usa-content-list">
        <li>
          <strong>Package usage:</strong> <code>@import usa-step-indicator</code>
        </li>
        <li>
          <strong>Requires:</strong> <code>required</code>, <code>global</code>
        </li>
      </ul>
    </div>
  </div>
</section>


