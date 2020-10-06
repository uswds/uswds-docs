---
title: Range slider
parent: Form controls
maturity: alpha
order: 10
id_custom: range
lead: A range slider allows users to choose an approximate number from a range.
---

{% include code/preview.html component="range-input" %}
{% include code/accordion.html component="range-input" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="range-docs">
    Guidance
  </button>
  <div id="range-docs" aria-hidden="false" class="usa-accordion__content site-component-usage" markdown="1">

#### When to use the range slider component

{:.usa-content-list}

- **When the range is more important than precision.** For instance, it could be more important for a target price selector to communicate where the target price falls within a certain range than the precise dollar amount selected.
- **When a relative value is more important than an exact value.** For instance, a volume slider is typically more focussed on the relative loudness of the output rather than the specific decibel level.

#### When to consider something else

{:.usa-content-list}

- Use a regular text input if a user needs to enter a precise number.

#### Usability guidance

{:.usa-content-list}

- **Highlight the control when selected.** The slider control should change color to indicate it is active when a user selects it.
- **The control must be draggable.** Users should be able to drag the slider control or select somewhere along the slider itself to change the value.
- **Label the limits of the range.** When appropriate, label the ends of the slider with the limits of the range (for example: "0/100", "small/large" or "less expensive/more expensive").
- **Don’t be too granular.** In a range slider, the relative value is more important than the specific value, so set the `step` attribute so it’s not too granular. By setting the step to a value of 10-20% of the total range you prevent unnecessary precision and cognitive strain in your users. For example, set `step="10"` in a total range of 100.

#### Accessibility

{:.usa-content-list}

- **Customize accessibly.** As you customize this form template, ensure it continues to follow the [accessibility guidelines for form templates]({{ site.baseurl }}/form-templates/) and the [accessibility guidelines for form controls]({{ site.baseurl }}/form-controls/).

#### Implementation

{:.usa-content-list}

- Set the `min` and `max` attribute of the `input` element to correspond to the instructions or labels that accompany the slider.

<h5 id="range-slider-settings">Range slider settings</h5>
<p>This component has no settings.</p>
<h5 id="range-slider-variants">Range slider variants</h5>
<p>This component has no variants.</p>

#### Package information

{:.usa-content-list}

- **Package usage:** `@import form-controls`
- **Requires:** `required`, `global`

#### References

{:.usa-content-list}

- [Slider Design: Rules of Thumb - Nielsen Norman Group](https://www.nngroup.com/articles/gui-slider-controls/)
- [Four Dangerous Navigation Approaches that Can Increase Cognitive Strain - Nielsen Norman Group](http://www.nngroup.com/articles/navigation-cognitive-strain/) (See example #4.)

</div>
</div>
