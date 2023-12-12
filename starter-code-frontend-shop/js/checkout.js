
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

	// Reset error messages
	errorName.textContent = "";
	errorLastN.textContent = "";
	errorPassword.textContent = "";
	errorEmail.textContent = "";
	errorPhone.textContent = "";
	errorAddress.textContent = "";
	
	// Validation for First Name
	if (fName.value.trim() === "") {
		errorName.textContent = "This field is required and must have —at least— 3 characters";
	}

	// Validation for Last Name
	if (fLastN.value.trim() === "") {
		errorLastN.textContent = "This field is required and must have —at least— 3 characters";
	}

	// Validation for Password
	if (fPassword.value.length < 6 || fPassword.value.length > 10) {
		errorPassword.textContent = "Enter a password with 6 to 10 characters";
	}

	// Validation for Email
	if (fEmail.value.trim() === "" || !fEmail.value.includes("@") || fEmail.value.length < 3) {
		errorEmail.textContent = "This field is required and must contain an '@' and have —at least— 3 characters";
	}

	// Validation for Phone Number
	if (!/^\d{9}S/.test(fPhone.value)) {
		errorPhone.textContent = "Invalid phone number!!! Must be 9 digits with no letters";
	}

	// Validation for Address
	if (fAddress.value.trim() === "" || fAddress.value.length < 3 ) {
		errorAddress.textContent = "This field is required and must have —at least— 3 characters";
	}

	// Check if there are any errors
	var errors = document.querySelectorAll(".invalid-feedback");
	if (Array.from(errors).some((error) => error.textContent !== "")) {
		// There are errrors, prevent form submission
		return false;
	}

	// No errors, allow submission
	return true;
}
