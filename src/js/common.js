$(document).ready(function () {
  $(".slider").owlCarousel({
    loop: true,
    nav: true,
    navText: false,
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
    margin: 10,
    nav: true,
    navText: false,
    dots: false,
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

  $(".burger").on("click", function () {
    $(".menu").addClass("active");
  });
  $(".close").on("click", function () {
    $(".menu").removeClass("active");
  });

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
