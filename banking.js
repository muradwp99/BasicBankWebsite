//login handler

document.getElementById('login-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-input');
    const userEmail = emailField.value;
    const passField = document.getElementById('password-input');
    const userPass = passField.value;
    if (userEmail == 'admin@gmail.com' && userPass == 'okay') {
        console.log('valid user');
    }

})