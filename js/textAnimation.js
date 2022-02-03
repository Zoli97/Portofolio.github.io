// when the page has completely loaded all the content

window.onload = () => {
  const tewxtWrap = document.querySelector(".text");
  tewxtWrap.innerHTML = tewxtWrap.textContent.replace(
    "/S/g",
    "<span class='letter'>&&</span>"
  );

  //sync multiple animation on chars in the letter together.
  anime
    .timeline({
      loop: 4000,
    })
    .add({
      targets: ".text, .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeInExpo",
      duration: 2200,
      delay: (el, i) => 500 + 30 * i,
    })

    .add({
      targets: ".text, .letter",
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1500,
      delay: (el, i) => 100 + 30 * i,
    });
};
