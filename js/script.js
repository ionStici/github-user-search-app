import { setDarkTheme, setLightTheme } from "./changeTheme.js";

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

// // // // // // // // // // // // // // // // // // // //

// prettier-ignore
"#4B6A9B";
// prettier-ignore
"rgba(75, 106, 155, 0.5)";

// GET DATA ABOUT THE USER

const getUser = async function (username) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const user = await res.json();

    const userData = [
        user.avatar_url,
        user.name,
        user.login,
        user.created_at,
        user.bio,
        user.public_repos,
        user.followers,
        user.following,
        user.location,
        user.blog,
        user.twitter_username,
        user.company,
    ];

    console.log(user.twitter_username);
};

getUser("ionStici");
