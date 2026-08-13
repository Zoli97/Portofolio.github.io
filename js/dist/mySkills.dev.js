"use strict";

//get the elements from DOM
var button_ = document.querySelector("#btn_");
var arrow_btn = document.querySelector("#arrow-btn");
var image_ = document.querySelector("#image"); //create a function to add a new section item to my sections list.
//array of object as param.

function createNewSectionItem(images) {
  var section = document.createElement("section");
  section.className = "section4";
  var article = createArticle("article4", "lightgallery", images);
  section.appendChild(article);
  return section;
}

function createImage(classes, src, alt) {
  var image = document.createElement("img");
  image.src = src;
  image.className = classes;
  image.alt = alt;
  return image;
} //Function that creates the article element and appends the images to it.


function createArticle(classes, id, images) {
  var article = document.createElement("article");
  article.setAttribute("id", id);
  article.className = classes; //Iterates through each object in the 'images' array using property destructuring ({ classes, src, alt })
  //foreach -because sarticle contains 3 different images.

  images.forEach(function (_ref) {
    var classes = _ref.classes,
        src = _ref.src,
        alt = _ref.alt;
    var image = createImage(classes, src, alt);
    article.appendChild(image);
  });
  return article;
} //an array of objects with the props like class, src, alt, each object is an img item containing the next props.


var images = [{
  classes: "card-img",
  src: "./images/me3.jpg",
  alt: "pic"
}, {
  classes: "card-img1",
  src: "./images/me4.jpg",
  alt: "pic"
}, {
  classes: "card-img2",
  src: "./images/me5.jpg",
  alt: "pic"
}];
var newSection = createNewSectionItem(images);
document.querySelector("main").appendChild(newSection);
var rellax = new Rellax(".rellax", {
  center: true,
  breakpoints: [576, 768, 1150, 1201, 1250, 1550],
  offset: true
});
ScrollOut({
  threshold: 0.5,
  targets: ".img, .my-text, .card-img, .card-img1, .card-img2",
  observeChanges: true
});
var light_gallery = document.getElementById("lightgallery");
lightGallery(light_gallery, {
  speed: 400,
  mode: "lg-fade",
  showMaximizeIcon: true
});
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
}); //need to know how tall is the navbar, so now i can use this now to update or apply to html

var scrollHeight = document.querySelector(".nav-container").offsetHeight; //set custom prop

document.documentElement.style.setProperty("--scroll-top", scrollHeight + "px");
var items = document.querySelectorAll(".accordion-item");

var resetItems = function resetItems() {
  items.forEach(function (item) {
    return item.classList.remove("active");
  });
};

var handleClick = function handleClick(element, index) {
  resetItems();
  element.classList.add("active");
  localStorage.setItem("accordionIndex", index);
};

resetItems();
var activeItem = items[localStorage.getItem("accordionIndex")];

if (activeItem) {
  activeItem.classList.add("active");
} else {
  items[0].classList.add("active");
} //buttons selected


var handleButtonClick = function handleButtonClick(e) {
  e.stopPropagation();
  e.currentTarget.classList.toggle("active-btn");
  image_.classList.add("glitch-active");
  console.log(button_); //remove the glitch when animation end

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