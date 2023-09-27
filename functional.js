function signupHandler(event) {
    event.preventDefault();

}

function connectForm(formId, formSubmitHandler)  {
    const form = document.getElementById('user-input');
    form.addEventListener('subnit', signupHandler)
}