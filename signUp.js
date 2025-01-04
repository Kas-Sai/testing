document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById("signUpForm");
    const nextBtnFrontPage = document.getElementById("nextBtn");
    const signUpBtnFrontPage = document.getElementById("signUpBtn");  // "Sign Up" button in part-2 for client
    const userTypeSwitch = document.getElementById("toggle-switch");

    const part2 = document.querySelector(".sign-up-part-2");
    const part3 = document.querySelector(".sign-up-part-3");

    let isClient = false;

    // Update visibility when toggling between client/provider
    userTypeSwitch.addEventListener("change", function () {
        isClient = userTypeSwitch.checked;
        updateFormDisplay();
    });

    // Function to update the form display based on user type
    function updateFormDisplay() {
        if (isClient) {
            // Show part-2 only and replace Next button with Sign Up button
            part2.style.display = "block";
            part3.style.display = "none";
            nextBtnFrontPage.style.display = "none"; // Hide the Next button
            signUpBtnFrontPage.style.display = "block"; // Show the Sign Up button
        } else {
            // Show part-1 and part-2 for provider, and keep Next button
            part2.style.display = "none";
            part3.style.display = "none";
            nextBtnFrontPage.style.display = "block"; // Show the Next button
            signUpBtnFrontPage.style.display = "none"; // Hide the Sign Up button
        }
    }

    // Handle Next button click on Front Page (signUpFrontPage.html)
    nextBtnFrontPage.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        // Store the user type (client/provider) in sessionStorage
        sessionStorage.setItem("userType", isClient ? "client" : "provider");

        // Navigate to signUpSecondPage.html
        window.location.href = "signUpSecondPage.html";
    });

    // Handle Sign Up button for client
    signUpBtnFrontPage.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        alert("Client signed up!");
        window.location.href = "thankYouPage.html"; // Redirect to a Thank You page or appropriate page after sign-up
    });

    // Initialize the form display based on the current state
    updateFormDisplay();
});
