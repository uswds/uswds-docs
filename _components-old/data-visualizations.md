---
permalink: /components/data-visualizations/
layout: styleguide
type: element
title: Data visualizations
category: Components
lead: Data visualizations help communicate patterns and relationships in a data set.

subnav:
- text: General guidance
  href: '#general-guidance'
- text: Line charts
  href: '#line-charts'
- text: Bar charts
  href: '#bar-charts'
---
<div class="site-note"><strong>Note:</strong> The data visualizations components are guidance-only and do not include any <code>Component Code</code>. The examples of specific visualizations included with our guidance are intended to be a demonstration of one way to implement our guidance with a focus on accessibility and assistive tooling.</div>
<section class="site-component-section">
  <h2 id="general-guidance" class="usa-heading-alt">General guidance</h2>
  <p>Usability and accessibility are complementary goals for data visualizations.</p>
  <h3 class="margin-bottom-1">Simplicity</h3>
  <ul class="usa-content-list">
    <li><strong>Prefer common visualization types.</strong> Use data visualizations types that your target audience understands. When the level of the audience's data literacy is unknown, stick to well-used types (like line and bar charts) for explanatory visualizations.</li>
    <li><strong>Don't try to do too much.</strong> Limit the 'big idea' expressed in a visualization to a central theme. Use no more than two or three concepts to reduce the cognitive load placed on the audience.</li>
    <li><strong>Use color with care.</strong> Simplify color selection and don't reuse colors for different variables or within a particular variable. If you are finding this difficult, it may indicate too many concepts are present for a single visualization. When selecting colors, be sure to meet contrast requirements.</li>
  </ul>
  <h4>References</h4>
  <ul class="usa-content-list">
    <li><a href="https://medium.com/nightingale/how-to-choose-the-colors-for-your-data-visualizations-50b2557fa335">Choosing Colors</a>&nbsp; [medium.com]</li>
    <li><a href="https://venngage.com/blog/color-blind-friendly-palette/">Color Contrast and Color Blindness</a>&nbsp; [venngage.com]</li>
  </ul>
  <h3>Lossless representation</h3>
  <ul class="usa-content-list">
    <li><strong>Avoid embedded information.</strong> Avoid embedding information as part of an image. Provide a textual representation of axis values and labels, and provide the ability to get a tabular representation of the underlying data.</li>
    <li><strong>Reduce interaction.</strong> Even simple interactions have a usability cost. Your audience shouldn't be required to interact with a visualization to understand its message. Presuming the ability to use a mouse to hover over page elements eliminates portions of the audience from the full experience.</li>
  </ul>
  <h3>Clarity of intent</h3>
  <ul class="usa-content-list">
    <li><strong>Provide context-sensitive explanations.</strong> Data visualization authors should consider the audience's experience when providing the background for the information they're sharing. Provide explanations or summaries that make sense to the target audience not just the author.</li>
    <li><strong>Get to the point.</strong> If the visualization is intended to explain a specific point, don't leave the audience guessing as to the conclusion they're meant to draw.</li>
    <li><strong>Clearly state the author's intended message as text.</strong> This avoids unintended ambiguity and helps the audience understand the visualization's intention. </li>
  </ul>
  <h3>Accessibility</h3>
  <ul class="usa-content-list">
    <li>Solve for individual impacted groups, and be specific in your solutions.</li>
    <li><strong>Provide equivalent access.</strong>
      <ul>
        <li>Semantic headings and descriptions that provide the author's stated intent support assistive technologies and deliver a clear message to across audiences.</li>
        <li>Screen readers might have difficulty reading content within an SVG. Provide an screen-reader accessible data table of the information represented in your visualization using the class <code>usa-sr-only</code>. When providing accessible equivalent, you can hide the visualization using the attribute <code>aria-hidden="true"</code>. The information in both of the example charts on this page is made accessible to screen readers with a visually-hidden table. <strong>Note:</strong> This is not always a sufficient alternative for complex data sets.</li>
      </ul>
    </li>
    <li><strong>Provide equivalent facilitation.</strong>
      <ul>
        <li>Access to the underlying data provides an alternative affordance for consuming the same information, but a data table does not provide an equivalent narrative to a visualization.</li>
        <li>Increase accessibility by providing additional information that the visualization communicates (like trends or a statistical summary) in plain text, using a screen reader–only class like <code>.usa-sr-only</code>.</li>
      </ul>
    </li>
    <li><strong>Focus on manual testing.</strong> Become familiar with testing tools and browser plugins. But only manual testing can check  context and intent. The use of automated or mechanical checks can verify the presence of tags, not the proper content.</li>
    <li><strong>Choose an accessible charting tool.</strong> There are many charting tools available, but not many adequately support accessibility. When using a 3rd-party tool, look for features such as:
      <ul>
        <li>Support for accessible patterns and colors</li>
        <li><a href="https://www.perkinselearning.org/technology/blog/sonification-sounds-meaning-activity">Sonification as a audio tool for visual impairment and analysis</a>&nbsp; [perkinselearning.org]</li>
        <li>Announcement handling</li>
      </ul>
    </li>
  </ul>
  <h4>References</h4>
  <ul class="usa-content-list">
    <li><a href="https://accessibility.digital.gov/visual-design/data-visualizations/">Accessibility for Teams</a>&nbsp; [digital.gov]</li>
    <li><a href="https://www.section508.gov/test">508 testing</a>&nbsp; [section508.gov]</li>
    <li><a href="https://www.matuzo.at/blog/testing-with-tab/">Accessibility testing with tab key</a>&nbsp; [matuzo.at]</li>
    <li><a href="https://www.access-board.gov/">United States Access Board</a>&nbsp; [access-board.gov]</li>
  </ul>
