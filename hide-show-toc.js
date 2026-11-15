(() => {
  "use strict";

  // Keep the labels, persisted preference, and CSS hook together so the
  // add-on can be adapted without changing its behavior below.
  const options = {
    hideLabel: "Hide navigation",
    showLabel: "Show navigation",
    storageKey: "zensical-hide-primary-navigation",
    buttonId: "zensical-hide-show-toc-toggle",
    bodyClass: "zensical-hide-show-toc",
  };

  function getPreference() {
    try { return localStorage.getItem(options.storageKey) === "true"; }
    // Browsers can disable localStorage, for example in restricted contexts.
    catch (_) { return false; }
  }

  function setPreference(hidden) {
    try { localStorage.setItem(options.storageKey, String(hidden)); }
    catch (_) { /* The current-page toggle still works without storage. */ }
  }

  function update(button, hidden) {
    // CSS hides only the left navigation; the right page ToC stays available.
    document.body.classList.toggle(options.bodyClass, hidden);
    button.setAttribute("aria-pressed", String(hidden));
    button.textContent = hidden ? options.showLabel : options.hideLabel;
  }

  function install() {
    let button = document.getElementById(options.buttonId);
    if (!button) {
      // Create the control once. Reuse it on later instant-navigation events.
      button = document.createElement("button");
      button.id = options.buttonId;
      button.className = "md-header__button zensical-hide-show-toc__toggle";
      button.type = "button";
      button.addEventListener("click", () => {
        const hidden = !document.body.classList.contains(options.bodyClass);
        setPreference(hidden);
        update(button, hidden);
      });

      // Place it beside the color-scheme control, or fall back to the page
      // body if the theme has no palette switch.
      const palette = document.querySelector('[data-md-component="palette"]');
      if (palette) palette.insertAdjacentElement("beforebegin", button);
      else document.body.appendChild(button);
    }
    // Restore the user's choice on initial load and after page navigation.
    update(button, getPreference());
  }

  // Zensical/Material swaps page content without reloading the document when
  // instant navigation is enabled, so reinstall/update on each navigation.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(install);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", install, { once: true });
  } else {
    install();
  }
})();
