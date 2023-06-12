// Get the button elements
const getStartedButton = document.querySelector('.hero-text button');
const exploreButtons = document.querySelectorAll('.card-text button');
const writeNowButtons = document.querySelectorAll('.prompt-card button');
const viewProfileButtons = document.querySelectorAll('.writer-card button');

// Add event listeners
getStartedButton.addEventListener('click', scrollToSection);
exploreButtons.forEach(button => button.addEventListener('click', scrollToSection));
writeNowButtons.forEach(button => button.addEventListener('click', scrollToSection));
viewProfileButtons.forEach(button => button.addEventListener('click', scrollToSection));

// Function to scroll to the corresponding section
function scrollToSection(event) {
  event.preventDefault();
  const target = event.target.getAttribute('data-target');
  const section = document.querySelector(target);
  section.scrollIntoView({ behavior: 'smooth' });
}
