let otherLinks = document.querySelector(".otherlinks");
let megaMenu = document.querySelector(".mega");

otherLinks.addEventListener("mouseover", function () {
    megaMenu.classList.add("show");
});

megaMenu.addEventListener("mouseleave", function () {
    megaMenu.classList.remove("show");
});
