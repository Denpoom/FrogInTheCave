
var slider = function(sliderElement) {
  var pages = [];
  var currentSlide = 1;
  var isChanging = false;
  var keyUp = { 38: 1, 33: 1 };
  var keyDown = { 40: 1, 34: 1 };

  var init = function() {
    document.body.classList.add("slider__body");

    // control scrolling
    whatWheel =
      "onwheel" in document.createElement("div")
        ? "wheel"
        : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";
    window.addEventListener(whatWheel, function(e) {
      var direction = e.wheelDelta || e.deltaY;
      ///hidden navigation
    if (direction > 0) {
      document.querySelector("nav").style.top = "0";
    } else {
      document.querySelector("nav").style.top = "-80px";
    }

      if (direction > 0) {
        changeSlide(-1);
      } else {
        changeSlide(1);
      }
    
    });

    // allow keyboard input
    window.addEventListener("keydown", function(e) {
      if (keyUp[e.keyCode]) {
        changeSlide(-1);
      } else if (keyDown[e.keyCode]) {
        changeSlide(1);
      }
    });

    // page change animation is done
    detectChangeEnd() &&
      document
        .querySelector(sliderElement)
        .addEventListener(detectChangeEnd(), function() {
          if (isChanging) {
            setTimeout(function() {
              isChanging = false;
              window.location.hash = document.querySelector(
                '[data-slider-index="' + currentSlide + '"]'
              ).id;
            }, 400);
          }
        });

    // set up page and build visual indicators
    document.querySelector(sliderElement).classList.add("slider__container");
    var indicatorContainer = document.createElement("div");
    indicatorContainer.classList.add("slider__indicators");

    var index = 1;
    [].forEach.call(document.querySelectorAll(sliderElement + " > *"), function(
      section
    ) {
      var indicator = document.createElement("a");
      indicator.classList.add("slider__indicator");
      indicator.setAttribute("data-slider-target-index", index);
      indicatorContainer.appendChild(indicator);

      section.classList.add("slider__page");
      pages.push(section);
      section.setAttribute("data-slider-index", index++);
    });

    document.body.appendChild(indicatorContainer);
    document
      .querySelector('a[data-slider-target-index = "' + currentSlide + '"]')
      .classList.add("slider__indicator--active");

    // stuff for touch devices
    var touchStartPos = 0;
    var touchStopPos = 0;
    var touchMinLength = 90;
    document.addEventListener("touchstart", function(e) {
      e.preventDefault();
      if (
        e.type == "touchstart" ||
        e.type == "touchmove" ||
        e.type == "touchend" ||
        e.type == "touchcancel"
      ) {
        var touch = e.touches[0] || e.changedTouches[0];
        touchStartPos = touch.pageY;
      }
    });
    document.addEventListener("touchend", function(e) {
      e.preventDefault();
      if (
        e.type == "touchstart" ||
        e.type == "touchmove" ||
        e.type == "touchend" ||
        e.type == "touchcancel"
      ) {
        var touch = e.touches[0] || e.changedTouches[0];
        var touchStopPos = touch.pageY;
      }
      if (touchStartPos + touchMinLength < touchStopPos) {
        changeSlide(-1);
      } else if (touchStartPos > touchStopPos + touchMinLength) {
        changeSlide(1);
      }
    });
  };

  // prevent double scrolling
  var detectChangeEnd = function() {
    var transition;
    var e = document.createElement("foobar");
    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };

    for (transition in transitions) {
      if (e.style[transition] !== undefined) {
        return transitions[transition];
      }
    }
    return true;
  };

  // handle css change
  var changeCss = function(obj, styles) {
    for (var _style in styles) {
      if (obj.style[_style] !== undefined) {
        obj.style[_style] = styles[_style];
      }
    }
  };

  // handle page/section change
  var changeSlide = function(direction) {
    // already doing it or last/first page, staph plz
    if (
      isChanging ||
      (direction == 1 && currentSlide == pages.length) ||
      (direction == -1 && currentSlide == 1)
    ) {
      return;
    }

    // change page
    currentSlide += direction;
    isChanging = true;
    changeCss(document.querySelector(sliderElement), {
      transform: "translate3d(0, " + -(currentSlide - 1) * 100 + "%, 0)"
    });

    // change dots
    document
      .querySelector("a.slider__indicator--active")
      .classList.remove("slider__indicator--active");
    document
      .querySelector('a[data-slider-target-index="' + currentSlide + '"]')
      .classList.add("slider__indicator--active");
  };

  // go to spesific slide if it exists
  var gotoSlide = function(where) {
    var target = document
      .querySelector(where)
      .getAttribute("data-slider-index");
    if (target != currentSlide && document.querySelector(where)) {
      changeSlide(target - currentSlide);
    }
  };

  // if page is loaded with hash, go to slide
  if (location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0);
      gotoSlide(location.hash);
    }, 1);
  }

  // we have lift off
  if (document.readyState === "complete") {
    init();
  }
  else {
    window.addEventListener("onload", init(), false);
  }
};



