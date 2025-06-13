document.getElementById("verificationForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("full-name").value.trim();
  const certificateId = document.getElementById("certificate-id").value.trim();
  const membershipId = document.getElementById("member-id").value.trim();

  const loader = document.getElementById("loader");
  const resultDiv = document.getElementById("verificationResult");
  resultDiv.innerHTML = ""; // Clear existing content
  resultDiv.style.display = "none";
  loader.style.display = "block";

  try {
    // Simulate a delay to replicate real-time loading
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Fetch the JSON file
    const response = await fetch("./scripts/certificate.json");
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    // Check if the input matches any entry in the JSON file
    const isVerified = data.some(
      (entry) =>
        entry.name === name &&
        entry.certificateId === certificateId &&
        entry.membershipId === membershipId
    );

    // Create and append elements
    const resultImage = document.createElement("img");
    const resultMessage = document.createElement("p");

    if (isVerified) {
      resultImage.src = "./assets/images/check.png";
      resultMessage.textContent = "Verified";
      resultMessage.style.color = "green";
    } else {
      resultImage.src = "./assets/images/cross.png";
      resultMessage.textContent = "Not Verified";
      resultMessage.style.color = "red";
    }

    resultDiv.appendChild(resultImage);
    resultDiv.appendChild(resultMessage);
    resultDiv.style.display = "flex";

    loader.style.display = "none";
  } catch (error) {
    loader.style.display = "none";
    resultDiv.innerHTML = "<p style='color: red;'>An error occurred while verifying the data. Please try again.</p>";
    resultDiv.style.display = "block";
  }
});
// Add click event listener to hide the result on click
document.getElementById("verificationResult").addEventListener("click", function () {
  this.style.display = "none";
});
