# soft-content-blocker

This extension demonstrates how to hide content with the ability to unhide it,
through UI injected in the web page.

manifest.json has been extended with a `web_accessible_resources` entry to
allow the stylesheet to load.

Web pages are inherently untrustworthy from an extension's point of view. The
web page can modify, spoof and interact with any DOM elements that are injected
by the extension.

The example uses closed shadow DOM to prevent websites from directly interacting
with the extension UI, and to prevent websites from being able to fingerprint
users through leaked extension URLs.

## Documentation

* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
* https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM
