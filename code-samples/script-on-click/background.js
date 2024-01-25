"use strict";

if (typeof browser == "undefined") {
  // `browser` is not defined in Chrome, but Manifest V3 extensions in Chrome
  // also support promises in the `chrome` namespace, like Firefox. To easily
  // test the example without modifications, polyfill "browser" to "chrome".
  globalThis.browser = chrome;
}

browser.action.onClicked.addListener((tab) => {
  browser.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // func is serialized and executed in the context of the web page.
      alert("Clicked extension button and ran script at " + document.URL);
    },
    injectImmediately: true,
  });
});

console.log("Loaded background script at " + new Date().toString());
