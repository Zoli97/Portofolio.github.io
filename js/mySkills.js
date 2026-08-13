//get the elements from DOM
const button_ = document.querySelector("#btn_");
const arrow_btn = document.querySelector("#arrow-btn");
const image_ = document.querySelector("#image");

//create a function to add a new section item to my sections list.
//array of object as param.

function createNewSectionItem(images) {
  const section = document.createElement("section");
  section.className = "section4";
  const article = createArticle("article4", "lightgallery", images);
  section.appendChild(article);
  return section;
}

function createImage(classes, src, alt) {
  const image = document.createElement("img");
  image.src = src;
  image.className = classes;
  image.alt = alt;

  return image;
}

//Function that creates the article element and appends the images to it.
function createArticle(classes, id, images) {
  const article = document.createElement("article");
  article.setAttribute("id", id);
  article.className = classes;

  //Iterates through each object in the 'images' array using property destructuring ({ classes, src, alt })
  //foreach -because sarticle contains 3 different images.
  images.forEach(({ classes, src, alt }) => {
    const image = createImage(classes, src, alt);
    article.appendChild(image);
  });
  return article;
}

//an array of objects with the props like class, src, alt, each object is an img item containing the next props.
const images = [
  { classes: "card-img", src: "./images/me3.jpg", alt: "pic" },
  { classes: "card-img1", src: "./images/me4.jpg", alt: "pic" },
  { classes: "card-img2", src: "./images/me5.jpg", alt: "pic" },
];

const newSection = createNewSectionItem(images);
document.querySelector("main").appendChild(newSection);

const rellax = new Rellax(".rellax", {
  center: true,
  breakpoints: [576, 768, 1150, 1201, 1250, 1550],
  offset: true,
});
ScrollOut({
  threshold: 0.5,
  targets: ".img, .my-text, .card-img, .card-img1, .card-img2",
  observeChanges: true,
});
const light_gallery = document.getElementById("lightgallery");
lightGallery(light_gallery, {
  speed: 400,
  mode: "lg-fade",
  showMaximizeIcon: true,
});

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});

//need to know how tall is the navbar, so now i can use this now to update or apply to html
const scrollHeight = document.querySelector(".nav-container").offsetHeight;

//set custom prop
document.documentElement.style.setProperty("--scroll-top", scrollHeight + "px");

const items = document.querySelectorAll(".accordion-item");

const resetItems = () => {
  items.forEach((item) => item.classList.remove("active"));
};

const handleClick = (element, index) => {
  resetItems();
  element.classList.add("active");
  localStorage.setItem("accordionIndex", index);
};
resetItems();

const activeItem = items[localStorage.getItem("accordionIndex")];
if (activeItem) {
  activeItem.classList.add("active");
} else {
  items[0].classList.add("active");
}

//buttons selected
const handleButtonClick = (e) => {
  e.stopPropagation();
  e.currentTarget.classList.toggle("active-btn");
  image_.classList.add("glitch-active");

  console.log(button_);
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
