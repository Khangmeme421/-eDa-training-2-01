$(document).ready(function () {
  // setting slide
  currentSlide = "002";
  localStorage.setItem("current-slide", currentSlide);
  disableSwipe = false;

  // flow-slide
  var el = document.getElementById("container");
  swipedetect(el, function (swipedir) {
    if (swipedir == "left") {
      window.goToSlide("003");
    }
    if (swipedir == "right") {
      window.goToSlide("001");
    }
  });

  // animation
  setTimeout(function () {
    $(".info-block").addClass("show");
  }, 100);
});
