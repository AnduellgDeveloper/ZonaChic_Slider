const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const intervalTime = 4500;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
document.addEventListener("DOMContentLoaded", () => {
    const lazyLoadElements = document.querySelectorAll(".lazy-load");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("loaded");
                observer.unobserve(entry.target);
            }
        });
    });
    lazyLoadElements.forEach(element => observer.observe(element));
});

showSlide(currentIndex);
setInterval(nextSlide, intervalTime);
