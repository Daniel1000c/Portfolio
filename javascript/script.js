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

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM fully loaded and parsed');
    
    // Arrow scroll to top functionality
    const arrow = document.querySelector(".your-arrow-selector"); // Replace with your actual arrow selector
    if (arrow) {
        arrow.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Drop-down toggle functionality
    const dropDownToggles = document.getElementsByClassName("dropDown-toggle");
    for (let i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    // Collapsible menu functionality
    const collapsibleButtons = document.querySelectorAll('.btnMenu-Collapsible');
    collapsibleButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this);
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    // Modal form functionality
    const models = {
        generalCustomerForm: document.getElementById("generalCustomerForm"),
        businessPartnersForm: document.getElementById("businessPartnersForm"),
        generalBusinessForm: document.getElementById("generalBusinessForm")
    };

    const btns = {
        generalCustomer: document.getElementById("generalCustomerBtn"),
        businessPartners: document.getElementById("businessPartnersBtn"),
        generalBusiness: document.getElementById("generalBusinessBtn")
    };

    const spans = document.getElementsByClassName("closeBtn");

    function openModel(model) {
        model.style.display = "block";
    }

    function closeModel(model) {
        model.style.display = "none";
    }

    if (btns.generalCustomer) {
        btns.generalCustomer.onclick = function() {
            openModel(models.generalCustomerForm);
        };
    }

    if (btns.businessPartners) {
        btns.businessPartners.onclick = function() {
            openModel(models.businessPartnersForm);
        };
    }

    if (btns.generalBusiness) {
        btns.generalBusiness.onclick = function() {
            openModel(models.generalBusinessForm);
        };
    }

    for (let i = 0; i < spans.length; i++) {
        spans[i].onclick = function() {
            closeModel(this.closest(".formModel"));
        };
    }

    window.onclick = function(event) {
        if (event.target.classList.contains("formModel")) {
            closeModel(event.target);
        }
    }
});