
// Initialize Slick Slider
$(document).ready(function () {
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
        nextArrow: `<button type="button" style="color:red" class="slick-next  flex justify-center items-center">
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

    $('.faq-answer').hide();

    $('.faq-question').click(function () {
        const answer = $(this).next('.faq-answer');
        answer.slideToggle(300);

        const toggleBtn = $(this).find('.toggle-btn span');
        if (toggleBtn.text() === '+') {
            toggleBtn.text('-');
        } else {
            toggleBtn.text('+');
        }
    });

    // Initialize map
    var map = L.map('map').setView([36.5049, 51.1937], 13); // Coordinates for Kelardasht, Mazandaran

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker for hotel location
    L.marker([36.5049, 51.1937]).addTo(map)
        .bindPopup('هتل سپیدار')
        .openPopup();

    // Hide all answers initially
    $('.faq-answer').hide();


    // Scroll to top functionality
    $('#scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

});