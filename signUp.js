document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("toggle-switch");
    const firstPageNextButton = document.querySelector(".sign-up-part-1 .next");
    const secondPageNextButton = document.querySelector(".sign-up-part-2 .next-btn");
    const providerTags = document.querySelectorAll(".sign-up-part-3 .tag-item");
    const providerSignUpButton = document.querySelector(".sign-up-part-3 .register-btn");
    const clientSignUpButton = document.querySelector(".sign-up-part-2 .next-btn");

    let userType = "client"; // Default to client
    let selectedTags = new Set(); // Keep track of selected tags for providers

    // Listen for user type switch
    toggleSwitch.addEventListener("change", () => {
        userType = toggleSwitch.checked ? "provider" : "client";
    });

    // Validate the first part form and navigate to the second part
    firstPageNextButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (validateForm(".sign-up-part-1")) {
            if (userType === "client") {
                window.location.href = "signUpSecondPage.html?userType=client";
            } else if (userType === "provider") {
                window.location.href = "signUpSecondPage.html?userType=provider";
            }
        } else {
            alert("Please fill out all required fields.");
        }
    });

    // Second part behavior for clients and providers
    const urlParams = new URLSearchParams(window.location.search);
    const currentUserType = urlParams.get("userType");
    if (currentUserType === "client" && clientSignUpButton) {
        clientSignUpButton.textContent = "Sign Up";
        clientSignUpButton.addEventListener("click", (e) => {
            e.preventDefault();
            if (validateForm(".sign-up-part-2")) {
                alert("Client successfully signed up!");
                // Redirect or perform the signup process
            } else {
                alert("Please fill out all required fields.");
            }
        });
    } else if (currentUserType === "provider" && secondPageNextButton) {
        secondPageNextButton.addEventListener("click", (e) => {
            e.preventDefault();
            if (validateForm(".sign-up-part-2")) {
                window.location.href = "signUpThirdPage.html";
            } else {
                alert("Please fill out all required fields.");
            }
        });
    }

    // Third part behavior for providers (tag selection)
    if (providerTags.length > 0) {
        providerTags.forEach((tag) => {
            tag.addEventListener("click", () => {
                const tagName = tag.textContent;
                if (selectedTags.has(tagName)) {
                    selectedTags.delete(tagName);
                    tag.classList.remove("selected"); // Indicate deselection
                } else {
                    selectedTags.add(tagName);
                    tag.classList.add("selected"); // Indicate selection
                }
            });
        });
    }

    if (providerSignUpButton) {
        providerSignUpButton.addEventListener("click", (e) => {
            e.preventDefault();
            if (selectedTags.size > 0) {
                alert("Provider successfully signed up!");
                // Redirect or perform the signup process
            } else {
                alert("Please select at least one tag to sign up.");
            }
        });
    }

    // Form validation function
    function validateForm(sectionSelector) {
        const inputs = document.querySelectorAll(`${sectionSelector} input, ${sectionSelector} textarea`);
        return Array.from(inputs).every((input) => input.value.trim() !== "");
    }
});
