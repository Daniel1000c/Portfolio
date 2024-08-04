// Create movement for carousel slider
let currentIndex = 0;
const items = document.querySelectorAll('.sliderItem');
const totalItems = items.length;

function showSlide(index){
    const carouselInner = document.querySelector('.sliderContent');
    if(index >= totalItems){
        currentIndex = 0;
    } else if(index < 0){
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide(){
    showSlide(currentIndex + 1);
}

function prevSlide(){
    showSlide(currentIndex - 1);
}

