console.log("Javascript Connected!");
const carousel = new bootstrap.Carousel("#homeCarousel", {
    interval: 2000,
    pause: false
});
const carouselButton = document.getElementById("carouselButton");
const faIcon = document.getElementById("faButton");
carouselButton.addEventListener("click", function() {
    if (faIcon.classList.contains("fa-pause")) {
        faIcon.classList.remove("fa-pause");
        faIcon.classList.add("fa-play");
        carousel.pause();
    } else {
        faIcon.classList.remove("fa-play");
        faIcon.classList.add("fa-pause");
        carousel.cycle();
    }
});

//# sourceMappingURL=index.09863fc6.js.map
