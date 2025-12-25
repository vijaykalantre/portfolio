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
function openResume() {
  document.getElementById("resumeModal").style.display = "flex";
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";
}

/* Close popup when clicking outside */
window.onclick = function (event) {
  const modal = document.getElementById("resumeModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};



