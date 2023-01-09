// // // // // // // SELECT ELEMENTS // // // // // // //

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

// // // // // // // GET DATA ABOUT THE USER // // // // // // //

export const renderUserData = async function (username) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) message.style.opacity = 1;
    if (!res.ok) return;
    message.style.opacity = 0;
    const user = await res.json();

    // user.avatar_url
    // user.name
    // user.login
    // user.created_at
    // user.bio
    // user.public_repos
    // user.followers
    // user.following
    // user.location
    // user.blog
    // user.twitter_username
    // user.company

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
    twitter.textContent = user.twitter_username
        ? user.twitter_username
        : "Not Available";
    company.textContent = user.company ? user.company : "Not Available";
};

// // // // // // // // // // // // // // // // // // // //
