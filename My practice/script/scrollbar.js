 var swiper = new Swiper(".scrollbar", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          1500: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          
        },
        
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: 'progressbar',
        },
      });
     