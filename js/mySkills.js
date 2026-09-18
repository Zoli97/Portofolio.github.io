//get the elements from DOM
const button_ = document.querySelector("#btn_");
const arrow_btn = document.querySelector("#arrow-btn");
const image_ = document.querySelector("#image");
const hr = document.querySelector(".hr");

const links = [
  { text: "All", filter_category: "all" },
  { text: "Marvel", filter_category: "Marvel" },
  { text: "DC", filter_category: "DC" },
];

const imageData = [
  { src: "./images/marvel/thor.jpeg", alt: "thor", category: "Marvel" },
  {
    src: "./images/marvel/spiderman.jpeg",
    alt: "spider-man",
    category: "Marvel",
  },
  { src: "./images/marvel/doom.jpeg", alt: "doom", category: "Marvel" },
  { src: "./images/marvel/hulk.jpeg", alt: "hulk", category: "Marvel" },

  {
    src: "./images/marvel/drstrange.jpeg",
    alt: "dr-strange",
    category: "Marvel",
  },
  {
    src: "./images/marvel/ironman.jpeg",
    alt: "iron-manss",
    category: "Marvel",
  },
  {
    src: "./images/dc/cap-america.jpeg",
    alt: "cpt-america",
    category: "Marvel",
  },
  { src: "./images/marvel/venom.jpeg", alt: "venom", category: "Marvel" },
  { src: "./images/marvel/carnage.jpeg", alt: "carnage", category: "Marvel" },
  {
    src: "./images/marvel/black-cat.jpeg",
    alt: "black-cat",
    category: "Marvel",
  },
  { src: "./images/dc/joker.jpeg", alt: "joker", category: "DC" },

  { src: "./images/dc/batman.jpeg", alt: "batman", category: "DC" },
  {
    src: "./images/dc/wonder_woman.jpeg",
    alt: "wonder-soman",
    category: "DC",
  },
  { src: "./images/dc/flash.jpeg", alt: "flash", category: "DC" },
  { src: "./images/dc/aquaman.jpeg", alt: "aquaman", category: "DC" },
  { src: "./images/dc/pink.jpeg", alt: "pink", category: "DC" },
  { src: "./images/dc/robin.jpeg", alt: "robin", category: "DC" },
  { src: "./images/dc/superman.jpeg", alt: "superman", category: "DC" },
  { src: "./images/dc/greenlight.jpeg", alt: "greenlight", category: "DC" },
  { src: "./images/dc/kovacs.jpeg", alt: "kovacs", category: "DC" },
];

function createNavbar(links) {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  //loop through the links

  links.forEach(({ text, filter_category }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    li.setAttribute("data-filter", filter_category);
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  return nav;
}

function styleNavbar(nav) {
  const ul = nav.querySelector("ul");
  const li = ul.querySelectorAll("li");

  nav.style.width = "100%";
  ul.classList.add("nav-link");

  li.forEach((item) => {
    const a = item.querySelector("a");
    item.style.fontSize = "20px";
    item.style.padding = "1.2rem";
    a.style.cursor = "pointer";
  });
}

const nav = createNavbar(links);
styleNavbar(nav);

hr.insertAdjacentElement("afterend", nav);

//create gallery
function createGallery(imgs) {
  const container = document.createElement("div");
  container.classList.add("gallery");

  //loop through the images array of objects, destructure the props
  imgs.forEach(({ src, alt, category }) => {
    const image = document.createElement("img");
    image.src = src; //set the img src
    image.alt = alt; //set the alt text
    image.setAttribute("data-category", category); // tag the img its category as a data-attr
    image.classList.add("img");
    container.appendChild(image);
  });

  return container;
}

//click event on li
function filterEvent(nav) {
  const liList = nav.querySelectorAll("li");

  liList.forEach((li) => {
    //add event listener on li
    li.addEventListener("click", () => {
      //read the data-filter attr stored on the li
      const category = li.getAttribute("data-filter");
      filterImages(category);

      //toggle active state (only one li has .active at a time)
      liList.forEach((item) => item.classList.remove("active"));
      li.classList.add("active");
    });
  });
}

//filterImages show or hides imgs based on matching data-category attribute.
function filterImages(category) {
  const images = document.querySelectorAll("[data-category]");
  images.forEach((img) => {
    const matches = category == "all" || img.dataset.category === category; //or click a specific category
    img.style.display = matches ? "" : "none";
  });
}

//create the gallery with the img data [{}]
const gallery = createGallery(imageData);
nav.insertAdjacentElement("afterend", gallery);
filterEvent(nav);

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  var rellax = new Rellax(".rellax");
});

//need to know how tall is the navbar, so now i can use this now to update or apply to html
const scrollHeight = document.querySelector(".nav-container").offsetHeight;

//set custom prop
document.documentElement.style.setProperty("--scroll-top", scrollHeight + "px");

const items = document.querySelectorAll(".accordion-item");

const resetItems = () => {
  items.forEach((item) => item.classList.remove("active"));
};

//buttons selected
const handleButtonClick = (e) => {
  e.stopPropagation();
  e.currentTarget.classList.toggle("active-btn");
  image_.classList.add("glitch-active");

  // console.log(button_);
  //remove the glitch when animation end
  setTimeout(() => {
    image_.classList.remove("glitch-active");
  }, 500);
};

// prevent event bubbling, toggle the button's active state, and smoothly scroll to Section 2
const handleButtonArrowClick = (e) => {
  e.stopPropagation();
  e.currentTarget.classList.toggle("arrow-btn-active");
  document.querySelector("#section2").scrollIntoView({ behavior: "smooth" });
};
//handle top bar on scroll
const handleScroll = () => {
  const topbar = document.querySelector("#top-bar");

  const atTop = window.scrollY === 0; //want this to be true if i scrolled to the top
  topbar.classList.toggle("visible-bar", atTop); //if i m top applied
  topbar.classList.toggle("hidden-bar", !atTop);
};

window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));

button_.addEventListener("click", handleButtonClick);

arrow_btn.addEventListener("click", handleButtonArrowClick);
document.addEventListener("click", (e) => {
  //if i click outside remove the style
  button_.classList.remove("active-btn");
  if (!button_.contains(e.target)) {
  }

  if (!arrow_btn.contains(e.target)) {
    arrow_btn.classList.remove("arrow-btn-active");
  }
});
