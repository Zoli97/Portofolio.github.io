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
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse",
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
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse",
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
