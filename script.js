let themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", function () {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    themeToggle.classList.toggle("BWFilter");
});