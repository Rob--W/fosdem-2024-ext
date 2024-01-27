"use strict";

if (typeof browser == "undefined") {
  // `browser` is not defined in Chrome, but Manifest V3 extensions in Chrome
  // also support promises in the `chrome` namespace, like Firefox. To easily
  // test the example without modifications, polyfill "browser" to "chrome".
  globalThis.browser = chrome;
}

async function setBlockUrls(urls) {
  let resourceTypes = Object.values(browser.declarativeNetRequest.ResourceType);
  let nextRuleId = 1; // DNR rule ID must be at least 1.
  const newRules = [];
  for (const url of urls) {
    const urlFilter = "|" + url; // "|url" means: URL should start with "url".
    newRules.push({
      id: ++nextRuleId,
      condition: { urlFilter, resourceTypes },
      action: { type: "block" },
    });
  }
  const oldRules = await browser.declarativeNetRequest.getDynamicRules();
  await browser.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: oldRules.map(rule => rule.id),
    addRules: newRules,
  });
}

async function getBlockUrls() {
  const urls = [];
  for (const rule of await browser.declarativeNetRequest.getDynamicRules()) {
    // Dynamic rules are persisted across extension updates. Check that the
    // format is as expected before using the result.
    if (rule.condition.urlFilter?.[0] === "|") {
      urls.push(rule.condition.urlFilter.slice(1));
    }
  }
  return urls;
}

const inputField = document.getElementById("inputField");
document.getElementById("saveButton").onclick = function() {
  let urls = inputField.value.split("\n");
  urls = urls.filter(url => url);  // Ignore empty lines.
  setBlockUrls(urls);
};

getBlockUrls().then(urls => {
  inputField.value = urls.join("\n");
});
