//Navigation
// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Highlight active tab dynamically
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop(); // get file name (e.g., quiz.html)
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});


// Pop Up
 window.addEventListener('DOMContentLoaded', () => {
      const overlay = document.getElementById('welcomeOverlay');
      const welcomeBtn = document.getElementById('welcomeBtn');

      welcomeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
      });
    });