const root = document.documentElement;

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
};
