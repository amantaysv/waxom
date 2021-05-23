$(document).ready(function () {
  $(".slider").owlCarousel({
    loop: true,
    nav: true,
    navText: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".post-content").owlCarousel({
    loop: true,
    nav: true,
    navText: false,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  
  AOS.init();

  $("ul.project-caption").on("click", "li:not(.active)", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.project-tabs")
      .find("div.project-content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
});
