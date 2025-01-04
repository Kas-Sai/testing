document.addEventListener("DOMContentLoaded", function () {
    const part2 = document.querySelector(".sign-up-part-2");
    const part3 = document.querySelector(".sign-up-part-3");
    const nextBtn = part2.querySelector(".next-btn"); // "Next" button in part-2
    const signUpBtn = part2.querySelector(".sign-up-btn"); // "Sign Up" button
    const userTypeSwitch = document.getElementById("toggle-switch"); // Toggle for client/provider
    let isClient = false; // Default to provider

    // Update visibility based on the user type (client or provider)
    function updateVisibility() {
        if (isClient) {
            part3.style.display = "none"; // Hide part-3 for clients
            nextBtn.style.display = "none"; // Hide "Next" button
            signUpBtn.style.display = "block"; // Show "Sign Up" button
        } else {
            part3.style.display = "none"; // Ensure part-3 is hidden initially
            nextBtn.style.display = "block"; // Show "Next" button
            signUpBtn.style.display = "none"; // Hide "Sign Up" button
        }
    }

    // Set up user type (client or provider)
    userTypeSwitch.addEventListener("change", function () {
        isClient = userTypeSwitch.checked; // If checked, it's client, else it's provider
        updateVisibility();
    });

    // Handle Sign Up for client (direct sign up action)
    signUpBtn.addEventListener("click", function () {
        alert("Client signed up!");
        // Redirect to the appropriate page (e.g., a Thank You or Dashboard page)
        window.location.href = "thankYouPage.html";
    });

    // Handle Next button click for providers (leading to part-3)
    nextBtn.addEventListener("click", function () {
        part2.style.display = "none"; // Hide part-2
        part3.style.display = "block"; // Show part-3
    });

    // Initial setup
    updateVisibility();
});
