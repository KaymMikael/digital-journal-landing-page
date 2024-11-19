document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const creditsElement = document.getElementById("creditsElement");

  const toggleMenu = () => {
    const navLinks = document.getElementById("navLinks");
    const accountNavigation = document.getElementById("accountNavigation");

    navLinks.classList.toggle("hidden");
    accountNavigation.classList.toggle("flex");
    accountNavigation.classList.toggle("hidden");
  };

  hamburgerIcon.addEventListener("click", toggleMenu);

  creditsElement.textContent = `© ${new Date().getFullYear()} All rights reserved Journal`;
});
