//Imports si besoin


//Page d'accueil

//Nav-bar function

let modeImg = document.querySelector(".mode-img");
let modeText = document.querySelector(".mode-text");

document.querySelector(".mode").onclick = function() {
    if (modeText.innerText === "Dark Mode") {
        modeText.innerText = "Light Mode";
        modeImg.src = "./assets/logo/moon.png";
        this.classList.toggle("dark-mode-button");
        this.classList.toggle("light-mode-button");
    }
    else {
        modeText.innerText = "Dark Mode";
        modeImg.src = "./assets/logo/sun.png";
        this.classList.toggle("light-mode-button");
        this.classList.toggle("dark-mode-button");
    }
 
    document.querySelector("body").classList.toggle("dark-mode");
    document.querySelector("body").classList.toggle("light-mode");
}

