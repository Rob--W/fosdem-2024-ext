# content_scripts.mv3

This extension shows how to run a script in the context of a web page.
Visit any website and click in the document to see a dialog with the text "Got click at (URL here)".

The code is nearly identical to the Manifest Version 2 version of this
extension at [content_scripts.mv2](../content_scripts.mv2/). The only
difference is that the other example uses `"manifest_version": 2` in its
manifest.json, whereas this example uses `"manifest_version": 3`.

Moreover, the `browser_specific_settings` key is specified, because .
addons.mozilla.org requires the extension ID to be specified in the manifest
file of Manifest Version 3 extensions.

## Documentation

* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings

## Notes for Firefox

Host permissions of Manifest Version 3 extensions are fully optional.
Users can toggle host permissions at `about:addons`, or through the
Extensions button on the toolbar as documented at
https://support.mozilla.org/en-US/kb/extensions-button

The absence of host permissions at install time is a common source of
confusion. The following bugs track improvements in this area:

- "Offer optional host permissions for MV3 during install flow" ([bug 1839129](https://bugzilla.mozilla.org/show_bug.cgi?id=1839129))
- "Re-design permissions screen to support optional permissions" (on Android) ([bug 1811563](https://bugzilla.mozilla.org/show_bug.cgi?id=1811563))
