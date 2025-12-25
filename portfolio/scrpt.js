function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}
// Mobile menu toggle
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });

    // Close menu on mobile after click
    document.querySelector(".nav-links").classList.remove("show");
  });
});


