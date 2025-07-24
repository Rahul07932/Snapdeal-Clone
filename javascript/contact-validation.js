document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Get error spans
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.style.display = "none";

    let valid = true;

    // Name validation
    if (name.value.trim() === "") {
      nameError.textContent = "Name is required.";
      valid = false;
    }

    // Email validation using RegEx
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Enter a valid email address.";
      valid = false;
    }

    // Message validation
    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    // If all valid, show success message
    if (valid) {
      successMessage.style.display = "block";

      // Optionally reset the form after 3 seconds
      setTimeout(() => {
        form.reset();
        successMessage.style.display = "none";
      }, 3000);
    }
  });
});
