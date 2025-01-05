document.addEventListener("DOMContentLoaded", function () {
    const part2 = document.querySelector(".sign-up-part-2");
    const part3 = document.querySelector(".sign-up-part-3");
    const nextBtns = document.querySelectorAll(".next");
    const prevBtns = document.querySelectorAll(".prev");
    const userTypeSwitch = document.getElementById("toggle-switch");

    let isClient = false;

    // Function to update visibility based on user type
    function updateVisibility() {
        part2.style.display = "block";
        part3.style.display = "none";
        const clientNextBtn = part2.querySelector(".next-btn");
        if (clientNextBtn) {
            clientNextBtn.textContent = isClient ? "Sign Up" : "Next";
        }
    }

    // Initial visibility setup
    updateVisibility();

    // Event listener for user type toggle
    userTypeSwitch.addEventListener("change", () => {
        isClient = userTypeSwitch.checked;
        updateVisibility();
    });

    // Next button functionality
    nextBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (part2.style.display === "block") {
                if (isClient) {
                    // Handle "Sign Up" action for Client
                    alert("Client signed up!");
                    updateVisibility();
                } else {
                    part2.style.display = "none";
                    part3.style.display = "block";
                }
            }
        });
    });

    // Previous button functionality
    prevBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (part3.style.display === "block") {
                part3.style.display = "none";
                part2.style.display = "block";
            }
        });
    });
});

