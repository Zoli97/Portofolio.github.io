// hamburger activation.
//get the selectors.
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const nav_links = document.querySelectorAll(".nav-menu li ");
const switch_theme = document.getElementById("checkbox");
switch_theme.checked = false;
window.onload = checkTheme();
function changeTheme() {
    if (this.checked) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
    }
}
function checkTheme() {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme !== null && localStorageTheme == "dark-theme") document.body.className = localStorageTheme;
    const switch_theme = document.getElementById("checkbox");
    switch_theme.checked = true;
}
switch_theme.addEventListener("change", changeTheme);
//function on the hamburger (add this active class which makes open the hamburger menu, and with .active class i can create the animation when i click on it.);
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    nav_links.forEach((nav)=>{
        nav.classList.toggle("fade");
    });
});
//fadein animation
const $ = function(selector) {
    const html_elements = document.querySelectorAll.call(document, selector);
    //actual library functionality(elements that i want to animate)
    const fade_library = {
        html_elements,
        addClass (clasName) {
            this.html_elements.forEach((html_element)=>{
                html_element.classList.add(clasName);
            });
            return fade_library;
        },
        fadeIn (dur) {
            this.html_elements.forEach((html_elem)=>{
                let currentOpacity = 0;
                const increment = 1 / (dur / 10);
                const fadeIn = setInterval(()=>{
                    currentOpacity += increment;
                    html_elem.style.opacity = currentOpacity;
                    //reach 0
                    if (currentOpacity <= 0) {
                        clearInterval(fadeIn);
                        html_elem.style.display = "none";
                    }
                }, 10);
            });
            return fade_library;
        }
    };
    return fade_library;
};
$(".fadein").addClass("hide_logo").fadeIn(3500);

//# sourceMappingURL=contact.be2ce8a8.js.map
