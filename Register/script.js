document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Fetch form values
        const rollNumber = document.getElementById('rollNumber').value.trim();
        const fileNumber = document.getElementById('fileNumber').value.trim();
        const semester = document.getElementById('semester').value;
        const mobileNumber = document.getElementById('mobileNumber').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validate inputs
        if (!rollNumber || !fileNumber || !semester || !mobileNumber || !password) {
            alert("Please fill in all fields!");
            return;
        }

        if (!/^\d{10}$/.test(mobileNumber)) {
            alert("Invalid Mobile Number. Must be 10 digits.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Log details to the console (for debugging)
        console.log("Roll Number:", rollNumber);
        console.log("File Number:", fileNumber);
        console.log("Semester:", semester);
        console.log("Mobile Number:", mobileNumber);
        console.log("Password:", password);

        // Success message
        alert("Registration Successful!");
    });
});
