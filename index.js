const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    let firstName = fname.value.trim();
    let lastName = lname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    


    if(firstName === ''){
        errorFunc(fname, 'First Name cannot be empty')
    } else {
        successFunc(fname)
    }

    if (lastName === ''){
        errorFunc(lname, 'Last Name cannot be empty')
    } else {
        successFunc(lname)
    }

    if (emailValue === '' || !emailValue.includes('@' && '.com')){
        errorFunc(email, 'Not a valid Email')
    } else {
        successFunc(email)
    }

    if (passwordValue === ''){
        errorFunc(password, 'Password cannot be empty')
    } else {
        successFunc(password)
    }
})

function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += ' error';
    span.className += 'error-text';
}

function successFunc(req){
    req.className += ' success';
}