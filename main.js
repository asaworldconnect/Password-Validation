const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

const requirements = [
  { regex: /.{8,}/, index: 0 }, //Minmum of * characters
  { regex: /[0-9]/, index: 1 }, //At least one number
  { regex: /[a-z]/, index: 2 }, //At least one lowercase
  { regex: /[!-&]/, index: 3 }, //At least one special symbol
  { regex: /[A-Z]/, index: 4 }, //At least one uppercase letter
];
passwordInput.addEventListener("keyup", (e) => {
  // Check if the password matches the requirement regex
  requirements.forEach((item) => {
    const isValid = item.regex.test(e.target.value);
    const requirementItem = requirementList[item.index];

    //   updating icon of requirement item if requirement matched o not
    if (isValid) {
      requirementItem.firstElementChild.className = "fa-solid fa-check";
      requirementItem.classList.add("valid");
    } else {
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
      requirementItem.classList.remove("valid");
    }
  });
});

eyeIcon.addEventListener("click", () => {
  //Toggle the password input type between "password" and "text"
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }

  // Update the eye icon class based on the password input type
  eyeIcon.classList = `fa-solid fa-eye${
    passwordInput.type === "password" ? "" : "-slash"
  }`;
});
