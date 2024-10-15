document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "admin@example.com" && password === "admin123") {
        showAdminDashboard();
    } else {
        showCustomerDashboard();
    }
});

function showLogin(userType) {
    document.getElementById('login-section').classList.remove('d-none');
    document.getElementById('customer-dashboard').classList.add('d-none');
    document.getElementById('admin-dashboard').classList.add('d-none');
}

function showCustomerDashboard() {
    document.getElementById('login-section').classList.add('d-none');
    document.getElementById('customer-dashboard').classList.remove('d-none');
}

function showAdminDashboard() {
    document.getElementById('login-section').classList.add('d-none');
    document.getElementById('admin-dashboard').classList.remove('d-none');
}

document.getElementById('pizzaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const base = document.getElementById('pizzaBase').value;
    const sauce = document.getElementById('sauce').value;
    const cheese = document.getElementById('cheese').value;
    const veggies = Array.from(document.getElementById('veggies').selectedOptions).map(option => option.value);

    document.getElementById('summaryBase').innerText = base;
    document.getElementById('summarySauce').innerText = sauce;
    document.getElementById('summaryCheese').innerText = cheese;
    document.getElementById('summaryVeggies').innerText = veggies.join(', ');

    document.getElementById('order-summary').classList.remove('d-none');
});

function sendNotification() {
    alert('Low stock warning sent to supplier!');
}
