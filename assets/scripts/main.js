//Imports si besoin

//Page d'accueil

//Light theme - Dark theme

const themeImg = document.querySelector(".theme-img");
const themeText = document.querySelector(".theme-text");
const body = document.querySelector("body");

let isLight = true;

document.querySelector(".theme").onclick = function() {
    isLight = !isLight;
    if (isLight) {
        themeText.innerText = "Go light theme";
        themeImg.src = "./assets/logo/sun-white.png";
        body.classList.replace("dark-theme", "light-theme");
    }
    else {
        themeText.innerText = "Go dark theme";
        themeImg.src = "./assets/logo/moon-white.png";
        body.classList.replace("light-theme", "dark-theme");
    }
}


