
const contactForm = document.getElementById('contact-form');
const submitButton = document.querySelector('.submit-button');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Perform form submission actions here

  // Disable submit button to prevent multiple submissions
  submitButton.disabled = true;
  submitButton.textContent = 'Submitting...';

  setTimeout(() => {
    // Clear form inputs
    contactForm.reset();

    // Re-enable submit button
    submitButton.disabled = false;
    submitButton.textContent = 'Submit';
  }, 2000);
});
