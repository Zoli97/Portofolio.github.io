(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const nav_links = document.querySelectorAll(".nav-menu li ");
const switch_theme$1 = document.getElementById("checkbox");
switch_theme$1.checked = false;
window.onload = checkTheme$1();
function changeTheme$1() {
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
function checkTheme$1() {
  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme !== null && localStorageTheme == "dark-theme") {
    document.body.className = localStorageTheme;
  }
  const switch_theme2 = document.getElementById("checkbox");
  switch_theme2.checked = true;
}
switch_theme$1.addEventListener("change", changeTheme$1);
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  nav_links.forEach((nav) => {
    nav.classList.toggle("fade");
  });
});
const $$1 = function(selector) {
  const html_elements = document.querySelectorAll.call(document, selector);
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
$$1(".fadein").addClass("hide_logo").fadeIn(3500);
document.querySelector("button");
document.getElementById("svg");
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
  const switch_theme2 = document.getElementById("checkbox");
  switch_theme2.checked = true;
}
switch_theme.addEventListener("change", changeTheme);
const $ = function(selector) {
  const html_elements = document.querySelectorAll.call(document, selector);
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
const getCookie = (name) => {
  const value = " " + document.cookie;
  console.log("Value", `==${value}==`);
  const parts = value.split(" " + name + "=");
  return parts.length < 2 ? void 0 : parts.pop().split(";").shift();
};
const setCookie = function(name, value, expiryDays, doamin, path, secure) {
  const exdate = /* @__PURE__ */ new Date();
  exdate.setHours(
    exdate.getHours() + expiryDays * 24
  );
  document.cookie = name + "=" + value + ";expires=" + exdate.toUTCString() + ";path=/";
};
(() => {
  const cookieName = "cookiesBanner";
  const $cookieBanner = document.querySelector(".cookies-eu-banner");
  const $cookieButton = document.querySelector(".cookies-eu-button");
  const hasCookie = getCookie(cookieName);
  if (!hasCookie) {
    $cookieBanner.classList.remove("hidden");
  }
  $cookieButton.addEventListener("click", () => {
    console.log("clicked");
    setCookie(cookieName, "closed", 31);
    $cookieBanner.remove();
  });
})();
