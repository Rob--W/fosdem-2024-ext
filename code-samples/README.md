# Code samples

This directory contains code samples that demonstrates the challenges of
cross-browser extension development and ways to overcome them. These examples
are part of a talk linked from repository's main [README.md](../README.md) file.

The sections below refer to the sections of [the presentation slides](https://docs.google.com/presentation/d/1wxOViyKFRw6zg2eOzgvudp8AywpeNcpG_iJ1wI1j_Hk/edit).

## Modifying site content

Introduces the basics of modifying site content through an extension. Shows the
relevance of Manifest Version 2 and Manifest Version 3, and demoes that the
Manifest Version 3 example requires extra user consent in Firefox.

* [content_scripts.mv2/](content_scripts.mv2/)
* [content_scripts.mv3/](content_scripts.mv3/)

## Host permissions

Continues the example, demonstrates how to create extension-defined settings
pages to get a user to consent to more host permissions. As a bonus, also
shows how to easily get dark theme support.

* [content_scripts.mv3+options_ui/](content_scripts.mv3+options_ui/)

## Script on click

Demonstrates how to run code in web pages on demand with user interaction that
relies on a background script. This explains the differences in background
syntax between Firefox and Chrome, and how to create one manifest.json file
that works across browsers. Another examples shows a way to have equivalent
functionality without requiring a background script.

* [script-on-click/](script-on-click/) (cross-browser)
* [script-on-click-1/](script-on-click-1/) (Firefox-only)
* [script-on-click-2/](script-on-click-2/) (Chrome-only)
* [script-on-click-without-background/](script-on-click-without-background/)

## Short-lived background

Emphasizes the concept of non-persistent background contexts, and how to design
a background script that needs to carry global state across background restarts.

* [visit-counter/](visit-counter/)

## Untrustworthy content

Website content is inherently untrustworthy from an extension's perspective.
These two examples demonstrate a soft way to hide site content (along with a
risky UI) and a way to block site content (by preventing it from loading).

* [soft-content-blocker/](soft-content-blocker/)
* [request-blocker-with-options_ui/](request-blocker-with-options_ui/)

## Not part of presentation

* [menu-open-nonprivate-link/](menu-open-nonprivate-link/)
