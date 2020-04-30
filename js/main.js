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
});
