// signUp.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("toggle-switch");
    const nextButton = document.querySelector(".next");
    const prevIcons = document.querySelectorAll(".prev");

    // Determine the user type
    let userType = "client"; // Default to client
    toggleSwitch.addEventListener("change", () => {
        userType = toggleSwitch.checked ? "provider" : "client";
    });

    // Handle navigation from the first page
    if (nextButton) {
        nextButton.addEventListener("click", (e) => {
            e.preventDefault();
            if (userType === "client") {
                // Redirect to second page with client-specific functionality
                window.location.href = "signUpSecondPage.html?userType=client";
            } else {
                // Redirect to second page with provider-specific functionality
                window.location.href = "signUpSecondPage.html?userType=provider";
            }
        });
    }

    // Handle navigation on the second page
    const urlParams = new URLSearchParams(window.location.search);
    const currentPageUserType = urlParams.get("userType");
    const secondPageNextButton = document.querySelector(".next-btn");

    if (secondPageNextButton && currentPageUserType === "client") {
        secondPageNextButton.textContent = "Sign Up";
        secondPageNextButton.addEventListener("click", (e) => {
            e.preventDefault();
            // Sign up process for client
            alert("Client Sign Up Complete!");
        });
    } else if (secondPageNextButton && currentPageUserType === "provider") {
        secondPageNextButton.addEventListener("click", (e) => {
            e.preventDefault();
            // Redirect to third page for provider
            window.location.href = "signUpThirdPage.html";
        });
    }

    // Handle navigation on the third page
    const thirdPagePrevIcon = document.querySelector(".prev-part3");
    if (thirdPagePrevIcon) {
        thirdPagePrevIcon.addEventListener("click", () => {
            window.location.href = "signUpSecondPage.html?userType=provider";
        });
    }

    // Handle the previous icon on the second page
    prevIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            window.location.href = "signUpFirstPage.html";
        });
    });
});
