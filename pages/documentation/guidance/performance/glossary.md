---
title: Web performance glossary
permalink: /performance/glossary/
category: How to use USWDS
layout: styleguide
lead: Detailed information about performance methods and metrics.
subnav:
  - text: Types of metrics
    href: '#types-of-metrics'
  - text: Types of monitoring
    href: '#types-of-monitoring-methods'
  - text: Metrics and implementations
    href: '#metrics-and-implementations'
---

## Types of metrics

Discussion of web metrics requires splitting up metrics into different classifications. These are split into levels of direct metrics and indirect metrics. Direct metrics are more directly related to the user’s perception of performance, while indirect metrics affect the direct metrics.

### Direct metrics

Direct metrics are ones that measure the user’s experience of the site, most often through timed measurements of this experience (except for speed index, which is a number related to time). You can use direct metrics to: track a live site, help diagnose problems, and indicate how users are experiencing the site.

#### Primary direct metrics
The best direct metrics most accurately measure the user’s experience with the site, and are called primary direct metrics. The following primary direct metrics do a good job of measuring the user’s actual experience rather than a best guess at their experience:

- [Custom timing events](#custom-timing-events)
- [Speed index](#speed-index)
- [Meaningful first paint](#meaningful-first-paint)
- [Time to interactive](#time-to-interactive)
- [Input latency](#input-latency)

#### Secondary direct metrics
Secondary direct metrics measure the specific pieces that make up the whole user experience. They help link the problem to the experience and with the performance in general. Some useful secondary direct metrics are:

- [Render start](#render-start)
- [First paint](#first-paint)
- Total backend time or time to [first byte](#first-byte)
- [Onload](#onload)

### Indirect metrics

Indirect metrics explain the specific technical reasons for performance problems on a site. They’re not measured in time, but rather measurements that affect time. Indirect metrics can be passed to a development or design team as guidance when building a mockup or feature. They allow the team to build a UI with an indication of how it will perform.

Changes to indirect metrics *can* have an effect on direct metrics, but won't always. For instance, there are performance improvements, such as [critical CSS [smashingmagazine.com]][critical CSS], that can improve direct metrics but will have no effect (even negative) on indirect metrics. It's important to use indirect metrics only as an explanation for what's seen with direct metrics.

#### Primary indirect metrics
The primary indirect metrics are the key metrics that affect page performance. While not a perfect indicator of site speed, they tie closely to direct metrics, so a designer or developer will have an idea of the user’s perceived performance when one of the primary indirect metrics changes. The primary indirect metrics to track are:

- [Number of requests](#number-of-requests)
- [Total size (kb, mb) of requests or page weight](#total-page-weight)
- [DOM weight or total DOM nodes](#dom-nodes)

#### Secondary indirect metrics
Secondary indirect metrics are used for diagnosing performance problems or checking that the website doesn’t have any obvious performance anti-patterns. Some of them, such as DNS requests, can be used as a checklist to ensure the site doesn’t go over a normal amount. Others, such as number of [DOM nodes](#dom-nodes), can help identify a hard-to-find performance problem. Secondary indirect metrics are DNS requests, which can be used if the website architecture requires more than three different domains to be in use.

## Types of monitoring methods

Another important distinction among performance metrics is the way in which they can be monitored. The monitoring method changes how and where certain metrics can be used, and will play into the decisions of choosing metrics.

### Real time monitoring

Real time monitoring measures the performance of actual users on the site. Custom events, render start, onload, backend, number of requests, the number of DOM elements, and DOM complete events can all be monitored in real time. Speed index cannot because it's too resource-intensive to run on a user's machine.

Real time monitoring allows you to measure actual users' performance while they are interacting with the site, often in real time. This can illustrate specific performance issues and can give accurate information about people's performance across the world, on different devices, and on different network speeds. It requires a live site with enough traffic to yield statistically significant results.

Unless a site gets significant web traffic — over 200 unique users a day, or traffic based on actual users rather than just stakeholders — real time monitoring may suggest performance figures that are not representative of real-world users. This means that you should only use real time monitoring when a site is either live or receiving enough traffic to be representative of its production environment.

Real time monitoring is also subject to various fluctuations and differences in performance figures. For instance, if a part of your audience's network is slow for a day, or many of your users are using the site on mobile phones because of a news update, then the performance numbers for that day will be off. This makes it potentially harder to associate code changes and releases with performance changes. It also makes it potentially more difficult to compare your site’s performance with a similar site, as yours might have factors which affect performance and that are out of your control, such as more global or mobile users. This means that the best use case for real time monitoring is to understand your audience. Real time monitoring should be used with caution when doing comparative analysis or tracking performance over time through code changes.

### Synthetic monitoring

Synthetic monitoring tests a site’s performance in a simulated and consistent environment. This includes running a performance tool as part of the build, or using a tool to run automated ([webpagetest.org](https://www.webpagetest.org/) tests against a site. Speed index is the classic synthetic monitoring metric, perhaps because speed index can only be used in a simulated environment. While speed index cannot be used in a real time environment, any of the real time monitoring metrics can also be used in a synthetic environment. This means custom events, render start, and number of requests can all be used in synthetic monitoring.

Synthetic monitoring provides a relatively consistent control for tests, as the environment in which the tests run can be invariable, allowing you to isolate the performance changes. It’s a better method for comparing your site’s performance against competitors or similar sites, and for monitoring the site’s performance consistently through code/design changes and releases. It can also be a great tool for testing small performance tweaks.

While synthetic monitoring is the best way to receive consistent performance monitoring results, the results will never be 100% consistent for any timed measurements, such as custom events or speed index. Many factors, such as other tasks running on the testing computer and network speed fluctuations, can affect performance. It’s important to remember this when using synthetic monitoring, and to deter it by running enough tests to be statistically significant and/or to be skeptical about performance measurements that vary less than 5%.

## Metrics and implementations

The following gives a brief overview of a handful of metrics. If you're looking for guidance on which metrics are best for your team to start with, view the [how to guide on performance](../how#choosing-metrics-amp-tools).

### Onload

[The `load` event [mozilla.org]](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload) fires at the end of the document loading process. At this point, all of the objects in the document are in the DOM, and all the images, scripts, links, and sub-frames have finished loading.

#### Pros
- Easy to calculate for most pages
- Can be calculated in any environment, on almost any browser

#### Cons
- It's not a valid metric for perceived user performance because the page may be fully rendered and active before the `load` event fires. For more information see: [Steve Souders, moving beyond window onload [stevesouders.com]](https://www.stevesouders.com/blog/2013/05/13/moving-beyond-window-onload/).

#### How to measure
Onload can be measured in the browser with the [performance API [mozilla.org]](https://developer.mozilla.org/en-US/docs/Web/API/Performance), which is available in all browsers except Internet Explorer 9 or earlier and Safari:

```
  function accurateMeasurement() {
    setTimeout(function() {
      window.performance.measure('navigationStart', 'loadEventEnd');
      var measure = window.performance.getEntriesByName('navigationStart');
      console.log('onload', measure[0]);
    }, 0);
  }
  window.addEventListener('load', accurateMeasurement);
```

Another, less accurate method that works in all browsers is to use the JavaScript Date object:

```
<head>
  <script type="text/javascript">
    var onLoadStart = new Date().getTime();
    function crossBrowserMeasurement() {
      setTimeout(function() {
        var onLoadNow = new Date().getTime();
        var latency = onLoadNow - onLoadStart;
        console.log("onload " + latency);
      }, 0);
    }
    window.addEventListener('load', crossBrowserMeasurement);
  </script>
</head>
```

**This method is not recommended**, as it has the following limitations:

- The JavaScript Date object is not accurate enough to measure sub-second performance.
- It won't work with services that use performance API measurements, so this data will have to be captured separately.

### Speed index

Speed index is a score for the visual completeness of the page — above the fold (what’s visible to the user) — over time. It uses video capture to calculate this score. Created by [WebPagetest][WebPagetest], it's a score from 0 to infinity that maps approximately to milliseconds of time before the page is completely visible to the user. A lower score is better.

#### Pros
- Accurately measures user’s perceived performance

#### Cons
- Requires a live URL to test, or
- Requires a [WebPagetest][WebPagetest] instance or service

#### How to measure

##### With [WebPagetest]

1. Go to [webpagetest.org][WebPagetest]
2. Enter the live URL of the website to test.
3. Click on the “Advanced options” dropdown.
4. Set the “Number of tests” to be run to at least three. This can be modified based on difference in test results.
5. Click “Start test”.

##### With [SpeedCurve]

Sign up for a paid [SpeedCurve account [speedcurve.com]](https://speedcurve.com/pricing/).

##### With a custom WebPagetest instance

1. Set up a WebPagetest [AWS instance [peterhedenskog.com]](https://www.peterhedenskog.com/blog/2015/07/private-wpt-instance/).
2. Create a `wpt.json` file with the following contents:

    ```json
    {
      "timeout": 200,
      "location": "ec2-us-west-1:Chrome"
    }
    ```

3. Install the [sitespeed.io](https://www.sitespeed.io/) npm module:

    ```
    npm install sitespeed.io
    ```

### Custom timing events

Custom metrics are millisecond or second timings of how long a specific feature takes to be visible to the user. This metric is sometimes called "hero image timing," as companies often use the hero image, or large banner, on their site as the custom event to test.

The typical example of a custom metric is Twitter using a "time to first tweet." In this case, Twitter measures the time in milliseconds for the first tweet to appear to the user.

#### Pros
- Very closely related to the organization's goals for the site
- Good at testing user perceived performance, such as speed index, but does not require a live URL or complex testing setup

#### Cons
- Challenging to manage on a site where the object being timed changes often, such as a blog
- Hard to manage on sites with many different page templates

#### How to measure
1. Pick an event to measure. The event will be more accurate if it includes an image.
2. Include a performance mark right after the HTML code with the event.

```html
<!-- important thing to measure -->
<div>
  <img>
</div>
<script>
  window.performance.mark('important after')
</script>
```

3. Also mark the same performance mark on image load to ensure whatever happens latest is the actual measure

```html
<div>
  <img onload="window.performance.mark('important image');">
</div>
```

### First meaningful paint

[First meaningful paint [google.com]](https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint) is a browser-supplied metric that measures how long it takes for the most meaningful content to be fully rendered on the site. Measurement involves watching all layout events as the page loads, filtering by events for new objects above the page fold, and then accounting for web font loading. By using these heuristics, the metric is a relatively accurate measure of how long it takes for the most important content on the site to be fully rendered. This was confirmed by having first meaningful paint tested against speed index for a large number of sites. This metric is closely related to speed index, as both are accurate measurements of a user’s perceived performance.

#### Pros
- Similar to speed index, it is a very accurate measurement of how the user perceives the performance of a site.
- Does not require a complex testing setup or live URL

#### Cons
- Only available in Google Chrome

#### How to measure
First meaningful paint can be measured in one of two ways:

##### Lighthouse
[Lighthouse [google.com]][Lighthouse], the Chrome plugin and command line testing tool, includes first meaningful paint as one of the metrics it tests. To test, run either the plugin on your site or the [CLI tool [google.com]](https://developers.google.com/web/tools/lighthouse/#cli) with the appropriate options.

##### Chrome web browser
You can measure first meaningful paint timing for any page in the [Chrome DevTools Timeline [google.com]](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool).

### Time to interactive

Time to interactive measures how long it takes for a site to be available for user interactions. Google defines it as:

> [...] the point at which layout has stabilized, key webfonts are visible, and the main thread is available enough to handle user input.

This metric can be calculated through the browser timings API, [the `PerformanceTiming.domInteractive` property [mozilla.org]](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domInteractive), or through speed index timings that take into account asset and script loading and execution that block the main thread. `PerformanceTiming.domInteractive` is an inaccurate measurement because it accounts for all DOM, blocking script, and style requests to be complete. This can lead to very large numbers, even when the user was actually able to interact with the page before all of those tasks completed. For more accurate measurements you should use other implementations of the metric, such as what’s provided by [Lighthouse [google.com]][Lighthouse].

Time to interactive can be nicely paired with speed index or first meaningful paint, as both test when the page is visually complete, while time to interactive tests when the page can be interacted with by the user. The purpose and the content of the site will determine which metric is more important, and may determine whether time to first interactive is even necessary to measure. For example, if the site is heavy on content (such as a blog), then first interactive may not be necessary because the user’s only "interaction" with the site is to read it.

#### Pros
- For some sites, interaction may be more important than everything visually appearing, meaning this is a very important metric.
- Relatively easy to test with [Lighthouse [google.com]][Lighthouse]

#### Cons
- May not provide useful data for content-heavy sites without interactive elements
- May not be possible to test in browsers other than Chrome

#### How to measure
Time to interactive can be measure in one of two ways:

##### Lighthouse

[Lighthouse [google.com]][Lighthouse], the Chrome plugin and command line testing tool, includes time to interactive as one of the metrics it tests. To test, run either the plugin on your site or the [CLI tool [google.com]](https://developers.google.com/web/tools/lighthouse/#cli) with the appropriate options.

##### Chrome web browser

Time to interactive can be found in statistics in the Chrome browser.

### Input latency

Input latency is the amount of time it takes for the app to respond to the users as they interact with it. It’s very different than the other metrics, as it doesn’t relate to the initial load and displaying of the page; it’s a metric that is constantly being tracked over time, as the user interacts with the site. Due to how input latency works, it’s often best served as a [RUM metric](#real-time-monitoring), as it’s more accurate to gather information as real users are interacting with the site. It’s also possible to test [synthetically](#synthetic-monitoring). For more information, see [Lighthouse's input latency documentation [google.com]](https://developers.google.com/web/tools/lighthouse/audits/estimated-input-latency).

#### Pros
- It's the only metric that tests how the site responds over time as the user interacts with it.

#### Cons
- Harder to quantify with other metrics
- Hard to measure accurately

#### How to measure
The only known way to test input latency right now is with [Lighthouse [google.com]][Lighthouse]. This tool is able to keep a watch on the browser thread to know when it’s free after a user clicks on or interacts with the site.

### Render start

Render start is the time from the [first byte](#first-byte) to when the browser draws the first pixel on the screen. It is a [synthetic](#synthetic-monitoring) metric, as there’s no way to get the metric from the browser itself. It is closely related to [first paint](#first-paint), but it's more accurate because it's calculated via visual cues. It's also harder to test than first paint because it requires screen capturing. See [this WebPagetest discussion [webpagetest.org]](https://www.webpagetest.org/forums/showthread.php?tid=13265) for more information.

Render start measures how long it takes for blocking scripts, style sheets, and other processes to complete before the browser can start rendering the page. It will point to problems in the request pipeline, such as not deferring or placing scripts at the end of the document, or requiring too many blocking CSS resources. It’s generally less useful than more complete visual metrics, such as [speed index](#speed-index) and [first paint](#first-paint).

#### Pros
- It's very accurate.

#### Cons
- Requires complex testing setups such as [WebPagetest]
- Isn't as thorough as speed index and meaningful first paint

#### How to measure
Render start can be measured along with speed index with [WebPagetest] or similar tools. For more information, see the [speed index](#speed-index) instructions.

### First paint

First paint is a browser-based metric supplied that indicates the amount of time from [first byte](#first-byte) to the first pixel rendered. Unfortunately, this metric is inaccurate in some browser implementations, and some report the event too early, before anything has been rendered to the screen. Due to these limitations, it should be used with care.

The main reason to use first paint over the more accurate [render start](#render-start) is its ease of use in [realtime user monitoring](#real-time-monitoring), as it’s available in most browsers.

#### Pros
- Can be accessed via realtime user monitoring
- Very easy to test

#### Cons
- Not accurate in some browsers
- Sometimes not accurate at all

#### How to measure

First paint can be accessed via the [performance timing API [mozilla.org]][performance timing API] in supported browsers, such as recent versions of Chrome, Firefox, and Internet Explorer. In Internet Explorer it can be accessed via `performance.timing.msFirstPaint` ([more info from Microsoft](https://msdn.microsoft.com/en-us/library/ff974719(v=vs.85).aspx)). In Chrome it can be accessed via `window.chrome.loadTimes().firstPaintTime` ([more info from Chrome [github.com]](https://gist.github.com/acdha/a1fd7e91f8cd5c1f6916)). It’s also available in most testing tools.

### First byte

First byte is time from which the first request went out from the browser to the server, to when the first byte from the server comes back to the browser. It measures the time it takes the browser to respond, so it's sometimes called "backend time".

#### Pros
- Good way to find problems with backend systems related to performance
- Easy to test, and available in most testing tools

#### Cons
- Doesn't tell the big picture, like speed index or meaningful first paint
- Doesn't get into details of backend response, so might be better served by more backend-related tools rather than browsers

#### How to measure
First byte is available in the standardized Navigation Timing API for any browsers that support it. It’s under the `responseStart` event. It’s also available in most testing tools.

### Total page weight

This metric, also called "total requests", is an accrual of all a site's resource weights, measured in kilobytes or megabytes, including the HTML of the page itself. It's useful for setting weight budgets on a site, which are easy to pass to developers and designers. It doesn't always tell the whole story of performance, as performance often depends on how a page loads those requests.

#### Pros
- Easy understand at all points in the process, from design to development
- Easy to test
- Can be tested with [RUM](#real-time-monitoring)

#### Cons
- Doesn't tell the whole story of site performance, as it also matters how the resources are loaded

#### How to measure
Total resource weight can be calculated with the [resource timing API [mozilla.org]](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API):

```js
var pageWeightInBytes = performance.getEntriesByType('resource')
  .reduce(function(weight, entry) {
    return weight + entry.encodedBodySize;
  }, 0);
```

It’s also available in most testing tools.

### Number of requests

The number of requests is the total number of requests that the page makes while loading resources such as CSS, JS, fonts, and images. This metric is much less important when the site is served over [HTTP/2] because that protocol does not limit the number of concurrent requests. (Each file is requested individually over HTTP 1.x, and browsers limit the number of concurrent requests from each domain.) It's important to know whether the site requests resources from multiple domains when measuring total number of requests, as the number of domains can impact how the browser can processes these requests in parallel.

Note: The number of requests matters much less if your site is being served over HTTP/2. For more information on HTTP/2 and it's implications on site speed, [see our guide](/performance/http2).

#### Pros
- Very easy to test

#### Cons
- Will become obsolete for any site served over HTTP/2
- Doesn't account for resources being served over multiple domains, so doesn't always impact performance directly

#### How to measure

The number of requests can be obtained with the [resource timing API [mozilla.org]](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API):

```js
var numberOfRequests = performance.getEntriesByType('resource').length;
```

### DOM Nodes

The number of DOM nodes is a rough measure of the amount of HTML content on the page. It refers to how many elements or tags (`<h1>`, `<p>`, `<span>`, etc.) the page contains. While the number of DOM nodes doesn’t affect network performance, it does affect browser performance. A browser will take a longer time to parse, process, and render a page if it has more nodes.

When relating DOM node count to performance, it’s usually more important to maintain a high upper limit rather than continually trying to reduce the count. This is because DOM nodes only become a problem for performance when there are a lot of them --- specifically, upwards of 1,500. Removing a small number of DOM nodes from your site if there are already fewer than 1,500 won't have a noticeable affect on performance. DOM node count also relates to input latency: If the browser has too many DOM nodes to manage, it will not be able to keep up with the user’s interactions as quickly.

#### Pros
- Easy to test
- Can be tested with [RUM](#real-time-monitoring)

#### Cons

- Reducing the number of DOM nodes doesn’t usually have a large impact on performance.

#### How to measure

You can access the number of DOM nodes on any page via the DOM API in all browsers:

```js
var numberOfElements = document.getElementsByTagName('*').length;
```

[critical CSS]: https://www.smashingmagazine.com/2015/08/understanding-critical-css/
[WebPagetest]: https://www.webpagetest.org/
[SpeedCurve]: https://speedcurve.com/
[Lighthouse]: https://developers.google.com/web/tools/lighthouse/
[performance timing API]: https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming
[HTTP/2]: https://en.wikipedia.org/wiki/HTTP/2
