$(document).ready(function () {
    // setting slide
    currentSlide = "011";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("012");
      }
      if (swipedir == "right") {    
        window.goToSlide("010");
      }
    });
  
    // animation here
    setTimeout(() => {
      $(".flash-card").addClass("show"); //this line only for example
    }, 300);

    setTimeout(() => {
      $(".btn-next").addClass("show"); //this line only for example
    }, 500);

    $(".btn-next").on("touchend click", function () {
      window.goToSlide("012");
    });
  });
  