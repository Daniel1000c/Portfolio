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

//get arrow element
var arrow = document.getElementById("scroll-to-top");

// Add scroll event listener
window.addEventListener("scroll",function() {
    //if user scrolls down more than 20px, show the arrow, otherwise hide it
    if (this.document.body.scrollTop > 20 || this.document.documentElement.scrollTop > 20){
        arrow.style.display = "block";
    } else {
        arrow.style.display = "none";
    }
});

// add a click event listener to the arrow
arrow.addEventListener("click",function(){
    // scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Create event listener when user clicks on drop down toggle
var coll = document.getElementsByClassName("dropDown-toggle");

var i;

for (i = 0; i < coll.length; i++){
    coll[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Create event listener when user clicks the separate contact us buttons to show a form for user to fill in
document.addEventListener("DOMContentLoaded",function(){
    
    // get the model
    var model = document.getElementById("generalCustomerForm");

    // get the buttons that opens the model
    var btns = document.querySelectorAll(".inquiry-btn-format");

    // get the span element that closes the model
    var span = document.getElementsByClassName("closeBtn")[0];

    // when user clicks the button, open the model
    btns.forEach(function(btn){
        btn.onclick = function(){
            model.style.display = "block";
        }
    });

    // when the user clicks on the span, close the model
    span.onclick = function(){
        model.style.display = "none";
    }

    // when the user clicks anywhere outside of the model, close it 
    window.onclick = function(event){
        if (event.target == model){
            model.style.display = "none";
        }
    }
});