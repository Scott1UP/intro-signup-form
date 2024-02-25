// Select all of the input fields from the form
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

// Define a reusable function to handle input validation
const validateInput = (inputElement, regex, errorMessageElement) => {
    const value = inputElement.value.trim();
    const errorMsg = errorMessageElement;

    if (!regex.test(value)) {
        errorMsg.classList.remove("disabled");
        inputElement.classList.add("error");
    } else {
        errorMsg.classList.add("disabled"); 
        inputElement.classList.remove("error");
    }
}

// Define an array of objects representing input fields and their validation details
const inputFields = [
    { element: firstName, regex: /^(\w+\S+)$/i, errorElement: firstName.parentElement.querySelector(".error-text") },
    { element: lastName, regex: /^(\w+\S+)$/i, errorElement: lastName.parentElement.querySelector(".error-text") },
    { element: email, regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, errorElement: email.parentElement.querySelector(".error-text") },
    { element: password, regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, errorElement: password.parentElement.querySelector(".error-text") }
];

// Attach event listeners dynamically for each input field
inputFields.forEach(input => {
    input.element.addEventListener("blur", event => {
        validateInput(input.element, input.regex, input.errorElement);
    });
});
