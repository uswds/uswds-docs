---
title: Improvements to our banner content and code
tags:
- updates
category: About
author: Ammie Farraj Feijoo, Dan O. Williams
meta:
  og:image: /img/banner-blog/banner-blog-post.jpg
excerpt: We improved the security banner that's featured on many government websites and we encourage teams to update to this new security language as soon as possible.
---

{% capture lock-icon %}<span class="icon-lock"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" class="usa-banner__lock-image" role="img" aria-label="A locked padlock"><title>Lock</title><desc>A locked padlock</desc><path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"/></svg></span>{% endcapture %}

{:.width-full.tablet:width-tablet-lg.maxw-full.tablet:maxw-tablet-lg}
![A colorful collection of screens and interface components, including the banner]({{ site.baseurl }}/img/banner-blog/banner-blog-post.jpg)

## Update to the new security language as soon as possible

This July, in USWDS 2.8.0, we updated the security language in our banner component and we encourage sites to update their banners to reflect this change as soon as possible. Research shows the banner is an effective way to help visitors understand that a U.S. government website is official and secure. The update we made to the language improves the way we talk about site security.

## What the banner does
Most government sites should use the USWDS banner to identify as an official website. The banner's "Here's how you know" section helps visitors understand how to tell when a government website is both official and secure. Specifically, it explains that the combination of an official .gov or .mil domain and a secure HTTPS connection together are the best way to be assured you're connected to an official site.

The clarity and correctness of our message builds trust. For example, in August 2019, USAGov conducted user interviews asking “What makes a government website trustworthy?” Answers included:

- A .gov domain
- The “An official website of the U.S. government” banner
- A security certificate (HTTPS)

In addition to identification and trustworthiness, the banner also provides visual and structural continuity between government sites. That's why it's extra important that the language and display of the banner is up-to-date and consistent.

## Why we updated the banner
We knew from user feedback that we wanted to be as clear as possible that trustworthiness is based on _the combination_ of an official top-level domain (like .gov or .mil) and a secure HTTPS connection. We noted that indicators of HTTPS may take a couple distinct forms. For example, browsers often hide or mask the HTTPS section of a URL and instead only show a lock icon. Also, knowing that each government top-level domain (.gov and .mil) has a specific usage and requirement, we wanted to give an accurate description of which sites use each.

All of this needed to use plain language that's easy for anyone to understand. And to better support access to government information and services for people with limited English proficiency, we developed official language support for other languages, starting with Spanish.

## When to use the banner
You should use the banner to identify a site as an official government site, which means most government sites should use the banner. If you are unable to update to USWDS 2.8.0 or higher but you still want to include the new language in your banner, we recommend editing your content to the language outlined below — as long as the site fits the requirements. You shouldn't use the banner if you don’t use a .gov or .mil domain *and* HTTPS.

Also consider something else if it would be misleading to use the banner component. Since the banner should be used to reduce confusion, avoid using it on any site meant only for testing or in other cases when the site is not meant to be identified as an official government website.

## Updated security language

As of USWDS 2.8.0, we’re encouraging teams to update their banners with the following content. Each section has slightly different language depending on whether the site uses a .gov or a .mil top-level domain. Use the version appropriate to your site's domain.

{:.border-top-1px.padding-top-2}
### Closed banner
> **An official website of the United States government** Here’s how you know

*This text is unchanged from earlier versions.*

{:.border-top-1px.padding-top-2}
### Section 1: Top-level domain

#### English (.gov domains)
> **Official websites use .gov**
>
> A **.gov** website belongs to an official government organization in the United States.

#### Spanish (.gov domains)
> **Los sitios web oficiales usan .gov**
>
> Un sitio web **.gov** pertenece a una organización oficial del Gobierno de Estados Unidos.

#### English (.mil domains)
> **Official websites use .mil**
>
> A **.mil** website belongs to an official U.S. Department of Defense organization.

#### Spanish (.mil domains)
> **Los sitios web oficiales usan .mil**
>
> Un sitio web **.mil** pertenece a una organización oficial del Departamento de Defensa de EE. UU.

{:.border-top-1px.padding-top-2}
### Section 2: HTTPS

#### English (.gov domains)
> **Secure .gov websites use HTTPS**
>
> A **lock** ({{ lock-icon }}) or **https://** means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.

#### Spanish (.gov domains)
> **Los sitios web seguros .gov usan HTTPS**
>
> Un **candado** ({{ lock-icon }}) o **https://** significa que usted se conectó de forma segura a un sitio web .gov. Comparta información sensible sólo en sitios web oficiales y seguros.

#### English (.mil domains)
> **Secure .mil websites use HTTPS**
>
> A **lock** ({{ lock-icon }}) or **https://** means you’ve safely connected to the .mil website. Share sensitive information only on official, secure websites.

#### Spanish (.mil domains)
> **Los sitios web seguros .mil usan HTTPS**
>
> Un **candado** ({{ lock-icon }}) o **https://** significa que usted se conectó de forma segura a un sitio web .mil. Comparta información sensible sólo en sitios web oficiales y seguros.

## Next steps
- [Update your banner copy as soon as possible](https://designsystem.digital.gov/components/banner)
- [Join the USWDS community [digital.gov]](https://digital.gov/communities/uswds/) to contribute to design and development
- [Submit an issue [github.com]](https://github.com/uswds/uswds/issues/new) if you find a bug or have an idea for an improvement
