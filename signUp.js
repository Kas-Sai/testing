document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userType = urlParams.get("userType");

  const nextButtonPart2 = document.querySelector(".next-btn.next");
  const signUpButton = document.querySelector(".register-btn");

  if (userType === "provider") {
    // Show 'Next' button for Provider
    nextButtonPart2.style.display = "block";
    signUpButton.style.display = "none";

    nextButtonPart2.addEventListener("click", (event) => {
      event.preventDefault();
      if (isFormPart2Valid()) {
        window.location.href = "signUpThirdPage.html"; // Redirect to the third page
      } else {
        alert("Please complete all required fields in Part 2.");
      }
    });
  } else if (userType === "client") {
    // Show 'Sign Up' button for Client
    nextButtonPart2.style.display = "none";
    signUpButton.style.display = "block";

    signUpButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (isFormPart2Valid()) {
        alert("Client signed up successfully!");
        // Redirect to a success page or login
        window.location.href = "success.html";
      } else {
        alert("Please complete all required fields in Part 2.");
      }
    });
  }
});

// Function to validate Part 2 form
function isFormPart2Valid() {
  const inputs = document.querySelectorAll(".sign-up-part-2 input");
  const textarea = document.querySelector(".sign-up-part-2 textarea");
  return (
    Array.from(inputs).every((input) => input.value.trim() !== "") &&
    textarea.value.trim() !== ""
  );
}
