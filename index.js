/*LOADER*/
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    });
    
      $('body').append('<div style="" id="loadingDiv"><div class="loader"></div></div>');
    $(window).on('load', function(){
      setTimeout(removeLoader, 10); //wait for page load PLUS two seconds.
    });
    function removeLoader(){
        $( "#loadingDiv" ).fadeOut(500, function() {
          // fadeOut complete. Remove the loading div
          $( "#loadingDiv" ).remove(); //makes page more lightweight 
      });  
    }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
    /* CLICKABLE DROPDOWN MENU*/
    function dropFunction() {
        document.getElementById("Drop",).classList.toggle("show");
      }
      function dropFunction2() {
        document.getElementById("Drop2",).classList.toggle("show");
      }

      /*CLOSES DROPDOWN IF WINDOW IS CLICKED*/
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
          var Drop = document.getElementById("Drop");
          var Drop2 = document.getElementById("Drop2");
    
          if (Drop.classList.contains("show")) {
            Drop.classList.remove("show");
          }
          if (Drop2.classList.contains("show")) {
            Drop2.classList.remove("show");
          }
        }
      }
      $("#bilder").click(function() {
        $('html,body').animate({
            scrollTop: $("#container_bilder").offset().top},
            'slow');
    });
    var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}