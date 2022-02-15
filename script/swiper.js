var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragClass: '.swiper-scrollbar-drag',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });