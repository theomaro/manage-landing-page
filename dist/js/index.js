"use strict";
const humbergerMenu = document.getElementById("humberger-menu");
const navbarMenu = document.getElementById("navbar-menu");
humbergerMenu.addEventListener("click", () => {
    humbergerMenu.classList.toggle("is-open");
    navbarMenu.classList.toggle("hidden");
});
const testimonials = document.querySelectorAll("#testimonial");
const indicators = document.querySelectorAll("#indicator");
indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", (e) => {
        const currentTestimonial = testimonials[index];
        const currentIndicator = e.target;
        testimonials.forEach((testimonial, index) => {
            testimonial.classList.add("hidden");
            testimonial.classList.remove("flex");
            indicators[index].classList.remove("bg-BrightRed");
        });
        currentTestimonial.classList.add("flex");
        currentTestimonial.classList.remove("hidden");
        currentIndicator.classList.add("bg-BrightRed");
    });
});
//# sourceMappingURL=index.js.map