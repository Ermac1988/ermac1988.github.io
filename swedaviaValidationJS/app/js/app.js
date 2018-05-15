function validateForm() {
    var userName = document.querySelector('body > div > main > form > div:nth-of-type(1) > label > input'), userPassword = document.querySelector('body > div > main > form > div:nth-of-type(2) > label > input'), messageName = document.querySelector('body > div > main > form > div:nth-of-type(1) > span'), messagePassword = document.querySelector('body > div > main > form > div:nth-of-type(2) > span');

    if(userName.value && userPassword.value) {
        userName.style.border = "1px solid пкуут";
        messageName.style.display = "none";
        userPassword.style.border = "1px solid green";
        messagePassword.style.display = "none";
        return true;
    }
    else if(userName.value) {
        userName.style.border = "1px solid green";
        messageName.style.display = "none";
        userPassword.style.border = "1px solid #721c24";
        messagePassword.style.display = "inline-block";
        return false;
    }
    else if(userPassword.value) {
        userName.style.border = "1px solid #721c24";
        messageName.style.display = "inline-block";
        userPassword.style.border = "1px solid green";
        messagePassword.style.display = "none";
        return false;
    }
    else {
        userName.style.border = "1px solid #721c24";
        messageName.style.display = "inline-block";
        userPassword.style.border = "1px solid #721c24";
        messagePassword.style.display = "inline-block";
        return false;
    }
}