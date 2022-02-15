 var swiper = new Swiper(".scrollbar", {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1524: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          
        },
       
      });
     