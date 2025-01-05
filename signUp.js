document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("toggle-switch");
    const nextButton = document.querySelector(".next-btn"); // Button in signUpSecondPage.html
    const prevIcon = document.querySelector(".prev"); // Icon for navigating back
    const userTypeKey = "userType"; // Key for storing user type in sessionStorage

    // Listen to the toggle switch to determine user type
    if (toggleSwitch) {
        toggleSwitch.addEventListener("change", () => {
            const userType = toggleSwitch.checked ? "provider" : "client";
            sessionStorage.setItem(userTypeKey, userType);
        });
    }

    // Navigation logic for the "Next" button on the second page
    if (nextButton) {
        const userType = sessionStorage.getItem(userTypeKey);

        if (userType === "client") {
            nextButton.textContent = "Sign Up"; // Change button text to "Sign Up"
            nextButton.addEventListener("click", (e) => {
                e.preventDefault();
                alert("Client registration successful!"); // Add client registration logic here
                // Optionally redirect after registration
                // window.location.href = "successPage.html";
            });
        } else if (userType === "provider") {
            nextButton.textContent = "Next"; // Ensure it says "Next" for providers
            nextButton.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.href = "signUpThirdPage.html"; // Navigate to third page
            });
        }
    }

    // Logic for "Prev" button (on second and third pages)
    if (prevIcon) {
        const currentPage = window.location.pathname;
        prevIcon.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentPage.includes("signUpSecondPage.html")) {
                window.location.href = "signUpFirstPage.html";
            } else if (currentPage.includes("signUpThirdPage.html")) {
                window.location.href = "signUpSecondPage.html";
            }
        });
    }

    // Ensure the user type is stored correctly on the first page
    if (window.location.pathname.includes("signUpFirstPage.html")) {
        const userType = toggleSwitch && toggleSwitch.checked ? "provider" : "client";
        sessionStorage.setItem(userTypeKey, userType);
    }
});
