const humbergerMenu = document.getElementById(
  "humberger-menu"
) as HTMLButtonElement;
const navbarMenu = document.getElementById("navbar-menu") as HTMLUListElement;

humbergerMenu.addEventListener("click", () => {
  humbergerMenu.classList.toggle("is-open");
  navbarMenu.classList.toggle("hidden");
});

// TESTIMONIAL SLIDER
const testimonials = document.querySelectorAll(
  "#testimonial"
) as NodeListOf<HTMLDivElement>;

const indicators = document.querySelectorAll(
  "#indicator"
) as NodeListOf<HTMLDivElement>;

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", (e) => {
    const currentTestimonial = testimonials[index];
    const currentIndicator = e.target as HTMLSpanElement;

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
