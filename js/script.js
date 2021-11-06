//When user scrolls down 80px from the top of the doc, the navbar's
//padding and logo's size will change!
window.onscroll = function () {
    scrollFunction
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('navbar').style.padding = '30px 10px';
        document.getElementById('logo').style.fontSize = '25px';
    } else {
        document.getElementById('navbar').style.padding = '80px 10px';
        document.getElementById('logo').style.fontSize = '35px';
    }
}

//Hamburger menu toggling
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const navbarRight = document.getElementById('navbar-right');
const aTags = document.getElementsByTagName('a');

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";

    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        navbarRight.style.display = 'none'; 
        aTags.style.display = 'none';
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)

