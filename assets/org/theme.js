document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "🌙";
  toggleButton.className = "theme-toggle";
  document.body.appendChild(toggleButton);

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
    toggleButton.textContent = storedTheme === "dark" ? "☀️" : "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }

  toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    toggleButton.textContent = newTheme === "dark" ? "☀️" : "🌙";
  });
});
