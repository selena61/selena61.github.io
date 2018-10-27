/* Page 3_1 */


var coll = document.getElementsByClassName("Reveal1_1");
var a;

for (a = 0; a < coll.length; a++) {
  coll[a].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
    
var coll = document.getElementsByClassName("Reveal2_1");
            var b;

            for (b = 0; b < coll.length; b++) {
              coll[b].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "none";
                } else {
                  content.style.display = "block";
                }
              });
            }

var coll = document.getElementsByClassName("Reveal3_1");
            var c;

            for (c = 0; c < coll.length; c++) {
              coll[c].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "none";
                } else {
                  content.style.display = "block";
                }
              });
            }

/* Page 3_2 */
var coll = document.getElementsByClassName("Reveal1_2");
            var d;

            for (d = 0; d < coll.length; d++) {
              coll[d].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "none";
                } else {
                  content.style.display = "block";
                }
              });
            }

var coll = document.getElementsByClassName("Reveal2_2");
            var e;

            for (e = 0; e < coll.length; e++) {
              coll[e].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "none";
                } else {
                  content.style.display = "block";
                }
              });
            }

var coll = document.getElementsByClassName("Reveal3_2");
            var f;

            for (f = 0; f < coll.length; f++) {
              coll[f].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "none";
                } else {
                  content.style.display = "block";
                }
              });
            }

/* Page 4 */
function HighSchool() {
            var g = document.getElementById("HighSchoolSalary");
            if (g.style.display === "none") {
                g.style.display = "block";
            } else {
                g.style.display = "none";
            }
        }

function Associates() {
            var h = document.getElementById("AssociatesSalary");
            if (h.style.display === "none") {
                h.style.display = "block";
            } else {
                h.style.display = "none";
            }
        }

function Bachelors() {
            var i = document.getElementById("BachelorsSalary");
            if (i.style.display === "none") {
                i.style.display = "block";
            } else {
                i.style.display = "none";
            }
        }

function Masters() {
            var j = document.getElementById("MastersSalary");
            if (j.style.display === "none") {
                j.style.display = "block";
            } else {
                j.style.display = "none";
            }
        }

function Doctoral() {
            var k = document.getElementById("DoctoralSalary");
            if (k.style.display === "none") {
                k.style.display = "block";
            } else {
                k.style.display = "none";
            }
        }

function Professional() {
            var l = document.getElementById("ProfessionalSalary");
            if (l.style.display === "none") {
                l.style.display = "block";
            } else {
                l.style.display = "none";
            }
        }

