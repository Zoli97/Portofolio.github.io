import { animate, stagger, inView, scroll, timeline } from "motion";

//2 cards where i have multiple sections when you scrolling down, i want those to come in based on that portion being in the viewport.
//i view handling the scroll anim
//the animate calls arent going to fire until the section is in view
//i dont want subsequent aniamtion
// Wait for the DOM to be fully loaded

//i dont want subsequent aniamtion

document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".card");
  const images = document.querySelectorAll("._img_");

  // Scroll-based animation for images
  images.forEach((image) => {
    scroll(
      animate(image, {
        opacity: [0, 1],
      }),
      {
        target: image, // Target each image individually
        offset: ["start end", "end start"], // Trigger when image enters the viewport
        easing: "ease-out",
        duration: 1.2, // Control the speed of animation
      }
    );
  });

  inView(".__section__", ({ target }) => {
    const controls = animate(target, { opacity: 1 });
    animate(
      target.querySelectorAll("._img_"),
      {
        height: ["0", "470px"],
        transform: "none",
      },
      { delay: stagger(0.5), duration: 1.2, easing: [0.17, 0.55, 0.55, 1] }
    );
    animate(
      target.querySelectorAll("._title_"),
      {
        opacity: ["0", "1"],
        y: ["-30px", "0"],
      },
      { delay: stagger(0.5), duration: 1.2, easing: [0.17, 0.55, 0.55, 1] }
    );
    animate(
      target.querySelectorAll("._text_"),
      {
        opacity: ["0", "1"],
        y: ["-50px", "0"],
      },
      { delay: stagger(0.5), duration: 1.2, easing: [0.17, 0.55, 0.55, 1] }
    );

    //return (leaveInfo) => controls.stop();
  });

  // Animate the cards on scroll
  inView(cells, ({ target }) => {
    const controls = animate(
      target,
      {
        opacity: [0, 1],
        transform: ["translateX(-50px)", "translateX(0)"],
        // clipPath: ["inset(45% 20% 45% 20%)", "inset(0% 0% 0% 0%)"],
      },
      {
        duration: 0.8,
        delay: stagger(0.1),
        easing: "ease-out",
      }
    );
    return (leaveInfo) => controls.stop();
  });

  // Add a scroll-based animation
  scroll(
    animate(
      cells,
      {
        opacity: [0, 1],
        transform: ["translateX(-100px)", "translateX(0)"],
      },
      {
        easing: "ease-out",
        duration: 2,
      }
    )
  );
});
