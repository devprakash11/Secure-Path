// Selecting required elements
const suggestionBtn = document.getElementById("suggestionBtn");
const formTitle = document.getElementById("formTitle");
const messageLabel = document.getElementById("messageLabel");
const messageField = document.getElementById("message");

// Change form placeholder based on type
suggestionBtn?.addEventListener("click", function () {
  formTitle.textContent = "Suggestion";
  messageLabel.textContent = "Write your suggestion";
  messageField.placeholder = "Write your suggestion here...";
});

// Google Apps Script URL
const scriptURL = "https://script.google.com/macros/s/AKfycbwfXWyQORqfLjsLANKb7tJstoraDa5cxSvuw46QNlwqHAYxDVsGW8ylomiD-B4ETS83fQ/exec";

// Handle form submission
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default HTML form submission

  const formData = new FormData(form);

  // Optional: Add a loading indicator or disable the submit button
  const submitBtn = form.querySelector(".submit-btn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        alert("Thank you! Your suggestion has been submitted.");
        form.reset();
      } else {
        alert("Submission failed. Please try again.");
      }
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit";
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alert("An error occurred. Please try again.");
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit";
    });
});
