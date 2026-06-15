$(document).ready(function () {
    // setting slide
    currentSlide = "008";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("009");
      }
      if (swipedir == "right") {    
        window.goToSlide("007");
      }
    });
  
    // animation here
    setTimeout(() => {
      $(".flash-card-background").addClass("show"); 
    }, 400);

    setTimeout(() => {
      $(".flash-card-title").addClass("show");
    }, 800);

    setTimeout(() => {
      $(".flash-card-content").addClass("show");
    }, 800);

    setTimeout(() => {
      $(".btn-next").addClass("show");
    }, 800);

    $(".btn-next").on("touchend click", function () {
      window.goToSlide("009");
    });
  });
  