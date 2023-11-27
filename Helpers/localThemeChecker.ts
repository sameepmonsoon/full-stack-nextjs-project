export default function localThemeChecker(
  themeMode: String,
  systemTheme: Boolean
) {
  if (themeMode === "D") {
    localStorage.setItem("theme", "D");
    document.documentElement.classList.add("dark");
  } else if (themeMode === "S" && systemTheme) {
    localStorage.setItem("theme", "S");
    document.documentElement.classList.add("dark");
  } else if (themeMode === "S" && !systemTheme) {
    localStorage.setItem("theme", "S");
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.setItem("theme", "L");
    document.documentElement.classList.remove("dark");
  }
}
