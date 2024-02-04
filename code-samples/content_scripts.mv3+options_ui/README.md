# content_scripts.mv3+options_ui

This extension extends the [content_scripts.mv3](../content_scripts.mv3/)
example with UI to enable the user to grant missing (host) permissions, if any.
Once granted, the extension can execute code in the context of the websites
associated with these hosts. This can be demonstrated by visiting any website
and clicking in the document to see a dialog with the text "Got click at (URL here)".

The `options_ui` part of manifest.json declares options.html, which hosts the
logic to enable the user to grant the permissions through extension-defined UI.
The options page demonstrates some best practices:

- mobile-friendly UI through meta viewport.
- dark theme support through meta color-scheme and CSS prefers-color-scheme.
- Requesting permissions from extension-defined UI.
- Update UI in response to externally-triggered permission changes, for example
  by permission changes through built-in UI, or the same page in another tab.

To make it easier for users to toggle the permissions at install time, we also
open this options page upon install, from background.js. While this demo opens
the options page directly, a dedicated first-run welcome page would make more
sense in a real-world extension.

## Documentation

* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
