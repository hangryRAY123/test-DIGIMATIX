const sliderHot = document.querySelector('[data-slider-hot]');
const sliderAll = document.querySelector('[data-slider-all]');

const initSlider = (slider) => {
  const swiper = new Swiper(slider, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 12,
      },
      588: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 64,
      },
    },
  });
};

const initSliders = () => {
  if (sliderHot) {
    initSlider(sliderHot);
  }

  if (sliderAll) {
    initSlider(sliderAll);
  }
};

export {initSliders};
