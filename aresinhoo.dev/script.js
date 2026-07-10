let slideIndex = 1;
let slideTimer;
showSlides(slideIndex);

//ileri/geri kontrol
function plusSlides(n) {
    clearTimeout(slideTimer); // manuel tıklamada otomatik geçişi resetle
    showSlides(slideIndex += n);
}

//img kontrol
function currentSlide(n) {
    clearTimeout(slideTimer); // manuel tıklamada otomatik geçişi resetle
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    slideTimer = setTimeout(() => {
        showSlides(slideIndex += 1);
    }, 2500); // 2.5 saniyede bir otomatik geçiş
}