
let loginBtn = document.getElementById('login-form')
loginBtn.addEventListener('click', function (e) {
    e.preventDefault();


    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (email === 'example@email.com' && password === 'password123') {

        window.location.href = 'dashboard.html';
    } else {

        alert('Invalid email or password. Please try again.');
    }
});