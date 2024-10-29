// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// Redirect to Google login
function loginWithGoogle() {
    window.location.href = "https://accounts.google.com/signin";
}

// Redirect to Facebook login
function loginWithFacebook() {
    window.location.href = "https://www.facebook.com/login";
}

// Handle the login form submission
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Sample credentials for demonstration (replace these with actual credentials or validation)
    const correctEmail = "user@example.com";
    const correctPassword = "password123";

    // Retrieve input values
    const email = document.getElementById("email").value.trim();  // Using trim() to remove any extra spaces
    const password = document.getElementById("password").value.trim();

    const errorMessage = document.getElementById("error-message");

    // Check if the credentials match
    if (email === correctEmail && password === correctPassword) {
        // Redirect to the index page if credentials are correct
        window.location.href = "index.html";
    } else {
        // Display error message if credentials are incorrect
        errorMessage.textContent = "Incorrect email or password.";
    }
});
