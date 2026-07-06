//play the lottie when the span is clicked
const play_button = document.querySelector("button");
const svg_container = document.getElementById("svg");
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
  if (localStorageTheme !== null && localStorageTheme == "dark-theme") {
    document.body.className = localStorageTheme;
  }

  const switch_theme = document.getElementById("checkbox");
  switch_theme.checked = true;
}

switch_theme.addEventListener("change", changeTheme);

//fadein animation

const $ = function (selector) {
  const html_elements = document.querySelectorAll.call(document, selector);
  //actual library functionality(elements that i want to animate)

  const fade_library = {
    html_elements,
    addClass(clasName) {
      this.html_elements.forEach((html_element) => {
        html_element.classList.add(clasName);
      });
      return fade_library;
    },

    fadeIn(dur) {
      this.html_elements.forEach((html_elem) => {
        let currentOpacity = 0;
        const increment = 1 / (dur / 10);

        const fadeIn = setInterval(() => {
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
    },
  };

  return fade_library;
};
$(".fadein").addClass("hide_logo").fadeIn(3500);

//get cookie and set cookie
//hidding the banner on init
const getCookie = (name) => {
  const value = " " + document.cookie;
  console.log("Value", `==${value}==`);
  const parts = value.split(" " + name + "=");
  return parts.length < 2 ? undefined : parts.pop().split(";").shift();
};

const setCookie = function (name, value, expiryDays, doamin, path, secure) {
  const exdate = new Date();
  exdate.setHours(
    exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
  );

  document.cookie =
    name +
    "=" +
    value +
    ";expires=" +
    exdate.toUTCString() +
    ";path=" +
    (path || "/") +
    (doamin ? ";domain=" + doamin : "") +
    (secure ? ";secure" : "");
};

//self called function anonymous fun.
//isolate all of the props inside the function their local props and not inside window, the function simply executed when i will load this index.js
//when i click accept i want to remove the banner and also set a cookie in order to know that the user already closed this banner.
//remove the banner from the dom.
(() => {
  const cookieName = "cookiesBanner";
  const $cookieBanner = document.querySelector(".cookies-eu-banner");
  const $cookieButton = document.querySelector(".cookies-eu-button");
  const hasCookie = getCookie(cookieName);

  //if i dont have the cookie just remove the class.
  //actually means on init check if i have the cookie 'hasCookie' and if i have it then dont do anything
  if (!hasCookie) {
    $cookieBanner.classList.remove("hidden");
  }
  $cookieButton.addEventListener("click", () => {
    console.log("clicked");
    setCookie(cookieName, "closed", 31);
    $cookieBanner.remove();
  });
})();
