document.addEventListener("DOMContentLoaded", function() {
    // Front Page (signUpFrontPage.html)
    const signUpForm = document.getElementById("signUpForm");
    const nextBtnFrontPage = document.getElementById("nextBtn");
    const userTypeSwitch = document.getElementById("toggle-switch");

    let isClient = false;

    // Update visibility when toggling between client/provider
    userTypeSwitch.addEventListener("change", function() {
        isClient = userTypeSwitch.checked;
    });

    // Handle Next button click on Front Page (signUpFrontPage.html)
    nextBtnFrontPage.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Store the user type (client/provider) in sessionStorage
        sessionStorage.setItem("userType", isClient ? "client" : "provider");

        // Navigate to signUpSecondPage.html
        window.location.href = "signUpSecondPage.html";
    });

    // Second Page (signUpSecondPage.html)
    const nextBtnSecondPage = document.querySelector(".next-btn");
    const prevBtnPart3 = document.querySelector(".prev-part3");
    const part2 = document.querySelector(".sign-up-part-2");
    const part3 = document.querySelector(".sign-up-part-3");

    // Check if the user is a client or provider, using sessionStorage
    const userType = sessionStorage.getItem("userType");

    // Display sign-up-part-2, and hide sign-up-part-3 if the user is a client
    if (userType === "client") {
        part3.style.display = "none"; // Hide sign-up-part-3
        nextBtnSecondPage.textContent = "Sign Up"; // Change button text to Sign Up
    }

    // Handle Next button click on Second Page (signUpSecondPage.html)
    nextBtnSecondPage.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        if (userType === "client") {
            alert("Client signed up!");
            window.location.href = "thankYouPage.html"; // Redirect to a Thank You page or appropriate page after sign-up
        } else {
            // If user is a provider, show part 3 and hide part 2
            part2.style.display = "none";
            part3.style.display = "block"; // Show sign-up-part-3 for providers
        }
    });

    // Previous button behavior for part-3
    prevBtnPart3.addEventListener("click", () => {
        part3.style.display = "none";
        part2.style.display = "block";
    });
});
