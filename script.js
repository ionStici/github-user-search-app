const root = document.documentElement;
const themeText = document.querySelector(".header__theme__text");

const img = document.querySelector(".card__profile__picture");
const userName = document.querySelector(".card__profile__name");
const userUsername = document.querySelector(".card__profile__username");
const joined = document.querySelector(".card__profile__joined");
const bio = document.querySelector(".card__bio");

const repos = document.querySelector(".card__social__current-repos");
const followers = document.querySelector(".card__social__current-followers");
const following = document.querySelector(".card__social__current-following");

const location = document.querySelector(".card__info__location");
const website = document.querySelector(".card__info__blog");
const twitter = document.querySelector(".card__info__twitter");
const company = document.querySelector(".card__info__company");

const message = document.querySelector(".form__message");

export const setDarkTheme = function () {
  root.style.setProperty("--color-bg", "#141d2f");
  root.style.setProperty("--color-bg-secondary", "#1e2a47");

  root.style.setProperty("--color-theme-button", "#fff");
  root.style.setProperty("--color-logo", "#fff");

  root.style.setProperty("--color-theme-button-hover", "#90a4d4");

  root.style.setProperty("--color-form-input", "#fff");
  root.style.setProperty("--color-form-input-placeholder", "#fff");

  root.style.setProperty("--color-name-social", "#fff");
  root.style.setProperty("--color-joined", "#fff");
  root.style.setProperty("--color-text", "#fff");

  root.style.setProperty("--color-bg-social", "#141d2f");

  themeText.textContent = "dark";
};

export const setLightTheme = function () {
  root.style.setProperty("--color-bg", "#F7F9FF");
  root.style.setProperty("--color-bg-secondary", "#FEFEFE");

  root.style.setProperty("--color-theme-button", "#4B6A9B");
  root.style.setProperty("--color-logo", "#222731");

  root.style.setProperty("--color-theme-button-hover", "#222731");

  root.style.setProperty("--color-form-input", "#222731");
  root.style.setProperty("--color-form-input-placeholder", "#4B6A9B");

  root.style.setProperty("--color-name-social", "#2b3442");
  root.style.setProperty("--color-joined", "#697c9a");
  root.style.setProperty("--color-text", "#4b6a9b");

  root.style.setProperty("--color-bg-social", "#f6f8ff");

  themeText.textContent = "light";
};

export const renderUserData = async function (username) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) message.style.opacity = 1;
  if (!res.ok) return;
  message.style.opacity = 0;
  const user = await res.json();

  const joinedAt = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(user.created_at));

  img.setAttribute("src", user.avatar_url);
  userName.textContent = user.name;

  userUsername.textContent = `@${user.login}`;
  userUsername.setAttribute("href", `https://github.com/${user.login}`);

  joined.textContent = `Joined ${joinedAt}`;
  bio.textContent = user.bio ? user.bio : "This profile has no bio";

  repos.textContent = user.public_repos;
  followers.textContent = user.followers;
  following.textContent = user.following;

  location.textContent = user.location ? user.location : "Not Available";
  website.textContent = user.blog ? user.blog : "Not Available";
  twitter.textContent = user.twitter_username ? user.twitter_username : "Not Available";
  company.textContent = user.company ? user.company : "Not Available";

  if (!user.bio) {
    bio.style.opacity = "0.75";
  } else {
    bio.style.opacity = "1";
  }

  if (!user.location) {
    location.style.opacity = "0.5";
    location.previousElementSibling.style.opacity = "0.5";
  } else {
    location.style.opacity = "1";
    location.previousElementSibling.style.opacity = "1";
  }

  if (!user.blog) {
    website.style.opacity = "0.5";
    website.previousElementSibling.style.opacity = "0.5";
  } else {
    website.style.opacity = "1";
    website.previousElementSibling.style.opacity = "1";
  }

  if (!user.twitter_username) {
    twitter.style.opacity = "0.5";
    twitter.previousElementSibling.style.opacity = "0.5";
  } else {
    twitter.style.opacity = "1";
    twitter.previousElementSibling.style.opacity = "1";
  }

  if (!user.company) {
    company.style.opacity = "0.5";
    company.previousElementSibling.style.opacity = "0.5";
  } else {
    company.style.opacity = "1";
    company.previousElementSibling.style.opacity = "1";
  }

  document.documentElement.style.setProperty("--underline-twitter", "none");
  document.documentElement.style.setProperty("--underline-blog", "none");

  if (user.twitter_username) {
    document.documentElement.style.setProperty("--underline-twitter", "underline");

    twitter.setAttribute("href", `https://twitter.com/${user.twitter_username}`);
  } else {
    twitter.removeAttribute("href");
  }

  if (user.blog) {
    document.documentElement.style.setProperty("--underline-blog", "underline");

    const url =
      user.blog.startsWith("http://") ||
      user.blog.startsWith("https://") ||
      user.blog.startsWith("www.")
        ? user.blog
        : "https://" + user.blog;

    website.setAttribute("href", `${url}`);
  } else {
    website.removeAttribute("href");
  }
};

const form = document.querySelector(".form");
const btn = document.querySelector(".form__btn");
const input = document.querySelector(".form__input");

let currentTheme = "dark";
currentTheme === "dark" ? setDarkTheme() : setLightTheme();

const changeTheme = function () {
  currentTheme === "dark" ? (currentTheme = "light") : (currentTheme = "dark");

  currentTheme === "dark" ? setDarkTheme() : setLightTheme();
};

document.querySelector(".header__theme").addEventListener("click", changeTheme);

const search = function (e) {
  e.preventDefault();
  renderUserData(input.value);
  input.value = "";
};

renderUserData("octocat");

form.addEventListener("submit", search);
btn.addEventListener("click", search);
