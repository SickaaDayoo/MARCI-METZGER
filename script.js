  
    function toggleMenu() {
        document.querySelector(".main-nav").classList.toggle("active");
    }

    

let currentSlide = 0;

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");

function moveSlide(direction) {

    const slidesPerView = window.innerWidth <= 768 ? 1 : 3;

    const maxSlide = slides.length - slidesPerView;

    currentSlide += direction;

    if (currentSlide > maxSlide) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = maxSlide;
    }

    const slideWidth = 100 / slidesPerView;

    track.style.transform =
        `translateX(-${currentSlide * slideWidth}%)`;
}

