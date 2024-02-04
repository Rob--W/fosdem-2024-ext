"use strict";

// `browser` is not defined in Chrome, but Manifest V3 extensions in Chrome
// also support promises in the `chrome` namespace, like Firefox. To easily
// test the example without modifications, polyfill "browser" to "chrome".
globalThis.browser ??= chrome;

// Declares the host permission of content_scripts[0].matches in manifest.json.
// This logic also works for optional_host_permissions and optional_permissions.
const permissions = {
  origins: ["*://*.example.com/"],
};

const permCheckbox = document.getElementById("permCheckbox");
permCheckbox.onchange = async () => {
  if (permCheckbox.checked) {
    let granted = await browser.permissions.request(permissions);
    if (!granted) {
      // Permission request was denied by the user.
      permCheckbox.checked = false;
    }
  } else {
    try {
      await browser.permissions.remove(permissions);
    } catch (e) {
      // While Chrome allows granting of host_permissions that have manually
      // been revoked by the user, it fails when revoking them, with
      // "Error: You cannot remove required permissions."
      console.error(e);
      permCheckbox.checked = true;
    }
  }
};

async function renderPermissions() {
  permCheckbox.checked = await browser.permissions.contains(permissions);
}

// Automatically detect permission changes, even if triggered externally.
browser.permissions.onAdded.addListener(renderPermissions);
browser.permissions.onRemoved.addListener(renderPermissions);
renderPermissions(); // Set initial checkbox state.
