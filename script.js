function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animated");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target); 
          }
      });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});
