function toggleTheme() {
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let t = localStorage.getItem('theme');
  if (t) document.documentElement.setAttribute('data-theme', t);
});
