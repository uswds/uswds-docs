---
title: How the Defense Digital Service uses USWDS for a Ruby app
tags:
- case study
- web design system
category: About
excerpt: In this 12th post in our series, we sat down with Jason Garber, front-end web developer at the U.S. Digital Service’s Defense Digital Service, to talk about his work creating a Ruby gem that integrates USWDS into a Ruby on Rails application.
---

The U.S. Web Design System (USWDS) is a library of design and code guidelines to help agencies create trustworthy, accessible, and consistent digital services. USWDS is being used on over one hundred government sites, with an audience of 120 million users. In this 12th post in our series, we sat down with Jason Garber, front-end web developer at the U.S. Digital Service (USDS)’s Defense Digital Service, to talk about his work creating a [Ruby gem [wikipedia.org]](https://en.wikipedia.org/wiki/RubyGems) for the new [Move.mil](https://www.move.mil/) that integrates USWDS into a Ruby on Rails application.


**USWDS:** How did you hear about the U.S. Web Design System?

**Jason Garber:** The military has a really complicated system for moving service members’ property and we are working to improve this experience. I’m working on a Ruby on Rails app that will support part of the project, [Move.mil](https://www.move.mil/), and found out about USWDS from a designer on the team who started using them to speed up the design process.

As we were looking to see how we could most easily integrate USWDS, I found an existing, unmaintained Ruby gem that hadn’t gotten a lot of love. I thought I could quickly spin up an updated version that works with our app, and pulls in the latest version of USWDS. It wasn’t terribly difficult, but there was some manual labor involved. Overall, I’m pretty happy with how it’s turned out and whenever USWDS team publishes a new version, I’ll update the gem to keep it fresh.


**USWDS:** Were there any challenges in working with USWDS?

**Garber:** There were some challenges specific to exposing assets in a gem to a Rails app. Rails' Asset Pipeline provides a Rails-specific group of helpers for generating asset paths in development and production environments. Anywhere USWDS reference an asset, I manually updated the Sass (SCSS) files to use these helpers. Now that I’ve got it down, updating the gem isn’t terribly difficult. For me, coming into the U.S. Digital Service and having USWDS there certainly made our lives easier.


**USWDS:** How did it make your lives easier?

**Garber:** As a front-end developer, I don’t have to spend a bunch of time making a grid system, or thinking about what markup to use, I can reference USWDS, which has great documentation. It saved us a ton of time spinning up a prototype that we could show to service members when we’re doing user testing. We can ask them how this new site compares to what they’re currently using. We couldn’t have gotten a prototype in front of our users as quickly without USWDS.


**USWDS:** Were there any unintended consequences or surprises in using USWDS?

**Garber:** Inevitably, you run into something you need to build that doesn’t exist in USWDS and you have to build it by hand.


**USWDS:** Is there anything USWDS team could do to help you in your efforts?

**Garber:** Nothing springs to mind: the documentation is great, Fractal is coming along, and being in the [#uswds-public Slack channel [18f.gov]](https://chat.18f.gov/) is fantastic. I don’t participate a ton in there, but it’s nice to see the conversation. If I do have a quick question, it’s a great alternative to filing a GitHub issue and I appreciate it.

I’m pretty happy with the level of engagement from USWDS team. They have been pretty responsive answering questions. The conversation so far has been very welcoming and helpful. It’s great seeing so many people who are actually involved in building USWDS, also responding to questions.


**USWDS:** Advice for other agencies?

**Garber:** I think it’s great that USWDS exists. On the one hand, government is so large that it would be difficult to prescribe that every site should use USWDS—to meet every need would be impossible. But, to have USWDS as a starting point, or “guard rails,” is great. Going to any government website and seeing at least some consistency across the board is a great way to build trust.

---

We’re looking to learn more [from agencies that have used USWDS](https://github.com/uswds/uswds/blob/develop/docs/WHO_IS_USING_USWDS.md). If you’re interested in talking to us about your experience or have any feedback, feel free to send us an email at [uswds@support.digitalgov.gov](mailto:uswds@support.digitalgov.gov). You can also chat with the team in the [public Slack channel for USWDS](https://chat.18f.gov/).
