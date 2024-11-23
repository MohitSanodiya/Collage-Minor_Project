document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('forgotPasswordForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get the input value
        const emailOrPhone = document.getElementById('emailOrPhone').value.trim();

        // Validation
        if (!emailOrPhone) {
            alert("Please enter your email or phone number.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(emailOrPhone) && !/^\d{10}$/.test(emailOrPhone)) {
            alert("Invalid email or phone number format. Email should be valid or phone should be 10 digits.");
            return;
        }

        // Success Message
        alert("Password reset instructions have been sent to your email or phone.");
    });
});
