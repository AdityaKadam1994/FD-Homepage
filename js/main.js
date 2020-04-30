$(document).ready(function () {
  $(".sidebar .sidebar-icon").on("click", function () {
    console.log("clicked");
    $(".sidebar .sidebar-menu").animate(
      { right: 0, left: "75%" },
      600,
      "linear"
    );
  });
  $(".sidebar-menu .close-sidebar").on("click", function () {
    $(".sidebar .sidebar-menu").animate(
      { left: "100%", right: "-999px" },
      600,
      "linear"
    );
  });
});
