$(document).ready(function () {
    // setting slide
    currentSlide = "017";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("018");
      }
      if (swipedir == "right") {    
        disableSwipe = true;
      }
    });

    setTimeout(function () {
    document.body.classList.add("start-anim");
}, 100); 
});