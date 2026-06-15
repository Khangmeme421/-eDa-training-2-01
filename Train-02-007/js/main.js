$(document).ready(function () {
    // setting slide
    currentSlide = "007";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;
  
    // flow-slide
    var el = document.getElementById("container");
    swipedetect(el, function (swipedir) {
      if (swipedir == "left") {
        window.goToSlide("008");
      }
      if (swipedir == "right") {    
        window.goToSlide("006");
      }
    });

    const animations = {
        300: [".main-title",".sub-title"],
        500: [".hero-text"],
        700: [".btn-next"]
    };


    for (const [offset, elem] of Object.entries(animations)) {
      setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
  }
  
    // animation here
    setTimeout(() => {
      $(".line").addClass("show"); //this line only for example
    }, 500);

    $(".btn-next").on("touchend click", function () {
      window.goToSlide("008");
    });
  });
  