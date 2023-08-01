// =====swiper js====
var swiper = new Swiper(".mySwiper", {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });
// swiper js end
// =====testimoniyal slider-====
var swiper = new Swiper(".mySwiperSlider", {
  spaceBetween: 30,
  speed: 400,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
});
// =====slider end testimoanl=====
  // init Isotope
  var $grid = $('.portfolio-main').isotope({
    // options
  });
  // filter items on button click
  $('.portfolio-button').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // =====isotope end====
  // <!-- aos code===== -->
      AOS.init({
      offset: 300,
      duration:1800,
  }
  );
  // <!-- =====aos js end==== -->







 




