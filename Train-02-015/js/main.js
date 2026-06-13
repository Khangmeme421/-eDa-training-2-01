$(document).ready(function () {
    // setting slide
    currentSlide = "015";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("016");
      }
      if (swipedir == "right") {    
        window.goToSlide("014");
      }
    });
  
    // animation
    const animations = {
        100: [".content-title"],
        400: [".content-desc"],
        900: [".btn-next"],
    };

    for (const [offset, elem] of Object.entries(animations)) {
        setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
    }
});
  