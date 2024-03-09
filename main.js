const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector("#toggle-icon");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const textBox = document.querySelector("#text-box");

// dark or light images
function imageMode(color) {
    image1.src = `./img/undraw_conceptual_idea_${color}.svg`;
    image2.src = `./img/undraw_feeling_proud_${color}.svg`;
    image3.src = `./img/undraw_proud_coder_${color}.svg`;
}

//function toggle light/dark mode
function toggleDarkLightMode(isLight) {
    nav.style.backgroundColor = isLight ? "rbg(255 255 255 / 50%)" : "rbg(0 0 0 / 50%)";
    textBox.style.backgroundColor = isLight ? "rbg(0 0 0  / 50%)" : "rbg(255 255 255 / 50%)";
    toggleIcon.children[0].textContent = isLight ? "Light Mode" : "Dark Mode";
    isLight ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun") : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
    isLight ? imageMode('light') : imageMode('dark');;
}

// switch theme dynamically
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        //saving mode in localStorage
        localStorage.setItem("theme", "dark");
        toggleDarkLightMode(false);
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        //saving mode in localStorage
        localStorage.setItem("theme", "light");
        toggleDarkLightMode(true);
    }
}

// event listener
toggleSwitch.addEventListener("change", switchTheme);

// check localStorage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
        toggleDarkLightMode(false);
    }
}