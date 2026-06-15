$(document).ready(function () {
    // setting slide
    currentSlide = "016";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("017");
      }
      if (swipedir == "right") {    
        window.goToSlide("015");
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
  