


// Add mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // This is a minimal script that could be expanded for mobile menu functionality
    // Currently the mobile menu is hidden via CSS media query
    
    // You could add a hamburger menu button and toggle the nav visibility
    // const menuButton = document.createElement('button');
    // menuButton.classList.add('menu-toggle');
    // menuButton.innerHTML = '☰';
    // document.querySelector('header .container').prepend(menuButton);
    
    // menuButton.addEventListener('click', function() {
    //     document.querySelector('nav').classList.toggle('active');
    // });
});

// Initialize Slick Slider
$(document).ready(function(){
    $('.custom-slider').slick({
        rtl: true,  
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});