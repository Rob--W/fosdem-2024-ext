# request-blocker-with-options_ui

Demonstrates how to block all requests to certain URLs, without requiring any
host permissions. Notably, this extension does not depend on any background
script, because it uses the declarativeNetRequest API to register block rules.

Visit the extension's options page (at `about:addons` in Firefox, or
`chrome://extensions/` in Chrome) and input the URLs you'd like to block.
Then visit that URL to confirm that it is indeed blocked.

## Documentation

* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getDynamicRules
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateDynamicRules

## More DNR examples

* [dnr-block-only](https://github.com/mdn/webextensions-examples/tree/main/dnr-block-only)
* [dnr-dynamic-with-options](https://github.com/mdn/webextensions-examples/tree/main/dnr-dynamic-with-options)
* [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)
