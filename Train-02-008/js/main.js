$(document).ready(function () {
    // setting slide
    currentSlide = "012";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("013");
      }
      if (swipedir == "right") {    
        window.goToSlide("011");
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
  