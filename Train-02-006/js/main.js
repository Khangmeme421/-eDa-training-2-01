$(document).ready(function () {
  // setting slide
  currentSlide = "006";
  localStorage.setItem("current-slide", currentSlide);
  disableSwipe = false;

  // flow-slide
  var el = document.getElementById("container");
  swipedetect(el, function (swipedir) {
    if (swipedir == "right") {
      window.goToSlide("005");
    }
    if (swipedir == "left") {
      window.goToSlide("007");
    }
  });

  // animation here
  setTimeout(() => {
    $(".image-left").addClass("show");
  }, 100);

  setTimeout(() => {
    $(".image-right").addClass("show");
  }, 150);

  setTimeout(() => {
    $(".preserve-title").addClass("show");
  }, 250);

  setTimeout(() => {
    $(".rectangle-ig").addClass("show");
  }, 350);

  setTimeout(() => {
    $(".tem-row-1").addClass("show");
  }, 450);

  setTimeout(() => {
    $(".tem-row-2").addClass("show");
  }, 550);

  setTimeout(() => {
    $(".tem-row-3").addClass("show");
  }, 650);

  setTimeout(() => {
    $(".tem-row-4").addClass("show");
  }, 750);
});
