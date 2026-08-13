"use strict";

//handle top bar on scroll
var handleScroll = function handleScroll() {
  var topbar = document.querySelector("#top-bar");
  var atTop = window.scrollY === 0; //want this to be true if i scrolled to the top

  topbar.classList.toggle("visible-bar", atTop); //if i m top applied

  topbar.classList.toggle("hidden-bar", !atTop);
};

window.addEventListener("scroll", function () {
  return requestAnimationFrame(handleScroll);
});

window.onload = function () {
  lax.init(); //adding the driver that i use to control my animations;

  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });
};

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger); // Animate cards on scroll

  gsap.utils.toArray(".card").forEach(function (card) {
    gsap.fromTo(card, {
      opacity: 0,
      x: -50
    }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none reverse"
      }
    });
  }); // Scroll-based animation for images

  gsap.utils.toArray("._img_").forEach(function (image) {
    gsap.fromTo(image, {
      opacity: 0,
      height: 0
    }, {
      opacity: 1,
      height: "470px",
      duration: 1.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none reverse"
      }
    });
  }); // Animate title and text when section is in view

  gsap.utils.toArray(".__section__").forEach(function (section) {
    gsap.fromTo(section.querySelectorAll("._title_"), {
      opacity: 0,
      y: -30
    }, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none reverse"
      }
    });
    gsap.fromTo(section.querySelectorAll("._text_"), {
      opacity: 0,
      y: -50
    }, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power1.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none reverse"
      }
    });
  });
}); //array of objects containing the filtering items

var filterData = [{
  text: "All",
  category: "all"
}, {
  text: "Retro",
  category: "retro"
}, {
  text: "Trippy",
  category: "trippy"
}, {
  text: "Art",
  category: "art"
}, {
  text: "Cartoons",
  category: "cartoons"
}]; //create a function to add a new list item button to the list
//isActive default to false

function createNewListItem(text) {
  var filterCategory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "all";
  var isActive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var li = document.createElement("li");
  var ulContainer = document.querySelector(".btns ul"); //select the ul inside of the section with class btns

  li.className = "btn";
  li.setAttribute("data-filter", filterCategory); //set the data-filter attr dynamically

  li.textContent = text; //add active only if isActive true

  if (isActive) {
    li.classList.add("active");
  }

  ulContainer.appendChild(li); // append the newly created <li> directly into the <ul> element
} //iterate through each filter item(every obj in the [])


filterData.forEach(function (_ref, idx) {
  var text = _ref.text,
      category = _ref.category;
  createNewListItem(text, category, idx === 0); //Parcurgem datele: evaluate to true only for the first item (doar la indexul 0 ("All") isActive devine true)
}); //Toggle the 'active' class to the clicked button

var filterBtns = document.querySelectorAll(".btns .btn"); // select all the buttons that was created.
//iterate through the btns list and attach a click event to each button

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    //delete the active class from the prev btn active
    document.querySelector(".btns .btn.active").classList.remove("active"); // Adăugăm clasa 'active' pe butonul apăsat

    btn.classList.add("active"); //get the selected category with getattribute

    var selectedCategory = btn.getAttribute("data-filter"); //select all the cards

    var cards = document.querySelectorAll(".card"); //iteate through each gif card in the gallery

    cards.forEach(function (card) {
      //read the data-item attribute of the current card
      var cardItemTYpe = card.getAttribute("data-item"); // Check if "all" is selected (shows everything) or if this specific card matches the clicked category

      if (selectedCategory === "all" || cardItemTYpe === selectedCategory) {
        card.style.display = ""; // Afișăm cardul (revine la stilul din CSS / flex / grid)
      } else {
        card.style.display = "none"; // Ascundem cardul
      }
    });
  });
});