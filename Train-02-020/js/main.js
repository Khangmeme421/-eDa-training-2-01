$(document).ready(function () {
    // setting slide
    currentSlide = "020";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
         disableSwipe = true;
      }
      if (swipedir == "right") {    
        window.goToSlide("019");
      }
    });
  
    // animation
    const animations = {
        100: [".producer-section"],
        400: [".traders-section"],
    };

    for (const [offset, elem] of Object.entries(animations)) {
        setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
    }
});