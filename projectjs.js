function openModal() {
        document.getElementById('myModal').style.display = "block";
    }
    
function closeModal() {
        document.getElementById('myModal').style.display = "none";
    }
    
    var slideIndex = 1;
    showSlides(slideIndex);
    
function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
function showSlides(n) {
  var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("d");
    var captionText = document.getElementById("caption");
    var titleText = document.getElementById("title");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    titleText.innerHTML = dots[slideIndex - 1].title;
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
