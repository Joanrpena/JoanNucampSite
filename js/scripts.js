console.log("Javascript Connected!");

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
});

const carouselPause = document.getElementById('carouselPause');
carouselPause.addEventListener('click',function(){
    console.log('Pausing the carousel');
    carousel.pause();
})

const carouselPlay = document.getElementById('carouselPlay');
    carouselPlay.addEventListener('click', function (){
        console.log('Cycling the carousel');
        carousel.cycle();
    })
