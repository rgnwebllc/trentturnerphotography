const swiper = new Swiper(".testimonial-swiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1, // mobile default
  centeredSlides: false, // REMOVE this if present

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2, // always cap at 2
    },
    1024: {
      slidesPerView: 2, // still 2 on desktops
    },
    1400: {
      slidesPerView: 2, // still 2 on large desktops
    }
  }
});
