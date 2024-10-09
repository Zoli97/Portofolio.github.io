const filters = document.querySelectorAll("section.btns li.btn");
const cards = document.querySelectorAll("div.__grid__ div.card");
//add click event to all buttons
for(var i = 0; i < filters.length; i++)filters[i].addEventListener("click", myFunction);
//access the button which has active class.
//and remove the active class.
//add active class to the button which is clicked.
//get the value of the data-filter attr of the clicekd btn.
//if any of the button is clicked accept the all button, then show the contents of the clicked btn and hide the contents of all of other btns
function myFunction() {
    const currentTab = document.querySelector("section.btns .active");
    const filter = this.getAttribute("data-filter");
    currentTab.classList.remove("active");
    this.classList.add("active");
    if (filter != "all") for(let i = 0; i < cards.length; i++){
        cards[i].classList.add("hide");
        cards[i].classList.remove("active");
        const currentItem = cards[i].getAttribute("data-item");
        if (currentItem == filter) {
            cards[i].classList.add("active");
            cards[i].classList.remove("hide");
        }
    }
    else // if the "all" btn is clicked then show the contents of all the btns.
    for(let i1 = 0; i1 < cards.length; i1++){
        cards[i1].classList.remove("hide");
        cards[i1].classList.add("active");
    }
}

//# sourceMappingURL=myWork.62be6bfe.js.map
