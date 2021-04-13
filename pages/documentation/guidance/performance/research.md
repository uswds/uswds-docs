---
title: Performance research
permalink: /performance/research/
category: How to use USWDS
layout: styleguide
lead: Report on research USWDS team did on performance.
subnav:
- text: Introduction
  href: '#introduction'
- text: Executive summary
  href: '#executive-summary'
- text: Research approach
  href: '#research-approach'
- text: Findings
  href: '#findings'
---

## Introduction

Web performance is an essential part of the user experience and should be a priority across government. The main objective of this research project is to improve web performance by giving federal agencies access to the necessary resources. To achieve this, we interviewed several teams across government in order to identify the needs and existing pain points around web performance. Through this research, it was also necessary to learn about the efforts government agencies have made and continue to make towards improved web performance so our work can complement theirs.

## Executive summary

18F conducted user interviews with several government agencies and spoke with engineers, designers and directors. We asked about their development process, what performance means to them, which pain points they have, how improved web performance would affect their users, and how they track performance today.

**We found:**

1. Most federal agencies currently track their web performance in an informal, ad hoc way.
1. Communicating the value-add of web performance is difficult. Tying the impact of improved web performance to a tangible result is even more difficult.
1. Each government website has its own unique challenges and circumstances. They need a web performance tool and best practices that can be tailored to their specific site.
1. Federal agencies use a variety of tools to track and measure web performance. There is currently no standard for tools and metrics government teams should use.
1. Government teams need to know the ways and options they have for improving their site’s web performance.

## Research approach

In order to uncover ways to improve web performance across government, we needed to understand the current role of performance within federal agencies. We needed to learn about how agencies define web performance and build it into their process.

To gather this information, we conducted a series of interviews with federal agencies where we asked open-ended questions related to web performance and their site. This method of research enabled the participants to share with us their struggles as well as their successes around performance. Through this process, our interviewees brought to light the areas that we should be focusing on to help promote and improve web performance across government.

### User groups

We wanted to interview a broad range of users so that we had a representative sample of government teams. It was important to select teams that are doing well performance-wise in addition to teams who weren't. We also wanted to talk to a diverse range of users with different team roles. Our interviewees included front- and back-end engineers, designers, managers, directors, and technical architects.

Overall, we interviewed 9 government teams: Customs and Border Protection (CBP), Consumer Financial Protection Bureau (CFPB), DigitalGov, Office of Product and Programs (OPP), HHS OIG, USA.gov, Library of Congress, congress.gov, AIDS.gov, HIV.gov, Department of Veterans Affairs (VA), vets.gov, healthcare.gov.

### Methodologies

#### Comparative analysis

We kicked off the research with a comparative analysis of a few commonly used web performance tracking/measuring tools. We looked at 9 tools: YSlow, PageSpeed Insights, browser-perf, Phantomas, Lighthouse, Sitespeed.io, WebPagetest, SpeedCurve, and GTmetrix. The tools were evaluated and compared against each other for the cost, what they track, the format of the results and how it’s implemented.

This process helped shine light on the pros and cons of each tool, which allowed us to narrow down the list of tools. Google’s PageSpeed Insights and Lighthouse quickly rose to the top of the list by being free of cost, tracking a variety of metrics, multiple implementation options, and a useful results format.

#### User interviews

The user interviews took place over the course of three weeks in March 2017. We began by interviewing a member of the 18F team who has expertise in HTTPS and HTTP/2 and shared with us the complementary ways in which it can help to improve web performance. Next, we interviewed a second member of the 18F team who manages [Pulse [cio.gov]](https://pulse.cio.gov/), which publishes how federal agencies are meeting best practices on the web with respect to HTTPS and the [Digital Analytics Program [digitalgov.gov]](https://www.digitalgov.gov/services/dap/).

The next phase of interviews was with the government teams, and we asked questions relating to web performance. Here are some of the questions we asked:

- How do you define web performance?
- How does web performance fit into the overall process of your agency’s website maintenance and addition of new content?
- If you are aware, do you have a general sense of how your website performs (as far as site speed goes)?
- Do you track any metrics relating to web performance?
    - If so, what are they?
    - If not, why not?
- What are some pain points you encounter relating to web performance?
- Are there any barriers or blockers in your way preventing you from achieving better performance?
- Do you look to any resources for web performance best practices?
- What potential impact would improved web performance have on your site and your users?

#### Data synthesis

After the interviews concluded, all of the notes were transferred into a virtual whiteboard for the data synthesis process. As a team, we started to move together the similar notes and natural groupings began to emerge. Each of the interviews was unique and the teams have their own challenges, but there were many similarities across the teams relating to pain points and overall needs.

Once the data was categorized and broken down into meaningful groupings, we triangulated the interview results with the comparative analysis. We mapped the user needs to the narrowed-down list of of tools taking into consideration how well the tool meets their needs. Next, we prioritized the list of needs and used the list for the next step of defining the metrics to track.

#### Limitations

Our research was designed to cover a representative sample of government agencies, but we were limited by both time on this project as well as our contacts. Although we spoke to several engineers and designers, we only interviewed one person in a leadership-level role. All of the participants are familiar with 18F and the U.S. Web Design System; we didn’t speak to anyone who was unfamiliar with our work.

## Findings

### 1. Pain points

- **It’s challenging for government teams to prioritize web performance projects and obtain resources for doing the work**. Oftentimes the teams are fully booked as is, so finding extra time to work on fixing performance issues is a difficult task. Also, some teams have a long list of performance issues to fix so being able to prioritize the items can be a strenuous task.

- **Federal agencies lack clarity regarding which tools have been approved for government use**. Following the ATO requirements and the government TOS for tools is a challenging process and the teams don’t have a clear path to getting the tools approved.

- **Government teams struggle with communicating the importance of web performance to leadership to advocate for spending time on improving their site’s performance**. There is no clear value proposition to improving web performance because it’s difficult for teams to tie improved performance to a specific impact. Many government teams anticipate pushback when advocating for spending time on web performance without the evidence for why it’s important.

- **Since there is no standard or requirement for web performance, federal agencies lack a target goal for their site**. Without having an incentive, government mandate or a target to aim for, teams have difficulty moving their agency in the direction of working on web performance improvements.

### 2. User needs

Government agencies need…

- A government-approved web performance tool that is easy to implement, recommended for them and can be built into their development process so that it’s something they don’t have to think about

- To be able to clearly see what is causing the slow web performance

- To know what their team can do to improve the aspects of the site causing slow performance

- Web performance to be explained and framed in plain language as a value-add that be communicated and understood by the whole team so they know why resources should be invested and why it should be prioritized

- To have a template for writing web performance into the SOWs/RFPs

- To be accountable for their web performance results through making performance ratings publicly accessible with an easy to understand scoring system
