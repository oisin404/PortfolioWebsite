// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll('.project-card');

    // Set static gradients for each project card
    const gradients = [
        'linear-gradient(135deg, #ff7e7e, #ffb6f9)',
        'linear-gradient(135deg, #7e7eff, #ff7eff)',
        'linear-gradient(135deg, #b66bff, #ffb6f9)',
        'linear-gradient(135deg, #7effb6, #ffb66b)'
    ];

    projectCards.forEach((card, index) => {
        card.style.background = gradients[index]; // Apply unique gradient to each card
    });
});
