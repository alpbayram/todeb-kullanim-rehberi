(() => {
  const storageKey = "todeb-docs-navigation";

  const readState = () => {
    try {
      return JSON.parse(window.sessionStorage.getItem(storageKey) || "{}");
    } catch {
      return {};
    }
  };

  const writeState = (state) => {
    try {
      window.sessionStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      // Navigation still works when browser storage is unavailable.
    }
  };

  const syncSectionState = (toggle) => {
    const item = toggle?.closest(".md-nav__item--nested");
    const childNavigation = item?.querySelector(":scope > nav.md-nav");
    const control = item?.querySelector(`label[for="${toggle.id}"]`);
    const expanded = String(Boolean(toggle?.checked));

    childNavigation?.setAttribute("aria-expanded", expanded);
    control?.setAttribute("aria-expanded", expanded);
  };

  const resetContentScroll = () => {
    if (!window.matchMedia("(min-width: 76.25em)").matches) return;
    window.requestAnimationFrame(() => {
      const content = document.querySelector(".md-content");
      if (!content) return;
      const target = location.hash
        ? document.getElementById(decodeURIComponent(location.hash.slice(1)))
        : null;
      const top = target && content.contains(target)
        ? content.scrollTop + target.getBoundingClientRect().top - content.getBoundingClientRect().top
        : 0;
      content.scrollTo({ top, left: 0, behavior: "auto" });
    });
  };

  const prepareCurrentPage = () => {
    const state = readState();
    resetContentScroll();

    document.querySelectorAll(".md-nav--primary input.md-nav__toggle").forEach((toggle) => {
      const section = toggle.closest(".md-nav__item--nested");

      if (section?.classList.contains("md-nav__item--active")) {
        toggle.checked = true;
      } else if (Object.prototype.hasOwnProperty.call(state, toggle.id)) {
        toggle.checked = Boolean(state[toggle.id]);
      }

      syncSectionState(toggle);
    });
  };

  document.addEventListener("change", (event) => {
    if (event.target.matches(".md-nav--primary input.md-nav__toggle")) {
      syncSectionState(event.target);

      const state = readState();
      state[event.target.id] = event.target.checked;
      writeState(state);
    }
  });

  if (typeof document$ !== "undefined") {
    document$.subscribe(prepareCurrentPage);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", prepareCurrentPage, { once: true });
  } else {
    prepareCurrentPage();
  }
})();
