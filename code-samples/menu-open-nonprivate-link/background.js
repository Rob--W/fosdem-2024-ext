"use strict";

if (typeof browser == "undefined") {
  // `browser` is not defined in Chrome, but Manifest V3 extensions in Chrome
  // also support promises in the `chrome` namespace, like Firefox. To easily
  // test the example without modifications, polyfill "browser" to "chrome".
  globalThis.browser = chrome;
}

function registerContextMenu() {
  browser.contextMenus.create(
    {
      id: "MENU_ITEM_ID",
      title: "Open link in non-private window",
      contexts: ["link"],
      targetUrlPatterns: ["https://*/*", "http://*/*"],
    },
    // Callback reads runtime.lastError to prevent an unchecked error from being
    // logged when the extension attempt to register the already-registered menu.
    () => void browser.runtime.lastError,
  );
  browser.contextMenus.onClicked.addListener((info, tab) => {
    browser.windows.create({
      incognito: false,
      url: info.linkUrl,
    });
  });
}

if (browser.contextMenus.onShown && browser.contextMenus.refresh) {
  // In Firefox, context menus can be updated dynamically when shown.
  browser.contextMenus.onShown.addListener((info, tab) => {
    browser.contextMenus.update("MENU_ITEM_ID", { visible: tab.incognito });
    browser.contextMenus.refresh();
  });
  registerContextMenu();
} else if (browser.runtime.inIncognitoContext) {
  // In Chrome, a second instance of the extension is started when an incognito
  // browsing session starts. Context menu registrations from this instance are
  // separate from the main browsing session.
  registerContextMenu();
} // else: Chrome, non-incognito context. We don't want menus here.
