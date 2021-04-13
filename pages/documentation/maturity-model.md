---
permalink: /maturity-model/
layout: styleguide
title: USWDS maturity model
category: How to use USWDS
lead: Use the USWDS maturity model to adopt the design system incrementally and design and build better digital experiences.
subnav:
- text: "1: Integrate design principles"
  href: '#level-1-integrate-design-principles'
- text: "2: Follow UX guidance"
  href: '#level-2-follow-user-experience-guidance'
- text: "3: Use USWDS code"
  href: '#level-3-use-uswds-code'
- text: Maturity assessment resources
  href: '#maturity-assessment-resources'
---

<div class="margin-top-6 border-top-05 border-primary padding-top-2">
  <div class="grid-row">
    <div class="tablet:grid-col-7">
      <div class="padding-top-2">
      <h2 class="font-lang-lg margin-top-0 line-height-sans-2">You don’t need to adopt the design system all at once.</h2>
      <p>Adopt the design system incrementally through the levels of the USWDS maturity model. Your project can progress both through higher levels of maturity and with more comprehensive maturity at each level. Most importantly, using the design system is about integrating the <a href="{{ site.baseurl }}/design-principles">USWDS Design Principles</a>, common goals that align teams across government and serve as an evaluative lens for design and implementation decisions.</p>
      <p>As you adopt and adapt the design system, be sure to contribute back to the system. Use the <a href="https://github.com/uswds/uswds">USWDS GitHub page [github.com]</a> to:</p>
      <ul>
        <li>Report problems or bugs</li>
        <li>Contribute new research or guidance</li>
        <li>Propose new components</li>
      </ul>
      </div>
    </div>
    <div class="tablet:grid-col-5">
      <div class="padding-2 tablet:padding-left-4">
        <img src="{{ site.baseurl }}/img/maturity-model.svg" role="img" alt="A diagram showing the concentric circles of the USWDS maturity model, progressing from Principles on the outside, through Guidance, and finally to Code in the innermost circle.">
      </div>
    </div>
  </div>
</div>

{:.border-top-05.border-primary.padding-top-2.margin-top-2.margin-bottom-3}

## Level 1: **Integrate design principles**{:.text-light}

