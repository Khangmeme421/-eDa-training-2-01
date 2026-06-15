$(document).ready(function () {
  // setting slide
  currentSlide = "005";
  localStorage.setItem("current-slide", currentSlide);
  disableSwipe = false;

  // flow-slide
  var el = document.getElementById("container");
  swipedetect(el, function (swipedir) {
    if (swipedir == "left") {
      window.goToSlide("006");
    }
    if (swipedir == "right") {
      window.goToSlide("004");
    }
  });

  // animation here
  setTimeout(() => {
    $(".caution-title").addClass("show");
  }, 100);

  setTimeout(() => {
    $(".caution-list").addClass("show");
  }, 200);
});
