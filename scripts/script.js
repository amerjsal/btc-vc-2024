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