**USWDS Design Principles support and reflect the important guidance codified in the [21st Century Integrated Digital Experience Act [digital.gov]](https://digital.gov/resources/21st-century-integrated-digital-experience-act/).** These design principles are intended to help teams across government align on important common goals and better use the design system — to be an evaluative lens for design and implementation decisions.

### Start with real user needs

{:.border-top-2px.border-base-lighter.padding-top-1}
**Real user needs should inform product decisions.** Whether our audience includes members of the public or government employees, decision-makers must include real people in our design process from the beginning. Then, we need to test the assumptions we make and the products and services we build with real people, to keep us focused on what is most useful and important.

<a class="usa-button font-lang-sm" href="{{ site.baseurl }}/design-principles/#start-with-real-user-needs">Learn about starting with user needs</a>

### Earn trust

{:.border-top-2px.border-base-lighter.padding-top-1}
**Trust has to be earned every time.** Federal websites and digital services can't assume it. Trust is about understanding and meeting or exceeding expectations, a process that can be established quickly and maintained over continued interactions, but is easily damaged. Be reliable, consistent, and honest. Reduce the impact of failure with solid design and engineering. Be a good steward of your audience's data, resources, and time.

<a class="usa-button font-lang-sm" href="{{ site.baseurl }}/design-principles/#earn-trust">Learn about earning trust</a>

### Embrace accessibility

{:.border-top-2px.border-base-lighter.padding-top-1}
**Accessibility affects everybody, build it into every decision.** Legal requirements are a critical, necessary starting point, but this is only the beginning. Accessibility is about real people who use our services — it's usability for people who interact with products differently. Everyone who works on government websites has a role to play in making federal resources accessible and inclusive. Design generously and celebrate accessibility requirements as a set of design constraints that help us create a better product for all users.

<a class="usa-button font-lang-sm" href="{{ site.baseurl }}/design-principles/#embrace-accessibility">Learn about embracing accessibility</a>

### Promote continuity

{:.border-top-2px.border-base-lighter.padding-top-1}
**Minimize disruption and provide a consistent experience: throughout services, over time, and across agencies, platforms, and devices.** Consistency is not necessarily conformity. Agencies, sites, and services may have different audiences, missions, and goals — and the way we implement our solutions may differ — but we promote continuity by starting from shared solutions and values. These design principles are one set of shared values. The design language of the U.S. Web Design System is another. Strive to build user-centered solutions that address the whole experience, not just a user's specific task, but the context of their journey.

<a class="usa-button font-lang-sm" href="{{ site.baseurl }}/design-principles/#promote-continuity">Learn about promoting continuity</a>

### Listen

{:.border-top-2px.border-base-lighter.padding-top-1}
**Evaluate and improve your product by listening to your audience and learning from what you hear.** Continuous feedback drives continuous improvement. Measure customer experience — how well what we've built is working for our audience — at every stage of a project, and as projects grow and mature. Listen to what people say and observe how they interact with our products or services, whether through direct observation or through analytics data. If we're not listening, we're not learning.

<a class="usa-button font-lang-sm" href="{{ site.baseurl }}/design-principles/#listen">Learn about listening</a>

{:.border-top-05.border-primary.padding-top-2.margin-bottom-3}

## Level 2: **Follow user experience guidance**{:.text-light}

**USWDS UX guidance helps assure that components do what users expect them to do, based on UX best practices and research.** Every website is built of common functional units: components like [buttons]({{ site.baseurl }}/components/button), [forms]({{ site.baseurl }}/components/form-controls), and [navigation]({{ site.baseurl }}/components/sidenav). For every website component in USWDS, we provide user experience (UX) guidance as well as code. You should follow the UX guidance even if you don’t use USWDS code.

### What to do

#### 1: Inventory your site components.

- Make a list of the components your current site uses.
- Check to see if an equivalent USWDS component exists.

#### 2: Read the component UX guidance.

- Find the relevant component guidance on the USWDS website. Each component has its own UX guidance. (See the "Guidance" section of the [button component]({{ site.baseurl }}/components/button/), for example.)
- Read and understand the guidance for each component used on your site.

#### 3: Assure site components follow guidance.

- Update any site components that fall outside [USWDS guidance]({{ site.baseurl }}/components/).

### How to check

- [Google Lighthouse UX audit [google.com]](https://developers.google.com/web/tools/lighthouse)
- Check [maximum line lengths]({{ site.baseurl }}/components/typography/#measure-line-length) are no longer than 90 characters
- Check that sites adhere to agency-specific design and style guidelines

{:.border-top-05.border-primary.padding-top-2.margin-bottom-3}

## Level 3: **Use USWDS code**{:.text-light}

**Use USWDS code to provide accessible, mobile-friendly experience across government sites.** The code is comprised of two parts, design tokens and components. USWDS design tokens are common and consistent elements of color, spacing, and typography that government websites share. USWDS components are pre-built, defaults elements that make up government websites. For example, the USWDS banner component is an easy way to show your site is an official government website and explain the benefits of secure connections.

Government websites include components that aren’t included in USWDS yet. Use USWDS design tokens to build new components, and contribute any new components you develop and research you collect back to USWDS.

### What to do

#### 1: Add USWDS code and adjust settings.

- Add USWDS to your project [with NPM]({{ site.baseurl }}/documentation/developers/#install-using-npm) or by [downloading the source from Github]({{ site.baseurl }}/documentation/developers/#download).
- Compile the Sass source code using the [guidelines in the documentation]({{ site.baseurl }}/documentation/developers/#sass-compilation-requirements) or by using [uswds-gulp [github.com]](https://github.com/uswds/uswds-gulp).
- Compile the Javascript source code using the [guidelines in the documentation]({{ site.baseurl }}/documentation/developers/#js-customization) or [download a precompiled version]({{ site.baseurl }}/documentation/developers/#download).
- Add USWDS Javascript to your page templates.
- Add USWDS CSS to your page templates.

#### 2: Use USWDS design tokens in all stylesheets.

- Install USWDS source Sass files using [the instructions]({{ site.baseurl }}/documentation/developers/#installation) on the USWDS website.
- Include USWDS Sass before including existing project source files. See [Sass an theme settings]({{ site.baseurl }}/documentation/developers/#sass-and-theme-settings).
- Convert existing values to tokenized values. Use [the conversion tables](/documentation/migration/#integrating-tokens) to convert existing values to USWDS tokens.
- Use USWDS [tokens]({{ site.baseurl }}/design-tokens/), functions (see [font-family functions]({{ site.baseurl }}/design-tokens/typesetting/font-family/#using-family-tokens), for example), and utility mixins (see [font-family utility mixins]({{ site.baseurl }}/design-tokens/typesetting/font-family/#using-family-tokens), for example) in existing component code.

#### 3: Replace existing components with USWDS components.

- Swap existing components with `usa-` classed [components]({{ site.baseurl }}/components/) in project templates.
- Use component overrides and [USWDS settings]({{ site.baseurl }}/documentation/settings/) to adapt the USWDS default components to your project's desired style and tone.

#### 4: Contribute back to the system.

- Contribute new research, guidance, components, and issues back into the system.

### How to check

- Presence of banner markup
- Presence of current banner text
- Presence of `usa-` prefixed classes
- Presence of specific `usa-` prefixed classes for common components (banner, header, footer, button, search, inputs)
- Presence of USWDS stylesheet
- Presence of USWDS color tokens
- Presence of current USWDS version in stylesheets
- Presence of tokens in source Sass
- Presence of rem units for margin and padding in compiled CSS


{:.border-top-05.border-primary.padding-top-2.margin-bottom-3}

## Maturity assessment resources
Our maturity assessment resources are meant to help you assess and understand
your as-is state, what you’re doing well, and how you can better use USWDS to
improve the public’s experience of your websites and digital services.

### Maturity Assessment Worksheet
We’re introducing the draft [Maturity Model Assessment Worksheet]({{ site.baseurl }}/files/uswds-maturity-assessment-worksheet_v0.3.pdf) (PDF, 723 KB, 26 pages).
It’s meant to help you assess and understand your as-is state, what you’re
doing well, and how you can better use USWDS to improve the public’s experience
of your websites and digital services.

### Checklists to track your progress
Use the checklists in the worksheet to help track your team’s progress in
understanding and adopting the design principles and individual components.


This is a work in progress, and we want your input.
- Share your feedback and collaborate with the [USWDS community]({{ site.baseurl }}/about/community/)
on the [#uswds-public [slack.com]](https://app.slack.com/client/T025AQGAN/C3F14AHSQ){:target="_blank" rel="noopener"} Slack channel.
- If you can't access slack, email us your feedback directly at [uswds@support.digitalgov.gov](mailto:uswds@support.digitalgov.gov)

If you’re new to the maturity model, listen to [USWDS January Monthly Call [digital.gov]](https://digital.gov/event/2020/01/16/uswds-january-monthly-call/)
on the using the USWDS maturity model.
