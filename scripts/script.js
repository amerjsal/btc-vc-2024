// Create the hamburger icon dynamically
const navbar = document.querySelector('header');
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '<span></span><span></span><span></span>'; // Adding three lines for hamburger

navbar.appendChild(hamburger);

// Get the navbar menu
const navbarMenu = document.querySelector('.navbarMenu');

// Toggle the active class to show/hide the menu
hamburger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Get references to the elements
const scrollContainer = document.querySelector('.testimonialScrollContainer');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');

// Function to scroll left
leftButton.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -300, // Adjust the number here to scroll by more or less
    behavior: 'smooth' // Smooth scroll
  });
});

// Function to scroll right
rightButton.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 300, // Adjust the number here to scroll by more or less
    behavior: 'smooth' // Smooth scroll
  });
});
