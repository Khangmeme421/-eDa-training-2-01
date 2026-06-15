$(document).ready(function () {
    // setting slide
    currentSlide = "010";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("011");
      }
      if (swipedir == "right") {    
        window.goToSlide("009");
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
      window.goToSlide("011");
    });
  });
  