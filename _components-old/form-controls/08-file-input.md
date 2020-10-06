---
title: File input
parent: Form controls
order: 08
lead: File input allows users to attach one or multiple files.
---

{% include code/preview.html component="file-input" %}
{% include code/accordion.html component="file-input" %}

<div class="usa-accordion usa-accordion--bordered site-accordion-docs">
  <button class="usa-button-unstyled usa-accordion__button"
      aria-expanded="true" aria-controls="file-input-docs">
    Guidance
  </button>
  <div id="file-input-docs" aria-hidden="false" class="usa-accordion__content site-component-usage">
    <h4>When to use the file input</h4>
    <ul class="usa-content-list">
      <li><strong>Documents are required.</strong> Ask users to provide files
      when it's necessary.</li>
    </ul>
    <h4>When to consider something else</h4>
    <ul class="usa-content-list">
      <li><strong>Documents are optional.</strong> Avoid asking users to provide documents if you don't require them.</li>
      <li><strong>Asynchronous upload.</strong> The file input component doesn't support asynchronous uploading. Files are POSTed only on form submission.</li>
      <li><strong>Asking for large files.</strong> Be mindful that some users might have limited connectivity or data plans.</li>
    </ul>
    <h4>Usability guidance</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Allow multiple file formats.</strong> Not everyone has access to
        the same software. Be flexible with file types to avoid unnecessary software requirements.
      </li>
      <li>
        <strong>Prefer one file per input.</strong> Some users might not know how
        to select multiple files in a file browser. Additionally, iOS does not
        allow multiple-file selection using the Files app.
      </li>
      <li>
        <strong>Highlight input restrictions.</strong> Use <code>usa-hint</code>
        to be clear about any file restrictions, such as document types or file size.
      </li>
    </ul>
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Use proper labels and attributes.</strong> Each file input should
        have a <code>&lt;label&gt;</code>. Associate the two by matching the
        <code>&lt;label&gt;</code>’s <code>for</code> attribute to the
        <code>&lt;input&gt;</code>’s <code>id</code> attribute.
      </li>
      <li>
        <strong>Use as a progressive enhancement.</strong> The file input
        component should be a progressive enhancement of <code>&lt;input type="file" /&gt;</code>.
        If the component doesn't initialize, it should still work and appear like
        a standard <code>file</code> input.
      </li>
    </ul>
    <h4 class="usa-heading">Implementation</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Initialization properties.</strong> JavaScript will create most
        elements for file input. To get a file input to initialize, add the class
        name <code>usa-file-input</code> to <code>&lt;input type="file" /&gt;</code>.
      </li>
      <li>
        <strong>Interaction.</strong> When a user selects or drags documents to
        the file input, the file name and a thumbnail preview are listed.
      </li>
      <li>
        <strong>Using the <code>accept</code> attribute.</strong> You can allow
        certain files by placing an <code>accept</code> attribute on the
        <code>&lt;input/&gt;</code>If a file type is not accepted, the file will
        not be attached and the file input will display a message.
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-accept">Learn more about the accept attribute</a>.
      </li>
      <li>
        <strong>Internet Explorer/Edge</strong> These browsers do not support
        dragging items to a file input. Instructions to drag files are removed for
        these browsers.
      </li>
    </ul>
    <h5 id="file-input-settings">File input settings</h5>
    <p>This component has no settings.</p>
    <h5 id="file-input-variants">File input variants</h5>
    <p>This component has no variants.</p>
    <h4 class="usa-heading">Package information</h4>
    <ul class="usa-content-list">
      <li>
        <strong>Package usage:</strong> <code>@import form-controls</code>
      </li>
      <li>
        <strong>Requires:</strong> <code>required</code>, <code>global</code>
      </li>
    </ul>
  </div>
</div>
