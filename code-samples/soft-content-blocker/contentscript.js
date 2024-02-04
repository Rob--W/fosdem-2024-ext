"use strict";

globalThis.browser ??= chrome;

var div = document.createElement("div");
var shadow = div.attachShadow({ mode: "closed" });

var button = document.createElement("button");
button.textContent = "Click to reveal content";
button.onclick = () => {
    div.remove();
};

shadow.append(button);

var style = document.createElement("link");
style.rel = "stylesheet";
style.href = browser.runtime.getURL("extStyle.css");
shadow.append(style);

document.body.append(div);
