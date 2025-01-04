document.addEventListener("DOMContentLoaded", function () {
    // Front Page (signUpFrontPage.html)
    const signUpForm = document.getElementById("signUpForm");
    const nextBtnFrontPage = document.getElementById("nextBtn");
    const userTypeSwitch = document.getElementById("toggle-switch");

    let isClient = false;

    // Update visibility when toggling between client/provider
    userTypeSwitch.addEventListener("change", function () {
        isClient = userTypeSwitch.checked;
    });

    // Handle Next button click on Front Page (signUpFrontPage.html)
    nextBtnFrontPage.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        // Store the user type (client/provider) in sessionStorage
        sessionStorage.setItem("userType", isClient ? "client" : "provider");

        // Navigate to signUpSecondPage.html
        window.location.href = "signUpSecondPage.html";
    });

    // Second Page (signUpSecondPage.html)
    const part2 = document.querySelector(".sign-up-part-2");
    const part3 = document.querySelector(".sign-up-part-3");
    const nextBtnSecondPage = part2.querySelector(".next-btn"); // "Next" button in part-2
    const prevPart3Btn = part3.querySelector(".prev-part3"); // "Previous" button in part-3

    // Check if the user is a client or provider, using sessionStorage
    const userType = sessionStorage.getItem("userType");

    // Initial visibility setup
    part2.style.display = "block"; // Show part-2 initially
    part3.style.display = "none"; // Hide part-3 initially

    if (userType === "client") {
        // For client, hide part-3 and change button to "Sign Up"
        part3.style.display = "none";
        nextBtnSecondPage.textContent = "Sign Up"; // Change button text to "Sign Up"
    }

    // Next button functionality for part-2
    nextBtnSecondPage.addEventListener("click", () => {
        if (userType === "client") {
            // For client, show sign up confirmation
            alert("Client signed up!");
            window.location.href = "thankYouPage.html"; // Redirect to a Thank You page or appropriate page after sign-up
        } else {
            // If user is a provider, show part-3 and hide part-2
            part2.style.display = "none"; // Hide part-2
            part3.style.display = "block"; // Show part-3
        }
    });

    // Previous button functionality for part-3
    prevPart3Btn.addEventListener("click", () => {
        part3.style.display = "none"; // Hide part-3
        part2.style.display = "block"; // Show part-2
    });
});
