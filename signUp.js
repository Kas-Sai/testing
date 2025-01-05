// signUp.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("toggle-switch");
    const nextButtons = document.querySelectorAll(".next");
    const prevIcons = document.querySelectorAll(".prev");

    let userType = "client"; // Default user type

    // Listen to the toggle switch to determine user type
    toggleSwitch.addEventListener("change", () => {
        userType = toggleSwitch.checked ? "provider" : "client";
    });

    // Add event listeners to "Next" buttons
    nextButtons.forEach((button, index) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            handleNextButtonClick(index);
        });
    });

    // Add event listeners to "Prev" icons
    prevIcons.forEach((icon, index) => {
        icon.addEventListener("click", (e) => {
            e.preventDefault();
            handlePrevButtonClick(index);
        });
    });

    function handleNextButtonClick(index) {
        if (index === 0) {
            // First page: Decide navigation based on user type
            if (userType === "client") {
                window.location.href = "signUpSecondPage.html";
            } else if (userType === "provider") {
                window.location.href = "signUpSecondPage.html";
            }
        } else if (index === 1 && userType === "provider") {
            // Provider on second page
            window.location.href = "signUpThirdPage.html";
        }
    }

    function handlePrevButtonClick(index) {
        if (index === 0) {
            // Second page to First page
            window.location.href = "signUpFirstPage.html";
        } else if (index === 1) {
            // Third page to Second page
            window.location.href = "signUpSecondPage.html";
        }
    }

    // Update button text dynamically on the second page
    if (window.location.pathname.includes("signUpSecondPage.html")) {
        const nextButton = document.querySelector(".next-btn");
        if (userType === "client") {
            nextButton.textContent = "Sign Up";
            nextButton.addEventListener("click", (e) => {
                e.preventDefault();
                alert("Client registration successful!"); // Add your logic here
            });
        }
    }
});

