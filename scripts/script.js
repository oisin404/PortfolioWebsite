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

    const gradients = [
        'linear-gradient(135deg, #ab00b2, #ff00e2)',
        'linear-gradient(135deg, #e536c6, #cd00ff)',
        'linear-gradient(135deg, #ab00b2, #ff00e2)',
        'linear-gradient(135deg, #e536c6, #cd00ff)'
    ];

    projectCards.forEach((card, index) => {
        card.style.background = gradients[index];
    });
});
