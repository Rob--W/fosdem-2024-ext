# visit-counter

This extension shows how to count the number of visits in the current browser
session to a website and to display that in a badge on the extension button.

After installing the extension, optionally pin it to the toolbar, and visit
[extensionworkshop.com](https://extensionworkshop.com/) to see the number of
visits to the Extension Workshop.

The example demonstrates that the background script wakes up to process an event
and sleeps when idle for a while. To keep track of the counter state between
background wakeups, the `browser.storage.session` API is used.

To confirm that the counter is remembered across background restarts, terminate
the background script and visit the website again:

- In Firefox, visit `about:debugging` and click on the "Terminate background
  script" button at your extension.

- In Chrome, visit `chrome://serviceworker-internals/` and click on "Stop" at
  the background service worker of your extension.

## Documentation

* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/action
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation
