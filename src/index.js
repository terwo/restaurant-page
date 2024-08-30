import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";   
import loadAbout from "./about.js";

function initializeWebsite() {
    const content = document.getElementById('content');
    const homeButton = document.querySelector("button:nth-child(1)");
    const menuButton = document.querySelector("button:nth-child(2)");
    const aboutButton = document.querySelector("button:nth-child(3)");

    function clearContent() {
        content.innerHTML = "";
    }

    homeButton.addEventListener("click", () => {
        clearContent();
        loadHome();
    });

    menuButton.addEventListener("click", () => {
        clearContent();
        loadMenu();
    });

    aboutButton.addEventListener("click", () => {
        clearContent();
        loadAbout();
    });

    loadHome();
}

document.addEventListener("DOMContentLoaded", initializeWebsite);