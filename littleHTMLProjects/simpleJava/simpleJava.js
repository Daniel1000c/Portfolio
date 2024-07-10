// Create input invalidation for both html sheets
function validateForm(){
    var username = document.getElementById("registerUserName");
    var password = document.getElementById("registerPassWord");
    var email = document.getElementById("registerEmail");

    var vaild = true;

    if(username.value.trim() === ""){
        username.classList.add("invalid");
        valid = false;
    } else {
        username.classList.remove("invalid");
    }

    if(password.value.trim() ===""){
        password.classList.add("invalid");
        valid = false;
    } else{
        password.classList.remove("invalid");
    }

    if (email.value.trim () === "" || !isValidEmail(email.value.trim())){
        email.classList.add("invalid");
        valid = false;
    } else {
        email.classList.remove("invalid");
    }

    return valid;
}

function isValidEmail(email) {
    // basic regex validation for email format
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}