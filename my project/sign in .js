document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`Email: ${email}\nPassword: ${password}`);
        // Here you can add the logic to handle the sign in
    } else {
        alert('Please fill in both fields.');
    }
});
