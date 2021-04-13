---
title: HTTP/2 Performance Guide
permalink: /performance/http2/
category: How to use USWDS
layout: styleguide
---

## TL;DR:

If possible, enable HTTP/2 support on your server for dramatic performance gains. When using HTTP/2:

* Do not use the [domain splitting](#domain-splitting) technique.
* Prefer small, modular files rather than [concatenating](#concatenation) them to reduce connection overhead.

## What is HTTP/2?

HTTP/2 is the next version of [HTTP [wikipedia.org]](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol), the protocol that powers the web. HTTP/2 was originally known as [SPDY [wikipedia.org]](https://en.wikipedia.org/wiki/SPDY), a protocol invented by Google that was safer, faster, and more efficient than HTTP 1.1. Once SPDY gained traction among browser and server makers, the [Internet Engineering Task Force [ietf.org]][IETF] adopted it as the basis for HTTP/2.

## How it differs from HTTP 1.1

HTTP/2’s biggest difference is its transmission of data. Rather than sending data in plaintext, HTTP/2 transfers messages using a binary format. This binary format allows for much faster transmission as it requires fewer bytes to transfer from server to client. This, combined with HTTP/2’s new multiplexing feature, can significantly speed up website speed when downloading resources.

Multiplexing is HTTP/2’s ability to send data back and forth in parallel over one existing open connection. In HTTP 1.1 each resource (with a unique URL) requires a separate connection, and most clients limit the number of simultaneous connections to each domain. Additionally, if the server isn’t configured to keep connections open after each request, each resource must go through a multi-step handshake process before transmission, further increasing its download time. HTTP/2 changes this by allowing multiple resources to be downloaded in parallel over a single connection.

Another prominent feature of HTTP/2 is that, at least in practice, it strengthens security because browsers have only implemented HTTP/2 support for sites that are served over HTTPS. While the HTTPS handshake can add some loading time, you can reduce some of that by [configuring HTTPS](#how-to-speed-up-https). Regardless, the dramatic performance gains from using HTTP/2 will likely outweigh any additional HTTPS overhead.

For more information on HTTP/2, see [Google's developer reference](https://developers.google.com/web/fundamentals/performance/http2/).

## HTTP/2 and performance

HTTP/2 changes how resources affect a page’s download speed and how resources are downloaded from the server to the browser. Some performance improvement techniques are no longer relevant when switching from HTTP 1.1 to HTTP/2, such as [domain splitting](#domain-splitting) and [file concatenation](#concatenation).

### Domain splitting

One common performance improvement pattern for sites that require lots of resources (such as tiled web maps) is to "split" requests for resources over multiple domains. This effectively works around browser limits on the number of simultaneous requests per domain and allows more resources to be fetch in parallel.

Under HTTP/2 this pattern effectively becomes an anti-pattern, and using CDNs or servers with different domains to serve assets is no longer necessary. Servers can stream many more requests simultaneously over a single HTTP/2 connection than over a browser-limited number of parallel HTTP 1.1 connections.

### Concatenation

Concatenation is the process of combining similar file types into one file, often to reduce the number of HTTP requests necessary for a given page. Concatenating (or "bundling") scripts and stylesheets is most common and easiest to automate, but it's also possible to combine multiple images into a single image, or [sprite [css-tricks.com]](https://css-tricks.com/css-sprites/), which can reduce both the number of HTTP requests and the total page weight by better leveraging image compression algorithms.

Unlike domain splitting, concatenation is not necessarily an anti-pattern with HTTP/2. Under HTTP/2, it’s good practice to keep individual files small and ensure that resources are only served when needed. That being said, other factors can affect the the speed tradeoffs of individual resources. For example, when Khan Academy served over 300 individual JavaScript files to HTTP/2 users, they saw a degradation in performance due to less efficient compression over multiple files, and server delays related to reading each file from disk. For more information, see [Khan Academy's article [khanacademy.org]](http://engineering.khanacademy.org/posts/js-packaging-http2.htm) and [Smashing Magazine's HTTP/2 guide [smashingmagazine.com]](https://www.smashingmagazine.com/2016/02/getting-ready-for-http2/).

Generally speaking, organizing your resources into smaller, logical files rather than bundling them one large file offers the best performance over HTTP/2. The number of files that you can serve over HTTP/2 for a single URL without degrading performance depends heavily on the codebase and the server. **We suggest keeping the number of files below 50 per URL**, as that seems to be the point at which many servers suffer from having to read so many individual files from disk.

## How to upgrade to HTTP/2

Before upgrading, you should check to see if your server already supports HTTP/2. You can submit any public URL to [this tool "HTTP/2 Test" [keycdn.com]](https://tools.keycdn.com/http2-test), and it will tell you if that's the case. If not, read on!

Upgrading to HTTP/2 requires that you have administrative access to either the server or CDN that hosts your website and its assets. If your site is on a CDN not directly under your control, here are instructions for enabling HTTP/2 on some of the most common CDNs:

- [Akamai [akamai.com]](https://community.akamai.com/community/web-performance/blog/2015/01/26/enabling-http2-h2-in-akamai)
- [Cloudflare [clodeflare.com]](https://www.cloudflare.com/website-optimization/http2/)
- [Amazon CloudFront [amazon.com]](https://aws.amazon.com/about-aws/whats-new/2016/09/amazon-cloudfront-now-supports-http2/)

## How to speed up HTTPS

There are several common techniques for improving HTTPS performance under both HTTP 1.1 and HTTP/2. Most of them require direct access to your sever(s) and/or hosting environment, and specific knowledge of the tools or platforms in use. [Optimizing nginx TLS time to first byte [igvita.com]](https://www.igvita.com/2013/12/16/optimizing-nginx-tls-time-to-first-byte/) describes how to improve HTTPS performance with nginx, but the techniques are applicable in other environments.

[IETF]: http://www.ietf.org/