slider('.slides');
// gimmic
var lock = 0;
function myFunction2(){
  if(lock == 0){
    lock = 1;
    document.getElementsByClassName("lock")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("unlock")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("img1")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img2")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("button1")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("button1")[0].style.animationDelay = "2s";
  } else {
    lock = 0;
    document.getElementsByClassName("lock")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("unlock")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img2")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img1")[0].style.animation = "fadein 2s forwards";
  }
}

var lock2 = 0;
function myFunction3(){
  if(lock2 == 0){
    lock2 = 1;
    document.getElementsByClassName("lock3")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("unlock3")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("img3")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img4")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("button2")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("button2")[0].style.animationDelay = "2s";
  } else {
    lock2 = 0;
    document.getElementsByClassName("lock3")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("unlock3")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img4")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img3")[0].style.animation = "fadein 2s forwards";
  }
}

var lock3 = 0;
function myFunction4(){
  if(lock3 == 0){
    lock3 = 1;
    document.getElementsByClassName("lock4")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("unlock4")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("img5")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img6")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("button3")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("button3")[0].style.animationDelay = "2s";
  } else {
    lock3 = 0;
    document.getElementsByClassName("lock4")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("unlock4")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img6")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img5")[0].style.animation = "fadein 2s forwards";
  }
}
var lock4 = 0;
function myFunction5(){
  if(lock4 == 0){
    lock4 = 1;
    document.getElementsByClassName("lock5")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("unlock5")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("img7")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img8")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("button4")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("button4")[0].style.animationDelay = "2s";
  } else {
    lock4 = 0;
    document.getElementsByClassName("lock5")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("unlock5")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img8")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img7")[0].style.animation = "fadein 2s forwards";
  }
}
var lock5 = 0;
function myFunction6(){
  if(lock5 == 0){
    lock5 = 1;
    document.getElementsByClassName("lock6")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("unlock6")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("img9")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img10")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("button5")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("button5")[0].style.animationDelay = "2s";
  } else {
    lock5 = 0;
    document.getElementsByClassName("lock6")[0].style.animation = "fadein 2s forwards";
    document.getElementsByClassName("unlock6")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img10")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("img9")[0].style.animation = "fadein 2s forwards";
  }
}
function ask(){
    document.getElementsByClassName("ask")[0].style.animation = "fadeout 2s forwards";
    document.getElementsByClassName("mess3")[0].style.animation = "messange 4s linear 2s";
    document.getElementsByClassName("mess4")[0].style.animation = "messange 4s linear 6s";
    document.getElementsByClassName("mess5")[0].style.animation = "messange 4s linear 10s";
    document.getElementsByClassName("ask2")[0].style.animation = "fadein 2s forwards 14s";
}
function ask2(){
  document.getElementsByClassName("ask2")[0].style.animation = "fadeout 2s forwards";
  document.getElementsByClassName("mess6")[0].style.animation = "messange 4s linear 2s";
  document.getElementsByClassName("mess7")[0].style.animation = "messange 4s linear 6s";
}