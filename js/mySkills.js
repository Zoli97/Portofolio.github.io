//get the elements from DOM
const button_ = document.querySelector("#btn_");
const arrow_btn = document.querySelector("#arrow-btn");
const image_ = document.querySelector("#image");

const rellax = new Rellax(".rellax", {
  center: true,
  breakpoints: [576, 768, 1150, 1201, 1250, 1550],
  offset: true,
});
ScrollOut({
  threshold: 0.5,
  targets: ".img, .my-text, .card-img, .card-img1, .card-img2",
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
