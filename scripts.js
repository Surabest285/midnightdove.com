// Get the buttons
const getStartedButton = document.querySelector('.hero-text button');
const exploreButtons = document.querySelectorAll('.card-text button');
const writeNowButtons = document.querySelectorAll('.prompt-card button');
const viewProfileButtons = document.querySelectorAll('.writer-card button');

// Add event listeners to buttons
getStartedButton.addEventListener('click', scrollToSection);
exploreButtons.forEach(button => button.addEventListener('click', scrollToSection));
writeNowButtons.forEach(button => button.addEventListener('click', handleWriteNow));
viewProfileButtons.forEach(button => button.addEventListener('click', handleViewProfile));

// Function to scroll to the corresponding section
function scrollToSection(event) {
  event.preventDefault();
  const target = event.target.getAttribute('data-target');
  const section = document.querySelector(target);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Function to handle the "Write Now" button
function handleWriteNow(event) {
  const promptTitle = event.target.parentNode.querySelector('h3').textContent;
  alert(`Start writing for the prompt: ${promptTitle}`);
}

// Function to handle the "View Profile" button
function handleViewProfile(event) {
  const writerName = event.target.parentNode.querySelector('h3').textContent;
  alert(`Viewing profile of ${writerName}`);
}
