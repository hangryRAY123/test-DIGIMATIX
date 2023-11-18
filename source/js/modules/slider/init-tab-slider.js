const tabSlider = document.querySelector('[data-slider-tab]');

const initSlider = (slider) => {
  const nextButton = document.querySelector('[data-collection-next]');
  const prevButton = document.querySelector('[data-collection-prev]');

  const swiper = new Swiper(slider, {
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    rewind: true,
    breakpoints: {
      320: {
        slidesPerGroup: 1,
      },
      768: {
        slidesPerGroup: 2,
      },
    },
  });

  const slides = slider.querySelectorAll('.swiper-slide');
  let slidesWidth;

  const getSlidesWidth = () => {
    slidesWidth = 0;
    const style = slides[0].currentStyle || window.getComputedStyle(slides[0]);
    // const childStyle = slides[0].children[0].currentStyle || window.getComputedStyle(slides[0].children[0]);
    const sliderStyle = slider.currentStyle || window.getComputedStyle(slider);

    const margin = parseInt(style.marginRight, 10);
    // const padding = parseInt(childStyle.paddingRight, 10);
    const sliderPadding = parseInt(sliderStyle.paddingRight, 10);

    slides.forEach((slide) => {
      slidesWidth += (slide.offsetWidth + margin);
    });
    slidesWidth = slidesWidth - (sliderPadding + margin);
  };

  const breakpoint = window.matchMedia('(min-width:1024px)');
  const breakpointChecker = () => {
    getSlidesWidth();
  };
  breakpoint.addEventListener('change', breakpointChecker);
  breakpointChecker();
};

const initTabSlider = () => {
  if (tabSlider) {
    initSlider(tabSlider);
  }
};

export {initTabSlider};

