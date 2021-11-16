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
    loop: true,
    autoplay: {
        delay: 3000
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: '-7%',

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 'auto',
            spaceBetween: '-7%',
        }
    },


    pagination: {
        el: '.photos .swiper-pagination',
    },
});

const swiperAbout = new Swiper('.about-us .swiper', {
    direction: 'horizontal',

    breakpoints: {
        0: {
            loop: true,
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3
        }
    },

    pagination: {
        el: '.about-us .swiper-pagination',
    },
});

const burger = document.querySelector('.header__burger')

burger.addEventListener('click', function (e) {
    this.classList.toggle('header__burger--active')
})

const aboutUsVideo = [...document.querySelectorAll('.about-us__video')]

if (!aboutUsVideo.length) {

} else {
    const aboutUsPopup = document.querySelector('.about-us__popup')
    const closeAboutUsPopup = document.querySelector('#close-about-us-popup')

    aboutUsVideo.forEach(elem => {
        elem.addEventListener('click', function () {
            aboutUsPopup.classList.add('about-us__popup--visible')
        })
    })

    closeAboutUsPopup.addEventListener('click', function (e) {
        e.stopPropagation()
        aboutUsPopup.classList.remove('about-us__popup--visible')
    })

    aboutUsPopup.addEventListener('click', function (e) {
        e.stopPropagation()
        aboutUsPopup.classList.remove('about-us__popup--visible')
    })
}

const btnTag = [...document.querySelectorAll('.btn-tag')]

if (!btnTag.length) {

} else {
    const popUpPrices = document.querySelector('.popup-prices')

    btnTag.forEach(elem => {
        elem.addEventListener('click', function (e) {
            e.preventDefault()
            popUpPrices.classList.add('popup-prices--active')
        })
    })

    popUpPrices.addEventListener('click', function (e) {
        const item = e.target
        if (item.classList.contains('popup-prices--active')) {
            this.classList.remove('popup-prices--active')
        }
    })
}

const orderCar = [...document.querySelectorAll('.cars .cars__card .btn ')]

if (!orderCar.length) {

} else {
    const popUpOrder = document.querySelector('.popup-order')
    const carRadioBtn = [...document.querySelectorAll('.order__form input[type=radio]')]

    orderCar.forEach(elem => {
        elem.addEventListener('click', function (e) {
            e.preventDefault()
            popUpOrder.classList.add('popup-order--active')

            const item = this
            carRadioBtn.forEach(elem => {
                if (elem.value === item.dataset.radio) {
                   elem.checked = true
                }
            })
        })
    })

    popUpOrder.addEventListener('click', function (e) {
        const item = e.target
        if (item.classList.contains('popup-order--active')) {
            this.classList.remove('popup-order--active')
        }
    })
}


