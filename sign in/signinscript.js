// Get elements
const openSigninBtn = document.getElementById('openSigninBtn');
const signinPopup = document.getElementById('signinPopup');
const closeBtn = document.querySelector('.close-btn');

// Show the pop-up
openSigninBtn.addEventListener('click', () => {
  signinPopup.style.display = 'flex';
});
// Assuming you have jQuery included
$(document).ready(function() {
  $("#sign-in-button").click(function() {
    // Add your sign-in logic here, including verification check
    // If verification is successful, hide the popup and show the message:
    $("#verification-popup").hide();
    $("#verification-message").show();
  });

  $("#resend-verification-button").click(function() {
    // Add your logic to resend the verification email here
  });
});

// Close the pop-up
closeBtn.addEventListener('click', () => {
  signinPopup.style.display = 'none';
});