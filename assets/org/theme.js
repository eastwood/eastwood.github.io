(function () {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "🌙 Dark mode";
  toggleButton.className = "theme-toggle";
  document.body.appendChild(toggleButton);

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
    toggleButton.textContent =
      storedTheme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }

  toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    toggleButton.textContent =
      newTheme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
  });
})();
