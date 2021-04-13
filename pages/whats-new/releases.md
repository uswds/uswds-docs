---
permalink: /about/releases/
redirect_from:
  - /about-our-work/releases/
layout: styleguide
title: Release notes
category: About
subnav:
  data: releases
  href: ['#version-%', name]
  text: name
redirect_from:
  - /whats-new/releases/
---
<p class="site-text-intro">USWDS is an ever-evolving product. We’ve been listening to your feedback and using it as a basis for improvements and additions.</p>

<p class="site-text-intro">Here you’ll find our release notes — summaries of bug fixes, new features, and other updates introduced in each release.</p>

Have suggestions for a new feature or bug fix? [Open an issue [github.com]](https://github.com/uswds/uswds/issues/new) in our repo.

{% for release in site.data.releases %}

## Version {{ release.name }}

<p class="site-subheading">{{ release.published_at | date: "%B %d, %Y" }}</p>

{% assign id_replace = 'id="v%-' | replace: '%', release.name %}
{{ release.body | markdownify | replace: 'id="', id_replace | remove_relative_links }}

<hr>
{% endfor %}
