var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

var myPause = setInterval(function() {
    showSlides(n)
  }, 10000);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) { 
        myPause();
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//var slideIndex = 0;
//showSlides();

//var myPause = setInterval(function() {
//  showSlides()
//}, 10000);

//function showSlides() {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  slideIndex++;
//  if (slideIndex > slides.length) {
//    myPause();
//    slideIndex = 1
//  }
//  slides[slideIndex - 1].style.display = "block";
//  setTimeout(showSlides, 10000); // Change image every 10 seconds
//}

//<div id="slideshow">
//  <div class="mySlides">
//    <img src="http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg">
//  </div>
//  <div class="mySlides">
//    <img src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg">
//  </div>
//  <div class="mySlides">
//    <img src="http://www.imgion.com/images/02/White-kitty-playing-with-chickens.jpg">
//  </div>
//</div>
