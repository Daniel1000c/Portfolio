//Create function to check if element is in viewport
function isInViewport(element){
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//Function to handle scroll event
function handleScroll(){
    var cards = document.querySelectorAll('.card-hover-container');
    cards.forEach(function(card){
        if(isInViewport(card)) {
          card.style.opacity = 1;
          card.style.animation = 'fadeIn 0.5s ease forwards';   
        }
    });
}

// Attach scroll event listener
window.addEventListener('scroll',handleScroll);