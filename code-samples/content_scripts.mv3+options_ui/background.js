"use strict";

// `browser` is not defined in Chrome, but Manifest V3 extensions in Chrome
// also support promises in the `chrome` namespace, like Firefox. To easily
// test the example without modifications, polyfill "browser" to "chrome".
globalThis.browser ??= chrome;

browser.runtime.onInstalled.addListener(details => {
  if (details.reason === "install") {
    // This simple example opens the options page on install:
    browser.runtime.openOptionsPage();
    // In your own extension, consider using a dedicated onboarding page:
    // browser.tabs.create({ url: "firstrun.html" });
  }
});
