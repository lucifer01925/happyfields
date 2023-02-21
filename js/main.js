(function () {
    'use strict';

    var owlCarousel = function () {
        new WOW().init();

        $('.owl-carousel').owlCarousel({
            items: 4,
            loop: true,
            margin: 170,
            center: true,
            smartSpeed: 900,
            nav: true,
            navText: [
                "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
                "<i class='fa carousel-right-arrow fa-chevron-right'></i>",
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                600: {
                    items: 1,
                    nav: true,
                    margin: 120,
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 1500,
                    navText: [
                        "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
                        "<i class='fa carousel-right-arrow fa-chevron-right'></i>",
                    ],
                },
            },
        });
    };

    $.fn.goTo = function () {
        $('html, body').animate(
            {
                scrollTop: $(this).offset().top + 'px',
            },
            'slow',
        );
        return this; // for chaining...
    };

    $(function () {
        owlCarousel();
    });
})();

// handle download files
const downloadBtn = document.getElementById('btnDownload');
// console.log('downloadBtn:', downloadBtn);

const fileLink =
    'https://drive.google.com/uc?export=download&id=1m3Lu5baIAUVg7VuvNWC3JuBl9snOYO4P';

const initTimer = () => {
    location.href = fileLink;
};

downloadBtn.addEventListener('click', initTimer);
