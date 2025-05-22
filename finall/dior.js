// // scripts.js

// // JavaScript to handle buy button actions (example)
// document.querySelectorAll('.buy-btn').forEach(button => {
//     button.addEventListener('click', function() {
//       alert('Added to Cart!');
//     });
//   });
  
//   document.querySelector('header').addEventListener('mouseenter', function() {
//     this.style.backgroundColor = '#333';
//   });
  
//   document.querySelector('header').addEventListener('mouseleave', function() {
//     this.style.backgroundColor = '#1a1a1a';
//   });
  
//   const images = document.querySelectorAll('.card img');

// images.forEach(image => {
//   image.addEventListener('mouseenter', function() {
//     this.style.transform = 'scale(1.1)';
//     this.style.transition = 'transform 0.3s ease';
//   });

//   image.addEventListener('mouseleave', function() {
//     this.style.transform = 'scale(1)';
//   });
// });

// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
  
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });
  
//   const productCards = document.querySelectorAll('.card');

// productCards.forEach(card => {
//   card.addEventListener('click', function() {
//     productCards.forEach(c => c.classList.remove('highlight'));
//     this.classList.add('highlight');
//   });
// });

// const hamburger = document.getElementById('hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });
