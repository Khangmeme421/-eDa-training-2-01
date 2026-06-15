$(document).ready(function () {
  // setting slide
  currentSlide = "004";
  localStorage.setItem("current-slide", currentSlide);
  disableSwipe = false;

  // flow-slide
  var el = document.getElementById("container");
  swipedetect(el, function (swipedir) {
    if (swipedir == "left") {
      window.goToSlide("005");
    }
    if (swipedir == "right") {
      window.goToSlide("003");
    }
  });

  // animation here
  setTimeout(() => {
    $(".note-title").addClass("show");
  }, 100);

  setTimeout(() => {
    $(".note-icon-1, .note-block-1").addClass("show");
  }, 200);

  setTimeout(() => {
    $(".note-icon-2, .note-block-2").addClass("show");
  }, 300);

  setTimeout(() => {
    $(".note-icon-3, .note-block-3").addClass("show");
  }, 400);

  setTimeout(() => {
    $(".note-icon-4, .note-block-4").addClass("show");
  }, 500);
});
