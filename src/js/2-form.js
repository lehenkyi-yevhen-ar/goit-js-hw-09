const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form')
const inputEmail = document.querySelector('input')
const inputText = document.querySelector('textarea')

let formData = { email: "", message: "" }

form.addEventListener('input', inputData)
form.addEventListener('submit', submitData)

populateForm();

function submitData(event) {
    event.preventDefault()

    if (inputEmail.value.trim() === '' || inputText.value.trim() === '') {
        alert ('Fill please all fields')
    } else

    localStorage.removeItem(STORAGE_KEY)

    event.currentTarget.reset();

    console.log(formData);
}

function inputData(event) {
    event.preventDefault();

    formData = {email: inputEmail.value.trim(), 
                message: inputText.value.trim()}
    try {
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
} catch(error) {
    console.log(error);
}
}

function populateForm(event) {
    try {
        formData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    } catch(error) {
        console.log(error)
        return
    }

    if (formData === null) {
        return
    } else {
    inputEmail.value = formData.email
    inputText.value = formData.message
    } 
}


