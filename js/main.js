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

const downloadBtn = document.getElementById('btnDownload');

const fileLink = 'https://github.com/lucifer01925/happyfields/raw/main/application/android/v1.2.0/HappyFields-v1.2.0.apk';

const downloadFile = () => {
  const anchor = document.createElement('a');
  anchor.setAttribute('href', fileLink);
  anchor.setAttribute('download', 'HappyFields-v1.2.0.apk');
  anchor.click();
};

downloadBtn.addEventListener('click', downloadFile);

