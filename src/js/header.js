(() => {
    const mobileMenu = document.querySelector(".js-menu-container");
    const openMenuBtn = document.querySelector(".js-open-menu");
    const closeMenuButtons = document.querySelectorAll(".js-close-menu");
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute("aria-expanded") === "true" || false;
      openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
      mobileMenu.classList.toggle("is-open");
      const scrollLockMethod = !isMenuOpen
        ? "disableBodyScroll"
        : "enableBodyScroll";
      bodyScrollLock[scrollLockMethod](document.body);
    };
    openMenuBtn.addEventListener("click", toggleMenu);
    closeMenuButtons.forEach((closeMenuBtn) => {
      closeMenuBtn.addEventListener("click", toggleMenu);
    });
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      if (!e.matches) return;
      mobileMenu.classList.remove("is-open");
      openMenuBtn.setAttribute("aria-expanded", false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();