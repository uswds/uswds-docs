---
title: How the National Science Foundation started its Seed Fund site with USWDS
tags:
- case study
- web design system
- design
category: About
excerpt: For our 11th post in the series, we talked with Scott Weber, front-end developer, who worked on America’s Seed Fund site for the National Science Foundation (NSF). The site was created for people who want to get federal grant funding for their science or technology projects.
---

The [U.S. Web Design System](https://designsystem.digital.gov/) was created by the government, for the government. They’re currently implemented on hundreds of government sites, with an audience of more than 59 million monthly users.

For our 11th post in the series, we talked with Scott Weber, front-end developer, who worked on [America’s Seed Fund [nsf.gov]](https://seedfund.nsf.gov/) site for the National Science Foundation (NSF). The site was created for people who want to get federal grant funding for their science or technology projects.

**USWDS:** How did you hear about the U.S. Web Design System (USWDS)?

**Scott Weber:** I’d been following the USWDS before starting work on the NSF project. So, when I was getting ready to build the site, which we knew was going to be on [Federalist [cloud.gov]](https://federalist.fr.cloud.gov/), using Github, the USWDS gave us a starting point for things we would have otherwise needed to develop from scratch, such as the grid, footer, navigation, etc. The USWDS gave us a place to start and saved us from having to reinvent the wheel.

**USWDS:** What does it mean for a developer to not have to start from scratch?

**Scott Weber:** It meant being able to focus on what the site needed that isn’t already addressed by the USWDS. For the NSF site, this meant being able to focus on more complex issues on the [Portfolio page [nsf.gov]](https://seedfund.nsf.gov/portfolio/), which shows companies funded by seed fund awards, and the [Apply page [nsf.gov]](https://seedfund.nsf.gov/apply/), which shows how the application process works.

**USWDS:** How did you integrate your work with the USWDS?

**Scott Weber:** For the most part it was fairly seamless. We started with the USWDS-Jekyll theme and from there it was about modifying the look and feel, moving pieces around to accommodate the design. We changed the typography and color choices to be on-brand with our site.

Overall the USWDS shortened the amount of time it took to implement the site, for example, the layout was easy to leverage. But at the same time, we spent a lot of time overriding the defaults, since the Seed Fund is a big departure from the “out of the box” style the USWDS provides. We needed more spacing on elements, different color palettes, among other things.

**USWDS:** What were the benefits you gained by using the USWDS?

**Scott Weber:** One benefit was tapping into the knowledge of designers and developers who had already spent time and energy creating the components. For example, the navigation didn’t need a lot of extra thought around functionality or accessibility as that was already taken care of by the USWDS team.

**USWDS:** What specific components did you use?

**Scott Weber:**  We used the header (and modified it quite a bit), footer, grid system, and accordion components.

**USWDS:** Is there anything the USWDS team could do, to help you in your efforts?

**Scott Weber:** I wish there was more depth to the grid system. In a few places we deviated from it and used our own flexbox CSS to get the type of grid we wanted. More flexibility would be helpful.

**USWDS:** Do you have advice for other agencies?

**Scott Weber:** Look into it and get involved! The more folks use it, the stronger it will be. People can contribute various things from different avenues. I enjoyed using the USWDS, and am happy to continue to help it grow. I’m following the [GitHub repository [github.com]](https://github.com/uswds/uswds) and contributing from time to time.

---

We’re looking to learn more [from agencies that have used USWDS [github.com]](https://github.com/uswds/uswds/blob/develop/docs/WHO_IS_USING_USWDS.md); if you’re interested in talking to us about your experience or have any feedback, feel free to send us an email at [uswds@support.digitalgov.gov](mailto:uswds@support.digitalgov.gov). You can also chat with the team in the [public Slack channel for USWDS [18f.gov]](https://chat.18f.gov/)!
