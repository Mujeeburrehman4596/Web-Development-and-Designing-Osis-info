// Store user credentials in an object (You can store this in localStorage or a backend)
let users = {};

// DOM Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const securedPage = document.getElementById('securedPage');
const errorMessage = document.getElementById('error-message');

// Handle user registration
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    // Check if the user already exists
    if (users[username]) {
        alert('Username already taken! Please choose another one.');
    } else {
        // Register user
        users[username] = password;
        alert('Registration successful!');
        registerForm.reset();
    }
});

// Handle user login
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials
    if (users[username] && users[username] === password) {
        // Clear any previous error message
        errorMessage.textContent = '';

        // Hide login forms and show secured page
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        securedPage.style.display = 'block';
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});

// Handle logout
document.getElementById('logoutButton').addEventListener('click', function () {
    // Show login forms and hide secured page
    loginForm.style.display = 'block';
    registerForm.style.display = 'block';
    securedPage.style.display = 'none';
});
