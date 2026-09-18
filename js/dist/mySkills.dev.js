"use strict";

//get the elements from DOM
var button_ = document.querySelector("#btn_");
var arrow_btn = document.querySelector("#arrow-btn");
var image_ = document.querySelector("#image");
var hr = document.querySelector(".hr");
var links = [{
  text: "All",
  filter_category: "all"
}, {
  text: "Marvel",
  filter_category: "Marvel"
}, {
  text: "DC",
  filter_category: "DC"
}];
var imageData = [{
  src: "./images/marvel/thor.jpeg",
  alt: "thor",
  category: "Marvel"
}, {
  src: "./images/marvel/spiderman.jpeg",
  alt: "spider-man",
  category: "Marvel"
}, {
  src: "./images/marvel/doom.jpeg",
  alt: "doom",
  category: "Marvel"
}, {
  src: "./images/marvel/hulk.jpeg",
  alt: "hulk",
  category: "Marvel"
}, {
  src: "./images/marvel/drstrange.jpeg",
  alt: "dr-strange",
  category: "Marvel"
}, {
  src: "./images/marvel/ironman.jpeg",
  alt: "iron-manss",
  category: "Marvel"
}, {
  src: "./images/dc/cap-america.jpeg",
  alt: "cpt-america",
  category: "Marvel"
}, {
  src: "./images/marvel/venom.jpeg",
  alt: "venom",
  category: "Marvel"
}, {
  src: "./images/marvel/carnage.jpeg",
  alt: "carnage",
  category: "Marvel"
}, {
  src: "./images/marvel/black-cat.jpeg",
  alt: "black-cat",
  category: "Marvel"
}, {
  src: "./images/dc/joker.jpeg",
  alt: "joker",
  category: "DC"
}, {
  src: "./images/dc/batman.jpeg",
  alt: "batman",
  category: "DC"
}, {
  src: "./images/dc/wonder_woman.jpeg",
  alt: "wonder-soman",
  category: "DC"
}, {
  src: "./images/dc/flash.jpeg",
  alt: "flash",
  category: "DC"
}, {
  src: "./images/dc/aquaman.jpeg",
  alt: "aquaman",
  category: "DC"
}, {
  src: "./images/dc/pink.jpeg",
  alt: "pink",
  category: "DC"
}, {
  src: "./images/dc/robin.jpeg",
  alt: "robin",
  category: "DC"
}, {
  src: "./images/dc/superman.jpeg",
  alt: "superman",
  category: "DC"
}, {
  src: "./images/dc/greenlight.jpeg",
  alt: "greenlight",
  category: "DC"
}, {
  src: "./images/dc/kovacs.jpeg",
  alt: "kovacs",
  category: "DC"
}];

function createNavbar(links) {
  var nav = document.createElement("nav");
  var ul = document.createElement("ul"); //loop through the links

  links.forEach(function (_ref) {
    var text = _ref.text,
        filter_category = _ref.filter_category;
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = text;
    li.setAttribute("data-filter", filter_category);
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  return nav;
}

function styleNavbar(nav) {
  var ul = nav.querySelector("ul");
  var li = ul.querySelectorAll("li");
  nav.style.width = "100%";
  ul.classList.add("nav-link");
  li.forEach(function (item) {
    var a = item.querySelector("a");
    item.style.fontSize = "20px";
    item.style.padding = "1.2rem";
    a.style.cursor = "pointer";
  });
}

var nav = createNavbar(links);
styleNavbar(nav);
hr.insertAdjacentElement("afterend", nav); //create gallery

function createGallery(imgs) {
  var container = document.createElement("div");
  container.classList.add("gallery"); //loop through the images array of objects, destructure the props

  imgs.forEach(function (_ref2) {
    var src = _ref2.src,
        alt = _ref2.alt,
        category = _ref2.category;
    var image = document.createElement("img");
    image.src = src; //set the img src

    image.alt = alt; //set the alt text

    image.setAttribute("data-category", category); // tag the img its category as a data-attr

    image.classList.add("img");
    container.appendChild(image);
  });
  return container;
} //click event on li


function filterEvent(nav) {
  var liList = nav.querySelectorAll("li");
  liList.forEach(function (li) {
    //add event listener on li
    li.addEventListener("click", function () {
      //read the data-filter attr stored on the li
      var category = li.getAttribute("data-filter");
      filterImages(category); //toggle active state (only one li has .active at a time)

      liList.forEach(function (item) {
        return item.classList.remove("active");
      });
      li.classList.add("active");
    });
  });
} //filterImages show or hides imgs based on matching data-category attribute.


function filterImages(category) {
  var images = document.querySelectorAll("[data-category]");
  images.forEach(function (img) {
    var matches = category == "all" || img.dataset.category === category; //or click a specific category

    img.style.display = matches ? "" : "none";
  });
} //create the gallery with the img data [{}]


var gallery = createGallery(imageData);
nav.insertAdjacentElement("afterend", gallery);
filterEvent(nav);
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var rellax = new Rellax(".rellax");
}); //need to know how tall is the navbar, so now i can use this now to update or apply to html

var scrollHeight = document.querySelector(".nav-container").offsetHeight; //set custom prop

document.documentElement.style.setProperty("--scroll-top", scrollHeight + "px");
var items = document.querySelectorAll(".accordion-item");

var resetItems = function resetItems() {
  items.forEach(function (item) {
    return item.classList.remove("active");
  });
}; //buttons selected


var handleButtonClick = function handleButtonClick(e) {
  e.stopPropagation();
  e.currentTarget.classList.toggle("active-btn");
  image_.classList.add("glitch-active"); // console.log(button_);
  //remove the glitch when animation end

  setTimeout(function () {
    image_.classList.remove("glitch-active");
  }, 500);
}; // prevent event bubbling, toggle the button's active state, and smoothly scroll to Section 2


var handleButtonArrowClick = function handleButtonArrowClick(e) {
  e.stopPropagation();
  e.currentTarget.classList.toggle("arrow-btn-active");
  document.querySelector("#section2").scrollIntoView({
    behavior: "smooth"
  });
}; //handle top bar on scroll


var handleScroll = function handleScroll() {
  var topbar = document.querySelector("#top-bar");
  var atTop = window.scrollY === 0; //want this to be true if i scrolled to the top

  topbar.classList.toggle("visible-bar", atTop); //if i m top applied

  topbar.classList.toggle("hidden-bar", !atTop);
};

window.addEventListener("scroll", function () {
  return requestAnimationFrame(handleScroll);
});
button_.addEventListener("click", handleButtonClick);
arrow_btn.addEventListener("click", handleButtonArrowClick);
document.addEventListener("click", function (e) {
  //if i click outside remove the style
  button_.classList.remove("active-btn");

  if (!button_.contains(e.target)) {}

  if (!arrow_btn.contains(e.target)) {
    arrow_btn.classList.remove("arrow-btn-active");
  }
});