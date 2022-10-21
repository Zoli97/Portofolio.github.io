const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
const top_line = document.getElementById("topLine");
const bottom_line = document.getElementById("bottomLine");
window.onload = ()=>{
    const offset = top_line.getBoundingClientRect().top - windowHeight;
    console.log(offset);
    if (offset > 0) {
        top_line.classList.remove("move");
        bottom_line.classList.remove("move");
        return;
    }
    if (top_line.className.indexOf("move") && bottom_line.className.indexOf("move") === -1) {
        top_line.classList.add("move");
        bottom_line.classList.add("move");
    }
};

//# sourceMappingURL=contact.4fac2dca.js.map
