"use strict";

// `browser` is not defined in Chrome, but Manifest V3 extensions in Chrome
// also support promises in the `chrome` namespace, like Firefox. To easily
// test the example without modifications, polyfill "browser" to "chrome".
globalThis.browser ??= chrome;

let count;
let countPromise;

browser.webNavigation.onCommitted.addListener(async (details) => {
  if (!count) {
    // First run since wakeup, fetch the last known count.

    // Store the Promise to avoid calling get() repeatedly if the event were to
    // fire in quick succession before the Promise resolves.
    countPromise ??= browser.storage.session.get({ count: 0 });
    // Now wait for the result. Note that if the event fires, there may be
    // multiple concurrent "await countPromise" calls pending.
    let items = await countPromise;
    // Using ??= to make sure that we are not replacing the value past the first
    // initialization.
    count ??= items.count;
    // countPromise is used only once, when count is uninitialized on the line
    // above. We can now safely clear its value to free some memory.
    countPromise = null;
  }
  ++count;
  await browser.storage.session.set({ count });
  // The "text" parameter should be a string, so convert count to a string.
  browser.action.setBadgeText({ text: "" + count });
}, {
  url: [ { hostEquals: "extensionworkshop.com" } ],
});
