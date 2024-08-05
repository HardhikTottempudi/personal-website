var swiper2 = new Swiper('.swiper2-container', {
    direction: 'vertical',
    mousewheel: {
        releaseOnEdges: true, // Allows normal scrolling behavior outside Swiper
    },
    // Disable freeMode for more controlled scrolling
    freeMode: false,
    // Enable snapping to slides
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600, // Transition speed in milliseconds
    pagination: {
        el: '.swiper2-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' swiper2-pagination-bullet">' +
                   '<span class="pagination-label2">Slide ' + (index + 1) + '</span>' +
                   '</span>';
        },
    },
    on: {
        init: function () {
            // Hide pagination dots initially
            document.querySelector('.swiper2-pagination').style.display = 'none';
        },
        slideChangeTransitionStart: function () {
            // Show pagination dots when swiper is active
            document.querySelector('.swiper2-pagination').style.display = 'flex';
        },
        slideChangeTransitionEnd: function () {
            // Optionally hide pagination dots after transition ends
             document.querySelector('.swiper2-pagination').style.display = 'none';
        }
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true, // Allows dragging of the scrollbar
    },
});
