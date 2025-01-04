document.addEventListener("DOMContentLoaded", function () {
    const part1 = document.querySelector(".sign-up-part-1");
    const part2 = document.querySelector(".sign-up-part-2");
    const part3 = document.querySelector(".sign-up-part-3");
    const nextBtnPart1 = part1.querySelector(".next"); // "Next" button in part-1
    const nextBtnPart2 = part2.querySelector(".next-btn"); // "Next" button in part-2
    const prevPart3Btn = part3.querySelector(".prev-part3"); // "Previous" icon in part-3

    // Initial visibility setup
    part1.style.display = "block"; // Show part-1 initially
    part2.style.display = "none"; // Hide part-2 initially
    part3.style.display = "none"; // Hide part-3 initially

    // Next button functionality in part-1
    nextBtnPart1.addEventListener("click", () => {
        part1.style.display = "none"; // Hide part-1
        part2.style.display = "block"; // Show part-2
    });

    // Next button functionality in part-2
    nextBtnPart2.addEventListener("click", () => {
        part2.style.display = "none"; // Hide part-2
        part3.style.display = "block"; // Show part-3
    });

    // Previous button functionality for part-3
    prevPart3Btn.addEventListener("click", () => {
        part3.style.display = "none"; // Hide part-3
        part2.style.display = "block"; // Show part-2
    });
});
