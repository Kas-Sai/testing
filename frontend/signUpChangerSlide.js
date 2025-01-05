document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.getElementById("signUpForm");
    const toggleSwitch = document.getElementById("toggle-switch");

    let userType = "client"; // Default user type

    // Listen to the toggle switch to determine user type
    toggleSwitch.addEventListener("change", () => {
        userType = toggleSwitch.checked ? "provider" : "client";
    });

    // Handle form submission
    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        if (userType === "client") {
            window.location.href = "signUpSecondPage.html";
        } else if (userType === "provider") {
            window.location.href = "signUpSecondPage.html";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const part2 = document.querySelector(".sign-up-part-2");
    const part3 = document.querySelector(".sign-up-part-3");
    const nextBtn = part2.querySelector(".next-btn"); // "Next" button in part-2
    const prevPart3Btn = part3.querySelector(".prev-part3"); // "Previous" icon in part-3

    // Initial visibility setup
    part2.style.display = "block"; // Show part-2 initially
    part3.style.display = "none"; // Hide part-3 initially

    // Next button functionality
    nextBtn.addEventListener("click", () => {
        part2.style.display = "none"; // Hide part-2
        part3.style.display = "block"; // Show part-3
    });

    // Previous button functionality for part-3
    prevPart3Btn.addEventListener("click", () => {
        part3.style.display = "none"; // Hide part-3
        part2.style.display = "block"; // Show part-2
    });
});
