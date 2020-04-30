$(document).ready(function () {
  $(".sidebar .sidebar-icon").on("click", function () {
    if ($(window).width() > 1024)
      $(".sidebar .sidebar-menu").animate(
        { right: 0, left: "75%" },
        600,
        "linear"
      );
    else if ($(window).width() > 500) {
      $(".sidebar .sidebar-menu").animate(
        { right: 0, left: "45%" },
        600,
        "linear"
      );
    } else {
      $(".sidebar .sidebar-menu").animate(
        { right: 0, left: "20%" },
        600,
        "linear"
      );
    }
  });
  $(".sidebar-menu .close-sidebar").on("click", function () {
    $(".sidebar .sidebar-menu").animate(
      { left: "100%", right: "-999px" },
      600,
      "linear"
    );
  });
  document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });

      lazyloadImages.forEach(function (image) {
        imageObserver.observe(image);
      });
    } else {
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");

      function lazyload() {
        if (lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function (img) {
            if (img.offsetTop < window.innerHeight + scrollTop) {
              img.src = img.dataset.src;
              img.classList.remove("lazy");
            }
          });
          if (lazyloadImages.length == 0) {
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }

      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  });
});
