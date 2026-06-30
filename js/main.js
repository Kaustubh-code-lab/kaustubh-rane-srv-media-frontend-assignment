// js for dynmaic site header on scroll

const header = document.getElementById("site-header");
function handleScroll() {
    if (window.innerWidth > 768) {
        if (window.scrollY > 5) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    } else {
        header.classList.remove("scrolled");
    }
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);
handleScroll();
