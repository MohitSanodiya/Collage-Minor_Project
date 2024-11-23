// JavaScript for Login Page
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const userType = document.querySelector('input[name="userType"]:checked').value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic validation
    if (!email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Display message or redirect
    if (userType === "Student") {
        alert(`Welcome Student: ${email}`);
        // Example redirect
        window.location.href = "student-dashboard.html";
    } else if (userType === "Teacher") {
        alert(`Welcome Teacher: ${email}`);
        // Example redirect
        window.location.href = "teacher-dashboard.html";
    }
});
