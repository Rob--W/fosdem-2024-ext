# script-on-click

This extension shows how to run scripts in the current tab, without requiring
any install-time host permissions.

Visit any website, and click on the extension's button in the toolbar, which
executes a script in the current tab that displays the page's URL for example.

## Cross-browser background scripts

Historically, background scripts had access to DOM APIs. Chrome has dropped
support for these, and requires extensions to migrate to service workers.
Firefox continues to support DOM-based background scripts, and does not
support service workers yet.

As of Chrome 121 and Firefox 121 (the same version number is a coincidence),
it is possible to have a single manifest.json file supporting both by declaring
`background.scripts` and `background.service_worker` simultaneously:

- In Firefox, the scripts in `background.scripts` are executed in the context
  of a document with access to DOM APIs, a so-called "event page".

- In Chrome, `background.service_worker` is executed as a Service Worker,
  which does not have access to any DOM APIs.

For more information, see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_compatibility

## Documentation

* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/action
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/action/onClicked
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/scripting
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
