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
  const scrollToTopButton = document.getElementById('scrollToTop');
  const headerHeight = document.querySelector('header').offsetHeight;

  const gradients = [
    'linear-gradient(135deg, #ab00b2, #ff00e2)',
    'linear-gradient(135deg, #e536c6, #cd00ff)',
    'linear-gradient(135deg, #ab00b2, #ff00e2)',
    'linear-gradient(135deg, #e536c6, #cd00ff)'
  ];

  projectCards.forEach((card, index) => {
    card.style.background = gradients[index % gradients.length];
  });

  window.addEventListener('scroll', () => {
    scrollToTopButton.style.display = window.scrollY > headerHeight ? 'flex' : 'none';
  });

  scrollToTopButton.addEventListener('click', () => {
    document.querySelector('html').scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function copyBTCAddress() {
  const btcAddress = document.getElementById('btcAddress');
  const tooltip = document.getElementById('tooltip');
  
  const address = btcAddress.dataset.address;
  navigator.clipboard.writeText(address).then(() => {
    tooltip.textContent = "Copied!";
    btcAddress.classList.add('clicked');
    
    setTimeout(() => {
      tooltip.textContent = "Copy to clipboard";
      btcAddress.classList.remove('clicked');
    }, 1500);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}
