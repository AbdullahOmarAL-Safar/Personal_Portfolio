const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

// initializeSlider();
document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
    if (slides.length === 0) {
        console.error("No slides found!");
        return;
    }
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 4000);
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0; // Reset to first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Go to last slide
    } else {
        slideIndex = index;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function previousSlide() {
    console.log("Previous slide triggered");
    clearInterval(intervalId); // Stop the current interval
    slideIndex--;
    console.log("New slideIndex:", slideIndex);
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 4000); // Restart the interval
}