//scroll to top and navbar

const topLinks = document.querySelector(".to-top-bar");
const navbar = document.getElementById("nav");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;

    //Navbar
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    //To Top
    if (scrollHeight > 200) {
        topLinks.classList.add("show-link");
    } else {
        topLinks.classList.remove("show-link");
    }
})

const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const links = document.querySelector(".nav-links");

navBtn.addEventListener("click", function () {
    //Show Nav list
    const linksheight = links.getBoundingClientRect().height;
    const containerHeight = navList.getBoundingClientRect().height;

    if (containerHeight === 0) {
        navList.style.height = `${linksheight}px`;
    }else {
        navList.style.height = 0;
    }
    
    //Navnbar Btn
    navBtn.classList.toggle("active");
})