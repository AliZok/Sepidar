


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
        prevArrow: `<button type="button" class="slick-prev flex justify-center items-center">
        <?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-chevron-left" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        // </svg></button>`,
        nextArrow:`<button type="button" style="color:red" class="slick-next  flex justify-center items-center">
        <?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-chevron-right" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
        </button>`,
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