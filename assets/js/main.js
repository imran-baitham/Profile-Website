/*=============== LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");

const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const selectTheme = localStorage.getItem("selected-theme");
const selectIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectTheme) {
  document.body.classList[selectTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectTheme === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