</section>

<section id="section-linechart" class="site-component-section">
<h2 class="usa-heading-alt" id="line-charts">Line charts</h2>

<p class="site-text-intro">Line charts are ideal for depicting trends in data over time using a continuous line.</p>

<h3>Guidance</h3>
<p>In addition to the general guidance above, the following line chart guidance applies:</p>
<ul class="usa-content-list">
  <li>Line charts origin should start at zero, unless clearly noted.</li>
  <li>If high contrast color selection is not an option, the usage of discrete dash or datapoint styles distinguishes lines without relying upon color.</li>
</ul>


<h3>Example line chart</h3>
<div class="border bg-white padding-2 margin-bottom-2 margin-top-1 radius-md padding-bottom-0">

<h4 class="margin-0">Search interest in Franklin D. and Theodore Roosevelt for the first week of March, 2020</h4>
<p class="margin-top-1 font-sans-2xs text-base margin-bottom--3">Search interest in Franklin D. Roosevelt has been consistently higher than Theodore Roosevelt. Numbers represent search interest relative to the highest point on the chart for the given region and time. A value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. A score of 0 means there was not enough data for this term.</p>

<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="LineChart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 viewBox="0 0 1020.29 660.46" style="enable-background:new 0 0 1020.29 660.46;" xml:space="preserve" aria-hidden="true">
<style type="text/css">
.line-st0{fill:none;stroke:#71767a;stroke-miterlimit:10;}
.line-st0-light{fill:none;stroke:#dfe1e2;stroke-miterlimit:10;}
.line-st2{font-size:27px;}
.line-st3{fill:none;stroke:#FA9441;stroke-width:5;stroke-miterlimit:10;}
.line-st4{fill:none;stroke:#005EA2;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;}
.line-st5{fill:none;stroke:#005EA2;stroke-width:6;stroke-linecap:round;stroke-miterlimit:10;}
.line-st6{fill:#C05600;}
.line-st7{fill:#005EA2;}
.line-st8{font-size:24px;}
.font-svg-main{font-size:26px;}
</style>
<g id="Roosevelts">
<g>
  <line class="line-st0" x1="69.45" y1="574.89" x2="971.08" y2="574.89"/>
</g>
<g>
  <g>
    <text transform="matrix(1 0 0 1 41.5112 586.7432)" class="line-st1 line-st2">0</text>
    <text transform="matrix(1 0 0 1 27.6606 469.9014)" class="line-st1 line-st2">25</text>
    <text transform="matrix(1 0 0 1 27.6606 353.0591)" class="line-st1 line-st2">50</text>
    <text transform="matrix(1 0 0 1 27.6606 236.2168)" class="line-st1 line-st2">75</text>
    <text transform="matrix(1 0 0 1 13.8101 119.375)" class="line-st1 line-st2">100</text>
  </g>
  <line class="line-st0" x1="69.45" y1="574.89" x2="69.45" y2="107.53" stroke-width='1px' vector-effect="non-scaling-stroke"/>
  <g>
    <g>
      <line class="line-st0" x1="69.45" y1="574.89" x2="971.08" y2="574.89" stroke-width='1px' vector-effect="non-scaling-stroke"/>
      <line class="line-st0-light" x1="69.45" y1="458.05" x2="971.08" y2="458.05" stroke-width='1px' vector-effect="non-scaling-stroke"/>
      <line class="line-st0-light" x1="69.45" y1="341.21" x2="971.08" y2="341.21" stroke-width='1px' vector-effect="non-scaling-stroke"/>
      <line class="line-st0-light" x1="69.45" y1="224.37" x2="971.08" y2="224.37" stroke-width='1px' vector-effect="non-scaling-stroke"/>
      <line class="line-st0-light" x1="69.45" y1="107.53" x2="971.08" y2="107.53" stroke-width='1px' vector-effect="non-scaling-stroke"/>
    </g>
    <g>
    </g>
  </g>
</g>
<g>
  <g>
    <line class="line-st3" x1="73.43" y1="42.89" x2="186.14" y2="42.89" stroke-dasharray="4 1"/>
    <g>
      <line class="line-st3" x1="262.66" y1="168.28" x2="133.85" y2="355.23" stroke-dasharray="4 1"/>
      <line class="line-st3" x1="391.46" y1="149.59" x2="262.66" y2="168.28" stroke-dasharray="4 1"/>
      <line class="line-st3" x1="520.27" y1="172.96" x2="391.46" y2="149.59" stroke-dasharray="4 1"/>
      <line class="line-st3" x1="649.07" y1="107.53" x2="520.27" y2="172.96" stroke-dasharray="4 1"/>
      <line class="line-st3" x1="777.88" y1="210.35" x2="649.07" y2="107.53" stroke-dasharray="4 1"/>
      <line class="line-st3" x1="906.68" y1="392.62" x2="777.88" y2="210.35" stroke-dasharray="4 1"/>
    </g>
  </g>
  <g>
    <line class="line-st4" x1="622.43" y1="43" x2="735.14" y2="43"/>
    <g>
      <line class="line-st4" x1="262.66" y1="341.21" x2="133.85" y2="434.68"/>
      <line class="line-st4" x1="391.46" y1="359.9" x2="262.66" y2="341.21"/>
      <line class="line-st4" x1="520.27" y1="378.6" x2="391.46" y2="359.9"/>
      <line class="line-st4" x1="649.07" y1="359.9" x2="520.27" y2="378.6"/>
      <line class="line-st5" x1="777.88" y1="392.62" x2="649.07" y2="359.9"/>
      <line class="line-st5" x1="906.68" y1="472.07" x2="777.88" y2="392.62"/>
    </g>
  </g>
</g>
<g>
  <g>
    <g>
      <circle class="line-st6" cx="129.79" cy="42.89" r="8"/>
    </g>
    <g>
      <g>
        <circle class="line-st6" cx="133.85" cy="355.23" r="8"/>
      </g>
      <g>
        <circle class="line-st6" cx="262.66" cy="168.28" r="8"/>
      </g>
      <g>
        <circle class="line-st6" cx="391.46" cy="149.59" r="8"/>
      </g>
      <g>
        <circle class="line-st6" cx="520.27" cy="172.96" r="8"/>
      </g>
      <g>
        <circle class="line-st6" cx="649.07" cy="107.53" r="8"/>
      </g>
      <g>
        <circle class="line-st6" cx="777.88" cy="210.35" r="8"/>
      </g>
      <g>
        <circle class="line-st6" cx="906.68" cy="392.62" r="8"/>
      </g>
    </g>
  </g>
  <g>
    <g>
      <circle class="line-st7" cx="678.79" cy="43" r="8"/>
    </g>
    <g>
      <g>
        <circle class="line-st7" cx="133.85" cy="434.68" r="8"/>
      </g>
      <g>
        <circle class="line-st7" cx="262.66" cy="341.21" r="8"/>
      </g>
      <g>
        <circle class="line-st7" cx="391.46" cy="359.9" r="8"/>
      </g>
      <g>
        <circle class="line-st7" cx="520.27" cy="378.6" r="8"/>
      </g>
      <g>
        <circle class="line-st7" cx="649.07" cy="359.9" r="8"/>
      </g>
      <g>
        <circle class="line-st7" cx="777.88" cy="392.62" r="8"/>
      </g>
      <g>
        <circle class="line-st7" cx="906.68" cy="472.07" r="8"/>
      </g>
    </g>
  </g>
</g>
<g>
  <g>
  </g>
  <text class="font-svg-main" transform="matrix(1 0 0 1 200.2261 50.7432)">Franklin D. Roosevelt</text>
  <text class="font-svg-main" transform="matrix(1 0 0 1 749.2261 50.8486)">Theodore Roosevelt</text>
</g>
<g>
  <text class="font-svg-main" transform="matrix(1 0 0 1 88.8032 613.895)">Mar. 1</text>
  <text class="font-svg-main" transform="matrix(1 0 0 1 217.6079 613.895)">Mar. 2</text>
  <text class="font-svg-main" transform="matrix(1 0 0 1 346.4126 613.895)">Mar. 3</text>
  <text class="font-svg-main" transform="matrix(1 0 0 1 475.2173 613.895)">Mar. 4</text>
  <text class="font-svg-main" transform="matrix(1 0 0 1 604.022 613.895)">Mar. 5</text>
  <text class="font-svg-main" transform="matrix(1 0 0 1 732.8267 613.895)">Mar. 6</text>
  <text class="font-svg-main" transform="matrix(1 0 0 1 861.6313 613.895)">Mar. 7</text>
</g>
</g>
</svg>

  <table class="usa-sr-only" aria-describedby="source_line">
    <caption>Search interest in the Roosevelts first week of March, 2020</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">March 1</th>
        <th scope="col">March 2</th>
        <th scope="col">March 3</th>
        <th scope="col">March 4</th>
        <th scope="col">March 5</th>
        <th scope="col">March 6</th>
        <th scope="col">March 7</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Franklin D. Roosevelt</th>
        <td>47</td>
        <td>87</td>
        <td>91</td>
        <td>86</td>
        <td>100</td>
        <td>78</td>
        <td>39</td>
      </tr>
      <tr>
        <th scope="row">Theodore Roosevelt</th>
        <td>30</td>
        <td>50</td>
        <td>46</td>
        <td>42</td>
        <td>46</td>
        <td>39</td>
        <td>22</td>
      </tr>
    </tbody>
  </table>
  <p id="source_line">Source: <a href="https://trends.google.com/trends/explore?date=2020-03-01%202020-03-07&geo=US&q=%2Fm%2F07hyk,%2Fm%2F02yy8">Google Trends</a></p>
  </div>

  <h3>What we did in our line chart example</h3>
  <ul class="usa-content-list">
    <li><strong>There is a clear summary.</strong> Users may not understand some narrative objectives from a graphic alone. The visualization also explains what the chart intends to communicate in plain language.</li>
    <li><strong>The lines are visually distinct from each other.</strong> One is a solid color, and the other uses both a dash pattern and a color contrast between the line and the indicators. The indicators can also be triangles, squares, or other simple shapes. Typically, multiple indicator shapes and textures are most useful when comparing more than three data sets.</li>
    <li><strong>The graphic is hidden from screen readers.</strong> Because the data set is fairly simple, non-visual users will be able to read the same data in the form of data table that's hidden from visual users but accessible to screen readers. If the data were more complex, we might consider using a 3rd party charting tool with support for accessibility as described above.</li>
    <li><strong>Original data linked.</strong> We linked back to the original source data for the line chart.</li>
  </ul>

  <h3>References</h3>
  <ul class="usa-content-list">
    <li><a href="https://accessibility.psu.edu/images/charts/">Chart Accessibility guidance</a> &nbsp; [psu.edu]</li>
  </ul>

</section>
<section id="section-barchart" class="site-component-section">
  <h2 class="usa-heading-alt" id="bar-charts">Bar charts</h2>

  <p class="site-text-intro">Bar charts are ideal for displaying categorical data.</p>

  <h3>Guidance</h3>
  <p> In addition to the general guidance above, the following bar chart guidance applies:</p>
  <ul class="usa-content-list">
    <li>When displaying multi-variant data:
      <ul>
        <li>It is important to use discrete, high contrast colors or textured fill. This accommodation differentiates variables for audiences with visual impairments like color blindness or low vision. </li>
        <li>The use of stacked bar charts for multi-variant data can be used if it is important to communicate the sum of the data set.</li>
      </ul>
    </li>
  </ul>

  <h3>Example bar chart</h3>
  <div class="border bg-white padding-2 margin-bottom-2 radius-md padding-bottom-0">
    <h4 class="margin-0">The five most-visited national parks of 2019</h4>
    <p class="margin-top-0 font-sans-2xs text-base margin-bottom-0 radius-1">Of the 62 parks with the designation "national park" as part of their official title, these were the top five. The Great Smoky Mountains National Park was the most-visited park by more than a factor of two.</p>
    <?xml version="1.0" encoding="utf-8"?>
    <?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 24.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 952 601" style="enable-background:new 0 0 952 601;" xml:space="preserve" aria-hidden="true">
    <style type="text/css">
      .st0{fill:#1B1B1B;}
      .st1{font-family:'MyriadPro-Regular';}
      .st2{font-size:28.6875px;}
      .st3{fill:#71767a;stroke:#71767a;stroke-miterlimit:10;}
      .st3a{fill:#dfe1e2;stroke:#dfe1e2;stroke-miterlimit:10;}
      .st4{fill:#005EA2;}
      .st5{letter-spacing:-2;}
      .font-lang-xl-m{font-size: 25px}
    </style>
    <g>
      <g>
        <g>
          <text transform="matrix(1 0 0 1 307.1421 582.875)" class="font-lang-xl-m">0</text>
          <text transform="matrix(1 0 0 1 394.5708 582.875)" class="font-lang-xl-m">2</text>
          <text transform="matrix(1 0 0 1 481.999 582.875)" class="font-lang-xl-m">4</text>
          <text transform="matrix(1 0 0 1 569.4277 582.875)" class="font-lang-xl-m">6</text>
          <text transform="matrix(1 0 0 1 656.8564 582.875)" class="font-lang-xl-m">8</text>
          <text transform="matrix(1 0 0 1 736.9268 582.875)" class="font-lang-xl-m">10</text>
          <text transform="matrix(1 0 0 1 824.3555 582.875)" class="font-lang-xl-m">12</text>
          <text transform="matrix(1 0 0 1 911.7842 582.875)" class="font-lang-xl-m">14</text>
        </g>
        <line class="st3" x1="314.5" y1="554.5" x2="926.5" y2="554.5" stroke-width='1px' vector-effect="non-scaling-stroke"/>
        <g>
          <g>
            <line class="st3" x1="314.5" y1="554.5" x2="314.5" y2="115.5" stroke-width='1px' vector-effect="non-scaling-stroke"/>
            <line class="st3a" x1="401.93" y1="554.5" x2="401.93" y2="115.5" stroke-width='1px' vector-effect="non-scaling-stroke"/>
            <line class="st3a" x1="489.36" y1="554.5" x2="489.36" y2="115.5" stroke-width='1px' vector-effect="non-scaling-stroke"/>
            <line class="st3a" x1="576.79" y1="554.5" x2="576.79" y2="115.5" stroke-width='1px' vector-effect="non-scaling-stroke"/>
            <line class="st3a" x1="664.21" y1="554.5" x2="664.21" y2="115.5" stroke-width='1px' vector-effect="non-scaling-stroke"/>
            <line class="st3a" x1="751.64" y1="554.5" x2="751.64" y2="115.5" stroke-width='1px' vector-effect="non-scaling-stroke"/>
            <line class="st3a" x1="839.07" y1="554.5" x2="839.07" y2="115.5" stroke-width='1px' vector-effect="non-scaling-stroke"/>
            <line class="st3a" x1="926.5" y1="554.5" x2="926.5" y2="115.5" stroke-width='1px' vector-effect="non-scaling-stroke"/>
          </g>
          <g>
          </g>
        </g>
      </g>
      <g>
        <line class="st3" x1="314.5" y1="554.5" x2="314.5" y2="115.5" stroke-width='1px' vector-effect="non-scaling-stroke"/>
        <g>
          <g>
            <line class="st3" x1="314.5" y1="510.6" x2="329.8" y2="510.6"/>
            <line class="st3" x1="314.5" y1="422.8" x2="329.8" y2="422.8"/>
            <line class="st3" x1="314.5" y1="335" x2="329.8" y2="335"/>
            <line class="st3" x1="314.5" y1="247.2" x2="329.8" y2="247.2"/>
            <line class="st3" x1="314.5" y1="159.4" x2="329.8" y2="159.4"/>
          </g>
          <g>
          </g>
        </g>
      </g>
      <g>
        <g>
          <rect x="314.5" y="50.34" class="st4" width="38.25" height="41.16"/>
          <g>
            <rect x="314.5" y="127.79" class="st4" width="546.43" height="63.22"/>
            <rect x="314.5" y="215.59" class="st4" width="260.97" height="63.22"/>
            <rect x="314.5" y="303.39" class="st4" width="205.46" height="63.22"/>
            <rect x="314.5" y="391.19" class="st4" width="196.71" height="63.22"/>
            <rect x="314.5" y="478.99" class="st4" width="196.71" height="63.22"/>
          </g>
        </g>
      </g>
      <g>
        <g>
        </g>
      </g>
      <g>
        <g>
        </g>
        <text transform="matrix(1 0 0 1 366.5312 80.6797)" class="font-lang-xl-m">Visits (in millions)</text>
      </g>
      <g>
        <text transform="matrix(1 0 0 1 290 501.3574)" class="font-lang-xl-m"><tspan x="0" text-anchor="end">Yosemite</tspan><tspan x="0" y="35" text-anchor="end">National Park</tspan></text>
        <text transform="matrix(1 0 0 1 290 413.5576)" class="font-lang-xl-m"><tspan x="0" text-anchor="end">Zion</tspan><tspan x="0" y="35" text-anchor="end">National Park</tspan></text>
        <text transform="matrix(1 0 0 1 290 325.7578)" class="font-lang-xl-m"><tspan x="0" text-anchor="end">Rocky Mountain</tspan><tspan x="0" y="35" text-anchor="end">National Park</tspan></text>
        <text transform="matrix(1 0 0 1 290 237.958)" class="font-lang-xl-m"><tspan x="0" text-anchor="end">Grand Canyon</tspan><tspan x="0" y="35" text-anchor="end">National Park</tspan></text>
        <text transform="matrix(1 0 0 1 290 153.1577)" class="font-lang-xl-m"><tspan x="0" text-anchor="end">Great Smoky Mountains</tspan><tspan x="0" y="35" text-anchor="end">National Park</tspan></text>
      </g>
    </g>
    </svg>
    <table class="usa-sr-only" aria-describedby="source">
      <caption>Top 5 most visited Nation Parks</caption>
      <thead>
        <tr>
          <th scope="col">Park</th>
          <th scope="col">Visits (in millions)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Great Smoky Mountain National Park</th>
          <td>12.5</td>
        </tr>
        <tr>
          <th scope="row">Grand Canyon National Park</th>
          <td>5.87</td>
        </tr>
        <tr>
          <th scope="row">Rocky Mountain National Park</th>
          <td>4.7</td>
        </tr>
        <tr>
          <th scope="row">Zion National Park</th>
          <td>4.5</td>
        </tr>
        <tr>
          <th scope="row">Yosemite National Park</th>
          <td>4.5</td>
        </tr>
      </tbody>
    </table>
    <p id="source_bar">Source: <a href="https://www.nps.gov/aboutus/visitation-numbers.htm">National Park Service</a></p>
  </div>

  <h3>What we did in our bar chart example</h3>
  <ul class="usa-content-list">
    <li><strong>There is a clear summary.</strong> Users may not understand some narrative objectives from a graphic alone. The visualization also explains what the chart intends to communicate in plain language.</li>
    <li><strong>Used a single color for the bars.</strong> The bars are the same color because the data is categorically the same (visits) for each national park.</li>
    <li><strong>The graphic is hidden from screen readers.</strong> Because the data set is fairly simple, non-visual users will be able to read the same data in the form of data table that's hidden from visual users but accessible to screen readers. If the data were more complex, we might consider using a 3rd party charting tool with support for accessibility as described above.</li>
    <li><strong>Original data linked.</strong> We linked back to the original source data for the line chart.</li>
  </ul>

  <h3>References</h3>
    <ul class="usa-content-list">
      <li><a href="https://www.highcharts.com/blog/tutorials/best-chart-accessibility-practices/">Bar chart accessibility practices</a>&nbsp; [highcharts.com]</li>
    </ul>
</section>
