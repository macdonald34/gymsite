function joinNow() {
  alert("Thanks for your interest! We'll contact you soon.");
}

function submitForm(event) {
  event.preventDefault(); // Prevent page reload
  alert("Message sent successfully!");
  event.target.reset(); // Clear form
}
