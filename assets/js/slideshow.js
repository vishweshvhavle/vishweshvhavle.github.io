// Slideshow Functionality
let slideIndex = 1;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    
    slides.forEach(slide => slide.classList.remove('active'));
    
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add('active');
    }
}

function nextSlide() {
    slideIndex++;
    if (slideIndex > document.querySelectorAll('.slide').length) {
        slideIndex = 1;
    }
    showSlide(slideIndex);
}

// Auto advance slides every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);
