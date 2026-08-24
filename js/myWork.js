//handle top bar on scroll
const handleScroll = () => {
  const topbar = document.querySelector("#top-bar");

  const atTop = window.scrollY === 0; //want this to be true if i scrolled to the top
  topbar.classList.toggle("visible-bar", atTop); //if i m top applied
  topbar.classList.toggle("hidden-bar", !atTop);
};

window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));

window.onload = () => {
  lax.init();

  //adding the driver that i use to control my animations;
  lax.addDriver("scrollY", () => {
    return window.scrollY;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate cards on scroll
  gsap.utils.toArray(".card").forEach((card) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power1.out",
        overwrite: true,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top center",
          toggleActions: "restart none restart none",
        },
      },
    );
  });

  // Scroll-based animation for images
  gsap.utils.toArray("._img_").forEach((image) => {
    gsap.fromTo(
      image,
      {
        opacity: 0,
        height: 0,
      },
      {
        opacity: 1,
        height: "470px",
        duration: 1.2,
        ease: "power1.out",
        overwrite: true,
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "top center",
          toggleActions: "restart none restart none",

          preventOverlaps: true,
        },
      },
    );
  });

  // Animate title and text when section is in view
  gsap.utils.toArray(".__section__").forEach((section) => {
    gsap.fromTo(
      section.querySelectorAll("._title_"),
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power1.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      section.querySelectorAll("._text_"),
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power1.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
});

//array of objects containing the filtering items

const filterData = [
  { text: "All", category: "all" },
  { text: "Retro", category: "retro" },
  { text: "Trippy", category: "trippy" },
  { text: "Art", category: "art" },
  { text: "Cartoons", category: "cartoons" },
];

//create a function to add a new list item button to the list
//isActive default to false
function createNewListItem(text, filterCategory = "all", isActive = false) {
  const li = document.createElement("li");
  const ulContainer = document.querySelector(".btns ul"); //select the ul inside of the section with class btns
  li.className = "btn";
  li.setAttribute("data-filter", filterCategory); //set the data-filter attr dynamically
  li.textContent = text;

  //add active only if isActive true
  if (isActive) {
    li.classList.add("active");
  }

  ulContainer.appendChild(li); // append the newly created <li> directly into the <ul> element
}

//iterate through each filter item(every obj in the [])
filterData.forEach(({ text, category }, idx) => {
  createNewListItem(text, category, idx === 0); //Parcurgem datele: evaluate to true only for the first item (doar la indexul 0 ("All") isActive devine true)
});

//Toggle the 'active' class to the clicked button

const filterBtns = document.querySelectorAll(".btns .btn"); // select all the buttons that was created.

//iterate through the btns list and attach a click event to each button
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //delete the active class from the prev btn active
    document.querySelector(".btns .btn.active").classList.remove("active");

    // Adăugăm clasa 'active' pe butonul apăsat
    btn.classList.add("active");

    //get the selected category with getattribute
    const selectedCategory = btn.getAttribute("data-filter");

    //select all the cards
    const cards = document.querySelectorAll(".card");

    //iteate through each gif card in the gallery
    cards.forEach((card) => {
      //read the data-item attribute of the current card
      const cardItemTYpe = card.getAttribute("data-item");

      // Check if "all" is selected (shows everything) or if this specific card matches the clicked category
      if (selectedCategory === "all" || cardItemTYpe === selectedCategory) {
        card.style.display = ""; // Afișăm cardul (revine la stilul din CSS / flex / grid)
      } else {
        card.style.display = "none"; // Ascundem cardul
      }
    });
  });
});
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
