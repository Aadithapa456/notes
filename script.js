let darkBtn = document.querySelector(".btn-theme");
let variables = document.querySelector(":root");
function themeChanger() {
   let currentTheme = getComputedStyle(variables).getPropertyValue("--theme").trim();
   console.log(currentTheme);
   if (currentTheme == "linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%)") {
      variables.style.setProperty("--theme", "#121212");
      variables.style.setProperty("--text-color", "white");
   } else {
      variables.style.setProperty(
         "--theme",
         "linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%)"
      );
      variables.style.setProperty("--text-color", "black");
   }
}
