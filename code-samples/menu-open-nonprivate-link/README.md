# menu-open-nonprivate-link

This extension shows how to create a context menu that only appears in private
browsing / incognito windows.

To test this, grant the extension access to private browsing mode (in Firefox)
or Incognito access (in Chrome) after installation, then right-click on any link
in private browsing mode to confirm that a new menu item appears. Upon clicking
this menu item, the URL should open in a non-private browsing window.

Although the background script would work, the manifest.json file is currently
rejected by Firefox because the presence of `"incognito": "split"` prevents the
extension from loading, at least until
https://bugzilla.mozilla.org/show_bug.cgi?id=1876924 is fixed.
As a work-around, drop `"incognito": "split"` from manifest.json for Firefox.
