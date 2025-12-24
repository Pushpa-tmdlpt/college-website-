
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;

function changeSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

// Change every 3 seconds
setInterval(changeSlide, 3000);






// let slides = document.querySelectorAll(".slide");
// let current = 0;

// // Show slide
// function showSlide(index) {
//     slides.forEach(slide => slide.classList.remove("active"));
//     slides[index].classList.add("active");
// }

// // Next slide
// function nextSlide() {
//     current++;
//     if (current >= slides.length) {
//         current = 0;
//     }
//     showSlide(current);
// }

// // Previous slide
// function prevSlide() {
//     current--;
//     if (current < 0) {
//         current = slides.length - 1;
//     }
//     showSlide(current);
// }

// // Buttons
// document.querySelector(".next").addEventListener("click", nextSlide);
// document.querySelector(".prev").addEventListener("click", prevSlide);

// // Auto slide every 2 seconds
// setInterval(nextSlide, 8000);
