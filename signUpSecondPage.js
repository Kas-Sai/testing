// signUpSecondPage.js
document.addEventListener("DOMContentLoaded", function() {
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-part3");
    const part2 = document.querySelector(".sign-up-part-2");
    const part3 = document.querySelector(".sign-up-part-3");
    
    // Check if the user is a client or provider, using sessionStorage
    const isClient = sessionStorage.getItem("userType") === "client"; // Example for client check

    // Show only sign-up-part-2 if client
    if (isClient) {
        part3.style.display = "none"; // Hide sign-up-part-3
        nextBtn.textContent = "Sign Up"; // Change button text to Sign Up
    }

    // Next button behavior
    nextBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (isClient) {
            alert("Client signed up!");
            window.location.href = "thankYouPage.html"; // Redirect to a Thank You page or appropriate page after sign-up
        } else {
            part2.style.display = "none";
            part3.style.display = "block"; // Show sign-up-part-3 for providers
        }
    });

    // Previous button behavior for part-3
    prevBtn.addEventListener("click", () => {
        part3.style.display = "none";
        part2.style.display = "block";
    });
});
