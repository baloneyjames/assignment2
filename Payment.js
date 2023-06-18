// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the Pay Now button element
  var payNowBtn = document.getElementById('payNowBtn');

  // Add an event listener to the Pay Now button
  payNowBtn.addEventListener('click', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Display a confirmation message
    alert('Thank you for your payment confirmation!');
  });
});
