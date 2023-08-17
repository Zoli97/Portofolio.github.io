//play the lottie when the span is clicked
const play_button = document.querySelector("button");
const svg_container = document.getElementById("svg");

const animation_item = bodymovin.loadAnimation({
  wrapper: svg_container,
  animType: "svg",
  loop: false,
  autoplay: false,
  path: "https://assets8.lottiefiles.com/packages/lf20_tkvgymkx.json",
});

play_button.addEventListener("click", () => {
  //not hidden anymore
  svg_container.classList.remove("hide");
  animation_item.goToAndPlay(0, true);
});

animation_item.addEventListener("complete", () => {
  //once the aniamtion is complete
  svg_container.classList.add("hide");
});

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
