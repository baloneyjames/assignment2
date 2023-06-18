// script.js

// Function to change the color of the header on scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Function to display a random keyboard image in the hero section
function displayRandomKeyboard() {
  const keyboardImages = [
    "keyboard1.jpg",
    "keyboard2.jpg",
    "keyboard3.jpg",
    "keyboard4.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * keyboardImages.length);
  const heroSection = document.querySelector(".hero");
  heroSection.style.backgroundImage = `url('images/${keyboardImages[randomIndex]}')`;
}

// Call the function to display a random keyboard image initially
displayRandomKeyboard();

// Function to toggle the active class on the navigation links
function toggleActiveClass() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

// Call the function to toggle the active class initially
toggleActiveClass();

// Function to handle form submission and display a thank you message
function handleFormSubmission(event) {
  event.preventDefault();
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Validate form inputs
  if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Display thank you message and clear form inputs
  form.innerHTML = "<h2>Thank you for your message!</h2>";
}

// Add event listener to form submission
const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmission);

// Function to generate a random RGB color
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Function to change the background color of sections
function colorizeSections() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.backgroundColor = getRandomColor();
  });
}

// Call the function to colorize the sections initially
colorizeSections();
