function openForm() {
    document.getElementById("signup").style.display = "block";
    document.getElementById("signin").style.opacity = "0.4";
}
  
function closeForm() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("signin").style.display = "flex";
    document.getElementById("signin").style.opacity = "1";
}

function signInFormValidate() {
    var accountSignIn = document.getElementById("accountSignIn").value;
    var passwordSignIn = document.getElementById("passwordSignIn").value;
    var error = document.getElementById("errorSignIn");
    var text = '';

    if (accountSignIn === '') {
        // Error
        text = "Please Enter Email Address or Phone Number";
        error.innerHTML = text;
        return false;
    }

    else if (isNaN(accountSignIn) && accountSignIn.indexOf("@") == -1) {
        // Error
        text = "Please Enter Valid Email Address";
        error.innerHTML = text;
        return false;
    }

    else if (!(isNaN(accountSignIn)) && accountSignIn.length != 11) {
        // Error
        text = "Please Enter Valid Phone Number";
        error.innerHTML = text;
        return false;
    }

    else if (passwordSignIn === '') {
        // Error
        text = "Please Enter Password";
        error.innerHTML = text;
        return false;
    }
    
    else {
        return true;
    }
}

function signUpFormValidate() {
    var firstName = document.getElementById("firstName").value;
    var surName = document.getElementById("surName").value;
    var accountSignUp = document.getElementById("accountSignUp").value;
    var passwordSignUp = document.getElementById("passwordSignUp").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var custom = document.getElementById("custom").checked;
    var error = document.getElementById("errorSignUp");
    var text = '';

    if (firstName === '') {
        // Error
        text = "Please Enter First Name";
        error.innerHTML = text;
        return false;
    }

    else if (surName === '') {
        // Error
        text = "Please Enter Surname";
        error.innerHTML = text;
        return false;
    }

    else if (accountSignUp === '') {
        // Error
        text = "Please Enter Email Address or Phone Number";
        error.innerHTML = text;
        return false;
    }

    else if (isNaN(accountSignUp) && accountSignUp.indexOf("@") == -1) {
        // Error
        text = "Please Enter Valid Email Address";
        error.innerHTML = text;
        return false;
    }

    else if (!(isNaN(accountSignUp)) && accountSignUp.length != 11) {
        // Error
        text = "Please Enter Valid Phone Number";
        error.innerHTML = text;
        return false;
    }

    else if (passwordSignUp === '') {
        // Error
        text = "Please Enter Password";
        error.innerHTML = text;
        return false;
    }

    else if (male == false && female == false && custom == false) {
        // Error
        text = "Please Select Gender";
        error.innerHTML = text;
        return false;
    }
    
    else {
        alert("You've successfully created a new account.");
        return true;
    }
}