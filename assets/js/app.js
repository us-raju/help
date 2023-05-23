// preloader start
$(window).on("load", function () {
  $(".preloader").fadeOut();
});
// preloader end

$(function () {
  //  Banner section js start
  $(".banner_item").slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    dotsClass: "dots_style",
  });
  //  Banner section js end

  //  New Arrivals Products section js start
  $(".nap_slider").slick({
    slidesToShow: 4,
    prevArrow: '<i class="nap_slider_arrow fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="nap_slider_arrow fa-solid fa-angle-right"></i>',
  });
  //  New Arrivals Products section js end

  // The final coundown js start
  $(".deals_timer").countdown("2030/10/10", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          '<div class="deals_timer_param"><span>%D</span><span>Days</span></div>' +
          '<span class="deals_timer_clone">:</span>' +
          '<div class="deals_timer_param"><span>%H</span><span>Hours</span></div>' +
          '<span class="deals_timer_clone">:</span>' +
          '<div class="deals_timer_param"><span>%M</span><span>Minute</span></div>' +
          '<span class="deals_timer_clone">:</span>' +
          '<div class="deals_timer_param"><span>%S</span><span>Sec</span></div>'
      )
    );
  });
  // The final coundown js end

  // deals section js start
  $(".deals_slider").slick({
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 2,
    dots: true,
    dotsClass: "dots_style",
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // deals section js end

  // latest_news section start
  $(".latest_news_slider").slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    dotsClass: "dots_style",
  });
  // latest_news section end
});
AOS.init({
  // initClassName: "aos-init",
  // animatedClassName: "aos-animate",
});
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// count section start
const { counterUp } = window.counterUp;
const el = document.querySelector(".counter");
counterUp(el, {
  duration: 3000,
  delay: 16,
});
// count section end
