document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribeForm");
  const emailInput = document.getElementById("subscriberEmail");
  const emailError = document.getElementById("emailError");
  const successMessage = document.getElementById("SubscribeSuccess");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    emailError.textContent = "";
    successMessage.style.display = "none";

    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
    } else {
      successMessage.style.display = "block";
      form.reset();

      // Optionally hide the success message after 3 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
    }
  });
});
