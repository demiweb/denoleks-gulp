const swiperComments = new Swiper('.comments .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },

    pagination: {
        el: '.comments .swiper-pagination',
    },
});

const swiperPhotos = new Swiper('.photos .swiper', {
    direction: 'horizontal',
    // loop: true,
    autoplay: {
        delay: 30000000
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30,


    pagination: {
        el: '.photos .swiper-pagination',
    },
});


