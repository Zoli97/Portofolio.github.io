gsap.registerPlugin(ScrollTrigger);
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
    exdate.getHours() +
      (typeof expiryDays !== "number" ? 365 : expiryDays) * 24,
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

//**THE GSAP ANIMATION */

//1. the content come down and fade in when the browser loads
//come from -30%, opacity: 0(fade in) so its going to come from zero, come from -30

gsap.registerPlugin(ScrollTrigger);

//create timeline
var timeline = gsap.timeline();

timeline.from(".content", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut,
});
//secvential vor veni pe baza clasei stagger unde am definit pe 3 elemente bazat pe distanta .3s
timeline.from(
  ".stagger1 ",
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: Power3.easeOut,
    duration: 2,
  },
  "-=1.5",
); //offset delay

//going to come up fromb ottom up
timeline.from(
  ".hero-design",
  {
    opacity: 0,
    y: 50,
    ease: Power3.easeOut,
    duration: 1,
  },
  "-=2",
);

// timeline.from(
//   ".about",
//   {
//     opacity: 1,
//     y: 100,
//     ease: Power2.ease,
//     duration: 1,
//   },
//   "-=1.5",
// );

//or 10% of the current value
gsap.from(".square-anim", {
  stagger: 0.2,
  scale: 0.1,
  duration: 1,
  ease: Back.easeOut.config(1.7),
});

//any element that has the transition2 class applied to it
//when the top of the transition2 reaches the bottom of the scroll bar its gonna animate
gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

ScrollOut({
  threshold: 0.5,
  targets: " .tilt, .tilt2, .tilt3",
});

//**ANIMATION */
window.onload = (e) => {
  e.preventDefault();

  var balls = document.querySelectorAll("._section_ ._circle_");

  function randomValues() {
    anime({
      targets: balls,
      translateX: () => {
        return anime.random(0, 400);
      },
      translateY: () => {
        return anime.random(50, 50);
      },

      easing: "spring(1, 90, 50, 20)",
      delay: anime.stagger(150),
      duration: 400,
      complete: randomValues,
    });
  }

  randomValues();
};

//create a function to add a new list item skill to the skills list

function createNewItem(item) {
  const li = document.createElement("li");
  const tilt_class = item.tiltClass || "tilt"; //default tilt class if its not provided
  const title = createParagraph("skills-title title_skills", item.title);
  const description = createParagraph("featured-desc skill-desc ", item.desc);
  const divContainer = createContainer(
    "icon-container one",
    item.imgSrc,
    item.imgClass,
  ); // 1. Create and append the icon container with the image

  li.className = `transition2 ${tilt_class}`;
  li.setAttribute("data-scroll", "in");
  li.appendChild(divContainer);
  li.appendChild(title);
  li.appendChild(description);

  //append to the dom
  document.querySelector(".skillz").appendChild(li);
}

function createContainer(classes, imgSrc, imgClass) {
  const div_icon_container_ = document.createElement("div");
  const image = createImage(imgClass, imgSrc);
  div_icon_container_.className = classes;
  div_icon_container_.appendChild(image);

  return div_icon_container_;
}

function createImage(classes, src) {
  const image = document.createElement("img");
  image.src = src;
  image.className = classes;
  return image;
}

//create and append the title and desc paragraph (reusable helper)
function createParagraph(classes, text) {
  const title = document.createElement("p");
  const my_text = document.createTextNode(text);
  title.className = classes;
  title.appendChild(my_text);
  return title;
}

//create an array of object and went thorugh each one

const skillz = [
  {
    imgSrc: "./images/html.png",
    tiltClass: "tilt",
    imgClass: "html5_img",
    title: "HTML 5",
    desc: " It's need to know HTML on frontend because it's necessarily toknow this markup language to create the structure of the page.",
  },
  {
    imgSrc: "./images/css.png",
    tiltClass: "tilt2",
    imgClass: "css3_img",
    title: "CSS 3",
    desc: "For the frontend another tool is CSS it's necessarily to create the design or how to look the elements on the web page.",
  },
  {
    imgSrc: "./images/js.png",
    tiltClass: "tilt3",
    imgClass: "js_img",
    title: "Javascript",
    desc: " To create a dynamically and cool animations for the web page it's need to know the JavaScript language based on the prototype concept..",
  },
];

skillz.forEach(createNewItem);

//"https://www.facebook.com/zoli.tazlo https://github.com/Zoli97 https://www.linkedin.com/in/tazlo-zoli-7021b1195/",
//  "_blank",
//create a funcion to add a new list item icon to the list
function createListIconItem() {
  //socials array of objects
  const socials = [
    {
      href: "https://www.facebook.com/zoli.tazlo",
      iconClass: "fab fa-square-facebook",
      style: "color: #3b5998; font-size: 40px;",
    },
    {
      href: "https://github.com/Zoli97",
      iconClass: "fab fa-square-github",
      style: "color: #3e75c3; font-size: 40px;",
    },
    {
      href: "https://www.linkedin.com/in/tazlo-zoli-7021b1195/",
      iconClass: "fab fa-linkedin",
      style: "color: #007bb5; font-size: 40px;",
    },
  ];

  //went through each individual obj

  socials.forEach(({ href, iconClass, style }) => {
    const li = document.createElement("li");

    const link = createAlink(href, "_blank", iconClass, style);
    li.appendChild(link);
    document.querySelector(".items").appendChild(li);
  });
}

//create a link elem function

function createAlink(href, target, iconClass, style) {
  const a_link = document.createElement("a");
  const icon = createIcon(iconClass, style);
  a_link.appendChild(icon);
  a_link.href = href;
  a_link.target = target;
  return a_link;
}
// "fab fa-square-facebook fab fa-square-github fab fa-linkedin",
// "color: #3b5998; font-size: 40px color: #3e75c3; font-size: 40px color: #007bb5; font-size: 40px",

//create icon elem function
function createIcon(classes, styles) {
  const icon = document.createElement("i");
  icon.className = classes;
  icon.style = styles;
  return icon;
}

createListIconItem();

//animate the about section
//replay every time i enters the viewport or to pause when it leaves the viewport at the top
gsap.to(".animation-container", {
  scrollTrigger: {
    trigger: ".animation-container", //when trigger is activate or deactivate
    start: "top center",
    end: "bottom 100px",
    scrub: 1,

    toggleActions: "restart pause reverse pause",
  },
  x: 400,
  duration: 3,
});
