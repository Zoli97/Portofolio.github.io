import Glide from "@glidejs/glide";

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

new Glide(".glide", {
  type: "slider",
  perView: 3,
  breakpoints: {
    600: { perView: 1 },
    800: { perView: 2 },
    950: { perView: 3 },
    1500: { perView: 4 },
  },
  autoplay: 2500,
  bound: true,
}).mount();
