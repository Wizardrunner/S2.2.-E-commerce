// Exercise 6
function validate() {
    var error = 0;
    // Get the input fields
    var fName = document.getElementById("fName");
    var fLastN = document.getElementById("fLastN");
    var fPassword = document.getElementById("fPassword");
    var fEmail = document.getElementById("fEmail");
    var fPhone = document.getElementById("fPhone");
    var fAddress = document.getElementById("fAddress");

    // Get the error elements
    var errorName = document.getElementById("errorName");
    var errorLastN = document.getElementById("errorLastN");
    var errorPassword = document.getElementById("errorPassword");
    var errorEmail = document.getElementById("errorEmail");  
    var errorPhone = document.getElementById("errorPhone");
    var errorAddress = document.getElementById("errorAddress");
    
    // Reset error messages and hide them initially
    resetErrorMessage(errorName);
    resetErrorMessage(errorLastN);
    resetErrorMessage(errorPassword);
    resetErrorMessage(errorEmail);
    resetErrorMessage(errorPhone);
    resetErrorMessage(errorAddress);
    
    // Validation for First Name
    if (fName.value.trim() === "" || fName.value.length < 3 ) {
        displayErrorMessage(errorName, "This field is required and must have, at least, 3 characters");
    }

    // Validation for Last Name
    if (fLastN.value.trim() === "" || fLastN.value.length < 3 )  {
        displayErrorMessage(errorLastN, "This field is required and must have, at least, 3 characters");
    }

    // Validation for Password
    if (fPassword.value.length < 4 || fPassword.value.length > 8) {
        displayErrorMessage(errorPassword, "Enter a password with 4 to 8 characters");
    }

    // Validation for Email
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(fEmail.value.trim())) {
    // if (fEmail.value.trim() === "" || !fEmail.value.includes("@") || fEmail.value.length < 3) {
        displayErrorMessage(errorEmail, "This field required a valid email format");
    }

    // Validation for Phone Number
    if (!/^\d{9}$/.test(fPhone.value)) {
        displayErrorMessage(errorPhone, "Invalid phone number!!! Must be 9 digits with no letters");
    }

    // Validation for Address
    if (fAddress.value.trim() === "" || fAddress.value.length < 3 ) {
        displayErrorMessage(errorAddress, "This field is required and must have, at least, 3 characters");
    }

    // Check if there are any errors
    var errors = document.querySelectorAll(".invalid-feedback");
    if (Array.from(errors).some((error) => error.textContent !== "")) {
        // There are errors, prevent form submission
        return false;
    }

    // No errors, allow submission
    return true;
}

// Helper function to display an error message
function displayErrorMessage(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

// Helper function to reset and hide an error message
function resetErrorMessage(errorElement) {
    errorElement.textContent = "";
    errorElement.style.display = "none";
}
