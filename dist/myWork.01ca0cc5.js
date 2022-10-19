//get the elements
const my_btn = document.querySelector(".my-btn");
const polygon = document.getElementById("polygon");
//function for random Colors on my svg with hsl
const randomColorsOnSvg = ()=>{
    return "hsl(" + 360 * Math.random() + ",60%,70%)";
};
//apply the function that makes the color changes on my svg.
const randomizeColors = ()=>{
    polygon.style.fill = randomColorsOnSvg();
};
//add the click event listener for button and calls the above functions.
my_btn.addEventListener("click", ()=>{
    randomColorsOnSvg();
    randomizeColors();
});

//# sourceMappingURL=myWork.01ca0cc5.js.map
