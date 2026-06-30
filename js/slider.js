// js for exhibiton cards slider

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".exhibition-slider");
  const nextBtn = document.querySelector(".exhibition-features__next-btn");
  const prevBtn = document.querySelector(".exhibition-features__prev-btn");
  let cardWidth = document.querySelector(".exhibition_card").offsetWidth + 16;
  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  });
  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });
});


// js for dynamic dots on mobile for choose school section

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("schoolSlider");
  const pagination = document.getElementById("sliderPagination");
  const cards = slider.querySelectorAll(".school-categ-grid_card");
  if (!slider || !pagination || cards.length === 0) return;
  cards.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("slider-dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      const cardWidth = cards[0].offsetWidth + 16;
      slider.scrollTo({
        left: cardWidth * index,
        behavior: "smooth"
      });
    });
    pagination.appendChild(dot);
  });
  const dots = pagination.querySelectorAll(".slider-dot");
  slider.addEventListener("scroll", () => {
    const cardWidth = cards[0].offsetWidth + 16;
    const scrollPosition = slider.scrollLeft;
    const activeIndex = Math.round(scrollPosition / cardWidth);
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  });
});