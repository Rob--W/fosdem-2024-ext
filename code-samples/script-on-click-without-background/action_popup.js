"use strict";

if (typeof browser == "undefined") {
  // `browser` is not defined in Chrome, but Manifest V3 extensions in Chrome
  // also support promises in the `chrome` namespace, like Firefox. To easily
  // test the example without modifications, polyfill "browser" to "chrome".
  globalThis.browser = chrome;
}

try {
  // Note: top-level await requires type="module" on the <script> tag.
  let tabs = await browser.tabs.query({ active: true, currentWindow: true });
  await browser.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: () => {
      // func is serialized and executed in the context of the web page.
      alert("Clicked extension button and ran script at " + document.URL);
    },
    injectImmediately: true,
  });
} finally {
  // try-finally to catch errors: e.g. scripting.executeScript may fail if the
  // extension is not allowed to run code in the current tab.
  window.close();
}
