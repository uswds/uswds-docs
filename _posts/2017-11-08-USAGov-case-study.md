---
title: How the USA.gov team forks the Standards
tags:
- case study
- web design standards
- design
category: About
---
The U.S. Web Design Standards are currently being used on hundreds of government sites, with an audience of more than 59 million monthly users. In this ninth post in our series, we met with the team at USA.gov to talk about their use of the Standards. [USA.gov](https://USA.gov), and its Spanish counterpart [GobiernoUSA.gov](https://GobiernoUSA.gov), are the official guides for government information.

We talked with Maria Marrero, user experience designer and team lead, Russell O’Neil, director of delivery and channel operations, and David Stenger, senior innovation specialist.


**USWDS:** How did you hear about the U.S. Web Design Standards?

**Maria Marrero**: A couple of years ago, when the initial discussions and brainstorming around the Standards was beginning, the USA.gov team was asked to take part. We looked at the components already used in government sites and thought about what could be built across the government in a more standard way.


**USWDS:** Did you pick up the components right away? Which components did you pick up?

**MM**: We didn’t use them right away, but started looking at the components last year when we started planning a site facelift to see what could be implemented. We followed the development of the Standards and provided feedback.

**Russell O’Neill**: We made a matrix that compared the components on our site to how they would map to the Standards to see what would match, what would need work.

**MM**: We wanted to implement small components, little by little. We adopted the header and footer and fonts—font family and sizes.


**USWDS:** How was it to incorporate those elements?

**MM**: From a design perspective, we were able to easily adopt the header and footer and accommodate content we had on our current sites. It fit pretty well. We had to make some adjustments to the mega menus, as we didn’t have them on our site before. It was not as complicated from the design perspective as we’d thought. From a technical perspective, it wasn’t as simple.

**RO**: Some of the specific content items on our site caused us to have to tweak the Standards early on. Trying to make it adapt to USA.gov was more complicated and it took longer that we thought it would.

**David Stenger**: From the development side a really big pain point for us was the mega menu and on GobiernoUSA.gov, the line lengths caused a lot of spacing issues. So we forked the Standards and manipulated the stylesheets to our liking.

From an accessibility standpoint, we created an issue log and gave it to the Standards team that we see you’re addressing now. From an accessibility standpoint, we’d like to see some guidance on the Standards site, around using heading structure and forms, for example. There are some comments on accessibility, but not enough guidance on how to implement.

**MM**: We adopted the Standards knowing it’s a work in progress and that some of the components would need some tweaking. We have had to go back and fix code. Our general feedback to other agencies has been that for new and small websites, the Standards would work nicely. But, with more established sites that already have a CMS (Content Management System), lots of content (with a deep information architecture), it could be a big and complicated project.


**USWDS:** That’s helpful feedback. Did you also report that feedback in the repos (repositories)?

**MM**: Yes. We did report it in the [GitHub repos [github.com]](https://github.com/uswds/uswds/). As we adopted components, we provided additional testing information we have from using the Standards. For example, usage of the official tagline that appears at the very top of the pages. It was also helpful to see comments from other users/agencies on their experience or suggestions with the Standards. When using the Standards and encountering issues, we had to move forward whether they were addressed or not. We had deadlines for launching sections of our sites.


**USWDS:** Anything else the Standards team should know about multilingual sites?

**RO**: The biggest thing was that Spanish is a longer language. Things don’t wrap properly, especially in menus.

**MM**: The logos sometimes didn’t work seamlessly. We needed more QA (quality assurance) time so that anything we change on USA.gov isn’t affecting GobiernoUSA.gov.

**DS**: One thing we learned was how the white space changed when implementing the Standards. It took us a while to adjust the white space. The way we’d previously coded the site resulted in incongruities — like a lot of space in form fields. When we implemented the Standards, it tended to multiply the white space.


**USWDS:** What were the benefits you gained by using the Standards?

**MM**: I think the treatment of buttons or the accordion—something we could make more standardized across all government was helpful and served as a guide for consistency. It helps that they have working examples of the components. Better than just an image. The fact that there is a community with feedback. It’s good to hear from others sharing concerns or solutions.


**USWDS:** Is there anything the Standards team could do to help you in your efforts?

**RO**: That’s hard to answer because the Standards don’t answer to any one project or agency. You get lots of feedback from lots of sources. It’s great we can put in issue requests. In the early days, we didn’t know if anything was being done with the input provided. But, it’s been really great to share our experience with the Standards team in efforts like this and my experience with members of the team has always been good.


**USWDS:** Advice for other agencies?

**RO**: Don’t be afraid to use them in your own way. We ended up forking the Standards, tweaking them to our needs, but using them as the baseline. For instance, in our dropdown menu we added an icon and visual link that wasn’t in the Standards. We know that forking has long-term implications, but we think we’re getting a lot from the design language of the Standards. And users having the same experience across government—that’s a positive.


---

We’re looking to learn more [from agencies that have used the Standards](/getting-started/showcase/); if you’re interested in talking to us about your experience or have any feedback, feel free to send us an email at [uswebdesignstandards@gsa.gov](mailto:uswebdesignstandards@gsa.gov). You can also chat with the team in the new [public Slack channel for the Standards [18f.gov]](https://chat.18f.gov/)!
