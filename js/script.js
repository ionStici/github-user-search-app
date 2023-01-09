import { setDarkTheme, setLightTheme } from "./switchTheme.js";
import { renderUserData } from "./renderUserData.js";

// // // // // // // // // // // // // // // // // // // //

const form = document.querySelector(".form");
const btn = document.querySelector(".form__btn");
const input = document.querySelector(".form__input");

// // // // // // // CHANGE THEME LOGIC // // // // // // //

let currentTheme = "dark";
currentTheme === "dark" ? setDarkTheme() : setLightTheme();

const changeTheme = function () {
    currentTheme === "dark"
        ? (currentTheme = "light")
        : (currentTheme = "dark");

    currentTheme === "dark" ? setDarkTheme() : setLightTheme();
};

document.querySelector(".header__theme").addEventListener("click", changeTheme);

// // // // // // // SEARCH // // // // // // //

const search = function (e) {
    e.preventDefault();
    renderUserData(input.value);
    input.value = "";
};

renderUserData("octocat");

form.addEventListener("submit", search);
btn.addEventListener("click", search);

// // // // // // // // // // // // // // // // // // // //
