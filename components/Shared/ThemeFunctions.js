// Theme Functionality

export const toggleTheme = (theme, setTheme) => {
  const newTheme = theme === "dark" ? "light" : "dark";
  document.documentElement.classList.toggle("dark", newTheme === "dark");
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};

export const initializeTheme = (setTheme) => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const defaultTheme = savedTheme || (prefersDarkMode ? "dark" : "light");

  document.documentElement.classList.toggle("dark", defaultTheme === "dark");
  document.documentElement.classList.toggle("light", defaultTheme === "light");
  setTheme(defaultTheme);
};
