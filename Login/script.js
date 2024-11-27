
function login(){
    let userType = document.querySelector('input[name="userType"]:checked').value;
    let user_id = document.querySelector(".user_id").value;
    let password = document.querySelector(".password").value;   

    let input1 = document.querySelector("#input1").checked;
    console.log(input1);
    

    if(userType == 'Teacher'){
        // check teacher valid or not
        if(user_id == 'teacher' && password == '54321'){
            window.location.href = '../Home1/index.html';
        }
        else{
            alert('Invalid username of teacher or password');
        }
    }  
    else if(userType == 'Student'){
        // check student valid or not
        if(user_id == '' && password == ''){
            alert('Please enter input in the fields');
        }
        else if(user_id == '0115CS221071' && password == 'baba tillu'){
            window.location.href = '../St_dsboard/index.html';
        }
    
        else if(user_id == '0115CS221080' && password == 'baba tillu'){
            window.location.href = '../login1/index.html';
        }
        else{
            alert('Invalid username of student or password');
        }
    }

    // if user type is not selected
    else{
        alert('Please select user type.');
        return
    }
}














































// // JavaScript for Login Page
// // document.getElementById("loginForm").addEventListener("submit", function (e) {
//     // e.preventDefault(); // Prevent form submission

//     // Get form values
//     // const userType = document.querySelector('input[name="userType"]:checked').value;
//     const user_id = document.querySelector("#user_id").value;
//     const password = document.querySelector("#password").value;

//     console.log( user_id, password);
    


// //     // Basic validation
// //     if (!email || !password) {
// //         alert("Please fill out all fields.");
// //         return;
// //     }

// //     // Display message or redirect
// //     if (userType === "Student") {
// //         alert(`Welcome Student: ${email}`);
// //         // Example redirect
// //         window.location.href = "student-dashboard.html";
// //     } else if (userType === "Teacher") {
// //         alert(`Welcome Teacher: ${email}`);
// //         // Example redirect
// //         window.location.href = "teacher-dashboard.html";
// //     }
// // });
// // });