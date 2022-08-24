
import throttle from "lodash.throttle"
const formEl = document.querySelector('.feedback-form')
const inputEl = document.querySelector('.feedback-form input')
const textareaEl = document.querySelector('.feedback-form textarea')

const STORAGE_KEY = 'feedback-form-state'
let formData = { }

 formEl.addEventListener('submit', onFormSubmit)
 formEl.addEventListener('input', throttle(onFormInput, 500))


populateFields()

function onFormSubmit(e) {
    e.preventDefault()
    if (inputEl.value === '' || textareaEl.value === '') {
        alert('Усі поля повинні буди заповнені')
    } 
    
    formData.email = inputEl.value
    formData.message = textareaEl.value
    console.log( formData)
    
    
    e.target.reset()
    localStorage.removeItem(STORAGE_KEY)
   
    
}


function onFormInput(e) {
    //  formData.email = ''
    // formData.message = ''
 formData[e.target.name] = e.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    // console.log(formData);
    
    
}

function populateFields() {
    const savedData = localStorage.getItem(STORAGE_KEY)
    const parsData = JSON.parse(savedData)
    if (savedData) {
        inputEl.value = parsData.email || ''
        textareaEl.value = parsData.message || ''
    }
    formData.email = inputEl.value
    formData.message = textareaEl.value
}