/* Page 5 Slider 1 */
function initComparisons() {
    var q, r;
    /*find all elements with an "overlay" class:*/
    q = document.getElementsByClassName("TermOverlay");
    for (r = 0; r < q.length; r++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(q[r]);
}
function compareImages(img) {
    var slider, img, clicked = 0, s, t;
    /*get the width and height of the img element*/
    s = img.offsetWidth;
    t = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = (s / 2) + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = (t / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (s / 2) - (slider.offsetWidth / 2) + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchstop", slideFinish);
    function slideReady(v) {
        /*prevent any other actions that may occur when moving over the image:*/
        v.preventDefault();
        /*the slider is now clicked and ready to move:*/
        clicked = 1;
        /*execute a function when the slider is moved:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
    /*the slider is no longer clicked:*/
        clicked = 0;
    }
    function slideMove(v) {
        var pos;
     /*if the slider is no longer clicked, exit this function:*/
        if (clicked == 0) return false;
     /*get the cursor's x position:*/
     pos = getCursorPos(v)
     /*prevent the slider from being positioned outside the image:*/
        if (pos < 0) pos = 0;
        if (pos > s) pos = s;
    /*execute a function that will resize the overlay image according to the cursor:*/
    slide(pos);
    }
    function getCursorPos(v) {
        var u, q = 0;
        v = v || window.event;
        /*get the x positions of the image:*/
        u = img.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        q = v.pageX - u.left;
        /*consider any page scrolling:*/
        q = q - window.pageXOffset;
        return q;
    }
    function slide(q) {
     /*resize the image:*/
    img.style.width = q + "px";
    /*position the slider:*/
    slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}

initComparisons();

/* Page 5 Slider 2 */
            function initComparisons2() {
              var x, y;
              /*find all elements with an "overlay" class:*/
              x = document.getElementsByClassName("GrowthOverlay");
              for (y = 0; y < x.length; y++) {
                /*once for each "overlay" element:
                pass the "overlay" element as a parameter when executing the compareImages function:*/
                compareImages2(x[y]);
              }
              function compareImages2(img2) {
                var slider2, img2, clicked2 = 0, w, z;
                /*get the width and height of the img element*/
                w = img2.offsetWidth;
                z = img2.offsetHeight;
                /*set the width of the img element to 50%:*/
                img2.style.width = (w / 2) + "px";
                /*create slider:*/
                slider2 = document.createElement("DIV");
                slider2.setAttribute("class", "img2-comp2-slider2");
                /*insert slider*/
                img2.parentElement.insertBefore(slider2, img2);
                /*position the slider in the middle:*/
                slider2.style.top = (z / 2) - (slider2.offsetHeight / 2) + "px";
                slider2.style.left = (w / 2) - (slider2.offsetWidth / 2) + "px";
                /*execute a function when the mouse button is pressed:*/
                slider2.addEventListener("mousedown", slideReady2);
                /*and another function when the mouse button is released:*/
                window2.addEventListener("mouseup", slideFinish2);
                /*or touched (for touch screens:*/
                slider2.addEventListener("touchstart", slideReady2);
                /*and released (for touch screens:*/
                window2.addEventListener("touchstop", slideFinish2);
                function slideReady2(gg) {
                  /*prevent any other actions that may occur when moving over the image:*/
                  gg.preventDefault();
                  /*the slider is now clicked and ready to move:*/
                  clicked = 1;
                  /*execute a function when the slider is moved:*/
                  window2.addEventListener("mousemove", slideMove);
                  window2.addEventListener("touchmove", slideMove);
                }
                function slideFinish2() {
                  /*the slider is no longer clicked:*/
                  clicked = 0;
                }
                function slideMove2(gg) {
                  var pos2;
                  /*if the slider is no longer clicked, exit this function:*/
                  if (clicked == 0) return false;
                  /*get the cursor's x position:*/
                  pos2 = getCursorPos2(gg)
                  /*prevent the slider from being positioned outside the image:*/
                  if (pos2 < 0) pos2 = 0;
                  if (pos2 > w) pos2 = w;
                  /*execute a function that will resize the overlay image according to the cursor:*/
                  slide2(pos2);
                }
                function getCursorPos2(gg) {
                  var aa, x = 0;
                  gg = gg || window.event;
                  /*get the x positions of the image:*/
                  aa = img2.getBoundingClientRect();
                  /*calculate the cursor's x coordinate, relative to the image:*/
                  x =gg.pageX - aa.left;
                  /*consider any page scrolling:*/
                  x = x - window.pageXOffset;
                  return x;
                }
                function slide2(x) {
                  /*resize the image:*/
                  img2.style.width = x + "px";
                  /*position the slider:*/
                  slider2.style.left = img2.offsetWidth - (slider2.offsetWidth / 2) + "px";
                }
              }
            }

            initComparisons2();

/* Page 5 Slider 3 */

/* Page 6 */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var m;
  var slides = document.getElementsByClassName("mySlides_1");
  var dots = document.getElementsByClassName("demo_1");
  var captionText = document.getElementById("caption_1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (m = 0; m < slides.length; m++) {
      slides[m].style.display = "none";
  }
  for (m = 0; m < dots.length; m++) {
      dots[m].className = dots[m].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
/* Page 9 */
var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(o) {
  showSlides1(slideIndex1 += o);
}

function currentSlide1(o) {
  showSlides1(slideIndex1 = o);
}

function showSlides1(o) {
  var p;
  var slides1 = document.getElementsByClassName("mySlides");
  var dots1 = document.getElementsByClassName("demo");
  var captionText1 = document.getElementById("caption");
  if (o > slides1.length) {slideIndex1 = 1}
  if (o < 1) {slideIndex1 = slides1.length}
  for (p = 0; p < slides1.length; p++) {
      slides1[p].style.display = "none";
  }
  for (p = 0; p < dots1.length; p++) {
      dots1[p].className = dots1[p].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
  captionText1.innerHTML = dots1[slideIndex1-1].alt;
}