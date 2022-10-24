const windowHeight = Math.max(document.documentElement.clientHeight || window.innerHeight || 0);
const line = document.getElementById("single_line");
window.onload = ()=>{
    const offset = line.getBoundingClientRect().top - windowHeight;
    console.log("\uD83D\uDE80 ~ file: moveTheLine2.js ~ line 8 ~ offset", offset);
    if (offset > 0) {
        line.classList.remove("move");
        return;
    }
    if (line.className.indexOf("move") === -1) line.classList.add("move");
};

//# sourceMappingURL=index.d14b2380.js.map
