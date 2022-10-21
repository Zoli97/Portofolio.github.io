const top_line = document.getElementById("topLine");
const windowHeight = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight || 0
);
window.addEventListener("scroll", (e) => {
  const offset = top_line.getBoundingClientRect().top - windowHeight;

  console.log(offset);
});
