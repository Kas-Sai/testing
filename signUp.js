document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggle-switch");
  const nextButtonPart1 = document.querySelector(".sign-up-part-1 .next");
  const nextButtonPart2 = document.querySelector(".sign-up-part-2 .next-btn");
  const signUpButton = document.querySelector(".sign-up-part-2 .register-btn");
  const chosenTagsList = document.getElementById("chosen-tags-list");

  // Event listener for Part 1 'Next' button
  nextButtonPart1.addEventListener("click", (event) => {
    event.preventDefault();
    const isProvider = toggleSwitch.checked;

    if (isFormPart1Valid()) {
      if (isProvider) {
        showPart2Provider();
      } else {
        showPart2Client();
      }
    } else {
      alert("Please complete all required fields in Part 1.");
    }
  });

  // Event listener for Provider's Part 2 'Next' button
  nextButtonPart2.addEventListener("click", (event) => {
    event.preventDefault();
    if (isFormPart2Valid()) {
      showPart3();
    } else {
      alert("Please complete all required fields in Part 2.");
    }
  });

  // Event listener for Client's Part 2 'Sign Up' button
  signUpButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (isFormPart2Valid()) {
      alert("Client signed up successfully!");
    } else {
      alert("Please complete all required fields in Part 2.");
    }
  });

  // Function to validate Part 1 form
  function isFormPart1Valid() {
    const inputs = document.querySelectorAll(".sign-up-part-1 input[required]");
    return Array.from(inputs).every((input) => input.value.trim() !== "");
  }

  // Function to validate Part 2 form
  function isFormPart2Valid() {
    const inputs = document.querySelectorAll(".sign-up-part-2 input");
    const textarea = document.querySelector(".sign-up-part-2 textarea");
    return (
      Array.from(inputs).every((input) => input.value.trim() !== "") &&
      textarea.value.trim() !== ""
    );
  }

  // Function to validate tags for Provider's Part 3
  function isTagsValid() {
    return chosenTagsList.children.length > 0;
  }

  // Function to show Provider's Part 2
  function showPart2Provider() {
    document.querySelector(".sign-up-part-1").style.display = "none";
    document.querySelector(".sign-up-part-2").style.display = "block";
    nextButtonPart2.style.display = "block";
    signUpButton.style.display = "none";
  }

  // Function to show Client's Part 2
  function showPart2Client() {
    document.querySelector(".sign-up-part-1").style.display = "none";
    document.querySelector(".sign-up-part-2").style.display = "block";
    nextButtonPart2.style.display = "none";
    signUpButton.style.display = "block";
  }

  // Function to show Part 3 for Provider
  function showPart3() {
    if (isTagsValid()) {
      document.querySelector(".sign-up-part-2").style.display = "none";
      document.querySelector(".sign-up-part-3").style.display = "block";
    } else {
      alert("Please select at least one tag.");
    }
  }
});

// Function to add tags for Provider
function addSkill() {
  const skillInput = document.getElementById("skill");
  const skill = skillInput.value.trim();
  if (skill) {
    const tag = document.createElement("div");
    tag.className = "tag-item";
    tag.textContent = skill;
    document.getElementById("chosen-tags-list").appendChild(tag);
    skillInput.value = "";
  }
}

// Function to select available tags for Provider
function selectTag(tagName) {
  const chosenTagsList = document.getElementById("chosen-tags-list");
  const tag = document.createElement("div");
  tag.className = "tag-item";
  tag.textContent = tagName;
  chosenTagsList.appendChild(tag);
}

// Event listener for Part 1 'Next' button
nextButtonPart1.addEventListener("click", (event) => {
  event.preventDefault();
  const isProvider = toggleSwitch.checked;

  if (isFormPart1Valid()) {
    if (isProvider) {
      // Redirect to the second page for Provider
      window.location.href = "signUpSecondPage.html?userType=provider";
    } else {
      // Redirect to the second page for Client
      window.location.href = "signUpSecondPage.html?userType=client";
    }
  } else {
    alert("Please complete all required fields in Part 1.");
  }
});
