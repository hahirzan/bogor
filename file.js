var slideIndex = 1;
showSlides(slideIndex);

// Kontrol next/prev
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var a;
  var efek = document.getElementsByClassName("slide1");
  var tombol = document.getElementsByClassName("slide2");
  if (n > efek.length) {slideIndex = 1}
  if (n < 1) {slideIndex = efek.length}
  for (a = 0; a < efek.length; a++) {
      efek[a].style.display = "none";
  }
  for (a = 0; a < tombol.length; a++) {
      tombol[a].className = tombol[a].className.replace(" berjalan", "");
  }
  efek[slideIndex-1].style.display = "block";
  tombol[slideIndex-1].className += " berjalan";
}