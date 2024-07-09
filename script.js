const SubmitButton = document.getElementById('SubmitButton');

const NameError = document.getElementById('NameError');
const EmailError = document.getElementById('EmailError');
const PasswordError = document.getElementById('PasswordError');

SubmitButton.addEventListener('click', (e)=>
{
    e.preventDefault();

    if(ValidUserFullName() && ValidUserEmail() && ValidatePassword() == true)
    {
        alert("Form is submitted successfully.");
    }
});

function ValidUserFullName()
{
    var UserFullName = document.getElementById('UserFullName').value;

    if(UserFullName.length == 0)
    {
        NameError.innerHTML = "User name is required.";
        NameError.previousElementSibling.classList.add('fa-xmark')
        return false;
    }

    if (!UserFullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        NameError.innerHTML = "Write your full name.";
        NameError.previousElementSibling.classList.add('fa-xmark')
        return false;
    }
    NameError.innerHTML = ""
    NameError.previousElementSibling.classList.add('fa-check')
    return true;
}

function ValidUserEmail()
{
    var UserEmail = document.getElementById('UserEmail').value;

    if(UserEmail.length == 0)
    {
        EmailError.innerHTML = "E-mail is required.";
        EmailError.previousElementSibling.classList.add('fa-xmark')
        return false;
    }

    if(!UserEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        EmailError.innerHTML = "Enter a valid E-mail.";
        EmailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    EmailError.innerHTML = ""
    EmailError.previousElementSibling.classList.add('fa-check')
    return true;
}

function ValidatePassword()
{
    var UserPassword = document.getElementById('UserPassword').value;

    if(UserPassword.length == 0)
    {
        PasswordError.innerHTML = "Password can not be empty.";
        PasswordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!UserPassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/))
    {
        PasswordError.innerHTML = "Password should contain at least : 1 Uppercase, 1 Lowercase, 1 Digit and 1 Alphabet.";
        PasswordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    PasswordError.innerHTML = "";
    PasswordError.previousElementSibling.classList.add('fa-check');
    return true;
}
