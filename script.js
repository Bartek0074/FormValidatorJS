const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');

const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.textContent = msg;
}

const closeError = input => {
    const formBox = input.parentElement;

    formBox.classList.remove('error');
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === ''){
            showError(el, el.placeholder)
        }
        else {
            closeError(el);
        }
    })
}

const checkLength = (input, min) => {
    if (input.value.length < min) {
        showError(input, `${input.previousElementSibling.textContent.slice(0, -1)} składa się z minimum ${min} znaków`)
    }
}

const checkPassword = (pass1, pass2) =>{
    if (pass1.value !== pass2.value) {
        showError(pass2, "Hasła muszą być identyczne!")
    }
}

const checkMail = email => {
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    if(!emailRegExp.test(email.value)){
        showError(email, "Podany adres e-mail jest nieprawidłowy!")
    }
}

clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [username, pass, pass2, email].forEach(el => {
        el.value = '';
    })

})

sendBtn.addEventListener('click', e => {
    e.preventDefault();

    checkForm([username, pass, pass2, email]);
    checkLength(username, 3);
    checkLength(pass, 8);
    checkPassword(pass, pass2);
    checkMail(email);
})