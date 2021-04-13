---
title: Why track performance
permalink: /performance/why/
category: How to use USWDS
layout: styleguide
lead: Performance is an important part of user experience that shouldn’t go unnoticed
---

Through USWDS team’s research around performance, we found government teams that were purposefully deciding not to track performance, as it wasn’t a priority for them. This section of our Website Performance Guide goes over why tracking performance is always a good idea, for a new or old site. The Guide covers:

- How performance affects conversion rate
- Why different factors such as network and computer speed must be considered when tracking performance
- How users perceive differences in the speed of an interface
- Why the measurement of performance over time is important

## Conversion rate

Conversion is the rate at which customers of a website product take a desired action. The desired action depends on the website's goals and purpose. The conversion action for an e-commerce site is often a user completing a purchase, but public sector sites that don't sell anything can also use the idea of conversion. For example, the IRS site's conversion action could be when somebody successfully submits their tax returns; or the Federal Election Commission's conversion action could be when somebody successfully finds data they were looking for.

Performance has been known to be an influencing factor when it comes to the conversion rate for a site. Regardless of the user interface and its purpose, multiple studies have shown that improving performance consistently improves conversion rates over a wide range of applications. According to [surveys done by Akamai](https://www.akamai.com/us/en/about/news/press/2009-press/akamai-reveals-2-seconds-as-the-new-threshold-of-acceptability-for-ecommerce-web-page-response-times.jsp), nearly half of web users expect a site to load in two seconds or less, and they tend to abandon a site that isn’t loaded within three seconds. This means that even a relatively fast site may be losing conversion due to speed. There are real-world examples of how performance can affect conversion, such as:

- [Google found out that slowing search results by just 4/10ths of a second would reduce the number of searches by 8,000,000 per day [getelastic.com]](http://www.getelastic.com/site-speed-infographic/).
- [At Walmart, for every one second of improvement they experienced up to a 2% increase in conversions [webperformancetoday.com]](http://www.webperformancetoday.com/2012/02/28/4-awesome-slides-showing-how-page-speed-correlates-to-business-metrics-at-walmart-com/).
- [Amazon calculated that a page load slowdown of just one second could cost it $1.6 billion in sales each year [fastcompany.com]](https://www.fastcompany.com/1825005/how-one-second-could-cost-amazon-16-billion-sales).

How fast a site loads is often the first indication of what a web experience will be for a user, and a slow loading site can cause a user to quickly lose trust and patience with a website.

## Factors of performance

A common excuse by a team  for not tracking web performance, is that the site appears fast enough for them to use. This ignores a couple of important factors, including what a user might be experiencing in  performance. A site’s performance depends on factors like:

- Different network speeds, such as mobile networks
- Computing capacity of the current device

At 18F, currently, most people working on the sites being built are working on fast laptops, on wired or relatively fast connections within the United States. These factors are all conducive to good performance. A user of a site could instead be on a mobile device and mobile network, a computer outside of the United States, or a network that is congested or just plain slow. Being on a network outside the U.S., alone, could mean an extra 150 milliseconds in round trip time to the server due to the longer distance the signal has to travel, meaning seconds more time in loading a page. Different types of networks, such as satellite networks, have much higher round trip times, which again leads to longer times when loading a page. When considering how fast a site loads, it's important to consider that the network the site's users are on could perform much differently than the development team's network.

The prevalence of mobile usage of websites also significantly contributes to a site's speed for a customer. According to the [Digital analytics program [usa.gov]](https://analytics.usa.gov/), roughly 37% of traffic to government sites is from mobile devices. While wired and wi-fi networks provide relatively consistent performance, mobile networks can rapidly change from fast 4G connections, to slow 3G connections, to periods of being disconnected. Smaller devices, such as mobile phones and older devices don't have as much CPU power to quickly download and process multiple resources. By limiting the measurement of the performance of a site to just a user on a fast connection and device, a huge amount of the site’s user base could be left with a site that’s very difficult to use and interact with, due to poor performance.

## Perception of performance

Studies have shown that users perceive differences in speed of a user interface (UI) [when it changes by a ratio of 20% [sitepoint.com]](https://www.sitepoint.com/the-perception-of-performance/). To put it more simply, if a website wants to create a difference in speed that is noticeable to its users, it should perform at least 20% faster than it previously did. Changes less than 20% are usually not perceptible. This means that 20% is (somewhat of) a “golden number” when working on performance.

## Measurement of performance

It’s been shown why performance itself is important, but what does measuring it do?
Measuring performance ensures the team:

- Is aware of its importance so it doesn’t degrade
- Has a sense about what code or design changes cause performance differences, making prioritization and design decisions easier
- Understands what the user of the site’s true experience is, not just the ideal experience on a fast device and network
- Has a sense of the features they can build while designing, to stay within performance budgets, ensuring performance problems don’t even come up during the site’s development

## Conclusion

As technology becomes more prevalent in the Unites States, it's more common that the primary way Americans interact with the government is through the web. Ensuring that government sites perform quickly for all ensures that all Americans have a good user experience and aren't blocked from the web services they require. Tracking and improving a site's performance is a first step towards ensuring that a site can reach as wide of an audience as possible.
