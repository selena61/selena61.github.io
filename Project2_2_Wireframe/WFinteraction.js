/* template3_1 */

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

/* template3_2 */

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

/* template4 */

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

/* template5 */

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
    var slider, img1, clicked = 0, s, t;
    /*get the width and height of the img element*/
    s = img1.offsetWidth;
    t = img1.offsetHeight;
    /*set the width of the img element to 50%:*/
    img1.style.width = (s / 2) + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img1.parentElement.insertBefore(slider, img1);
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
        u = img1.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        q = v.pageX - u.left;
        /*consider any page scrolling:*/
        q = q - window.pageXOffset;
        return q;
    }
    function slide(q) {
     /*resize the image:*/
    img1.style.width = q + "px";
    /*position the slider:*/
    slider.style.left = img1.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}

initComparisons();
