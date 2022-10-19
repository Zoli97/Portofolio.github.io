// hamburger activation.
//get the selectors.
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const nav_links = document.querySelectorAll(".nav-menu li ");
//function on the hamburger (add this active class which makes open the hamburger menu, and with .active class i can create the animation when i click on it.);
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    nav_links.forEach((nav)=>{
        nav.classList.toggle("fade");
    });
});

//# sourceMappingURL=mySKills.be2ce8a8.js.map
