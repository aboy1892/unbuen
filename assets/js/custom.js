// document.querySelectorAll('.particle-container').forEach(function (container) {

// });

jQuery(document).ready(function () {
  const menu = $(".menu-wrapper");
  const hamburgerMenu = $(".hamburger-menu");

  hamburgerMenu.on("click", function () {
    menu.toggleClass("active");
  });

  if (window.innerWidth <= 991) {
    jQuery(".header").addClass("active");
  } else {
    jQuery(window).scroll(function () {
      var scroll = jQuery(window).scrollTop();

      if (scroll >= 100) {
        jQuery(".header").addClass("active");
      } else {
        jQuery(".header").removeClass("active");
      }
    });
  }

  var accordionItems = $(".accordion-item");
  accordionItems.each(function () {
    var header = $(this).find(".accordion-header");
    var content = $(this).find(".accordion-content");

    header.on("click", function () {
      var isActive = $(this).parent().hasClass("active");

      // Close all content sections
      accordionItems.removeClass("active");
      accordionItems.find(".accordion-content").removeClass("show");

      // Toggle active class and show content
      if (!isActive) {
        $(this).parent().addClass("active");
        content.addClass("show");
      }
    });
  });

  $(".reels-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    centerMode: true,
    centerPadding: "140px",
    infinite: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  });

  // result slider start xxxxxxxxxxxxx
  const $slider = $(".result-slider");
  const $progressBar = $(".progress-bar");

  $slider.on("init reInit afterChange", function (event, slick, currentSlide) {
    // Get current index or fallback to 0
    let i = (currentSlide ? currentSlide : 0) + 1;
    let total = slick.slideCount;
    let percent = (i / total) * 100;
    $progressBar.css("width", percent + "%");
  });

  $slider.slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    variableWidth: true,
  });
  // result slider ennd xxxxxxxxxxxxx

  $(".testimonial-slider").slick({
    dots: false,
    arrows: true,
    autoplay: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        },
      }
    ],
  });

  $(".nav-link").on("click", function (e) {
    e.preventDefault();

    // Remove active class from all tabs and contents
    $(".nav-link").removeClass("active");
    $(".tab-pane").removeClass("active");

    // Add active class to the clicked tab and corresponding content
    $(this).addClass("active");
    const target = $(this).attr("href");
    $(target).addClass("active");
  });

  // modal satrt
  $("[data-target]").click(function () {
    const targetModal = $(this).data("target"); // Get the target modal from data-target attribute
    $(targetModal).addClass("fade show"); // Show the targeted modal
  });

  // Close modal when the 'x' is clicked
  $(".close-modal").click(function () {
    $(this).closest(".modal").removeClass("fade show"); // Close the closest modal
  });

  // Close modal if clicked outside the modal content
  $(window).click(function (event) {
    if ($(event.target).is(".modal")) {
      $(event.target).removeClass("fade show"); // Close the modal if the overlay is clicked
    }
  });
});
