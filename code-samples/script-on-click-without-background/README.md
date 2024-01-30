# script-on-click

This extension shows how to run scripts in the current tab, without requiring
any install-time host permissions nor background script.

Visit any website, and click on the extension's button in the toolbar, which
executes a script in the current tab that displays the page's URL for example.

The functionality is equivalent to the  [../script-on-click](script-on-click)
example, with the main difference that the functionality is executed from the
action's popup panel instead of the background script. In this demo, the popup
panel is immediately closed after completing execution. Instead of closing it,
you could also consider rendering useful content to the user in that area.

## Documentation

* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/action
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/scripting
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
