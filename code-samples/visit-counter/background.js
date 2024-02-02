"use strict";

if (typeof browser == "undefined") {
  // `browser` is not defined in Chrome, but Manifest V3 extensions in Chrome
  // also support promises in the `chrome` namespace, like Firefox. To easily
  // test the example without modifications, polyfill "browser" to "chrome".
  globalThis.browser = chrome;
}

let count;

browser.webNavigation.onCommitted.addListener(async (details) => {
  if (!count) {
    // First run since wakeup, fetch the last known count.
    count = (await browser.storage.session.get({ count: 0 })).count;
  }
  ++count;
  await browser.storage.session.set({ count });
  // The "text" parameter should be a string, so convert count to a string.
  browser.action.setBadgeText({ text: "" + count });
}, {
  url: [ { hostEquals: "extensionworkshop.com" } ],
});
