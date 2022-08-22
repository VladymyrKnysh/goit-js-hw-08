// import throttle from "lodash.throttle"
// const formEl = document.querySelector('.feedback-form')
// const inputEl = document.querySelector('.feedback-form input')
// const textareaEl = document.querySelector('.feedback-form textarea')
// const STOGAGE_KEY = 'feedback-form-state'
// const formLocalData = {
//     setEmail(mail) {
//         this.email = mail
//     },
//     setMessage(message) {
//         this.message = message
//     },
// }
// setCurrentData()
// formEl.addEventListener('submit', onFormSubmit)
// inputEl.addEventListener('input', throttle(onEmailInput, 500))
// textareaEl.addEventListener('input', throttle(onTextareaInput, 500))

// function toJSONStringify(objectToJSON) {
//     let stringifiedFormLocalData = JSON.stringify(objectToJSON)
//     localStorage.setItem(STOGAGE_KEY, stringifiedFormLocalData)
// }

// function onEmailInput(e) {
//     e.preventDefault()
//     const userEmail = e.target.value
//     formLocalData.setEmail(userEmail)
//     toJSONStringify(formLocalData)
// }
// function onTextareaInput(e) {
//     const userMessage = e.target.value
//     formLocalData.setMessage(userMessage)
//     toJSONStringify(formLocalData)
// }
// function onFormSubmit(e) {
//     e.preventDefault()
//     e.currentTarget.reset()
//     localStorage.removeItem(STOGAGE_KEY)
//     console.log(formLocalData);
// }
// function setCurrentData() {
//     let parseData = JSON.parse(localStorage.getItem(STOGAGE_KEY))
//     if (parseData) {
//         inputEl.value = parseData.email
//         textareaEl.value = parseData.message

//     }
// }


const formEl = document.querySelector('.feedback-form')
const inputEl = document.querySelector('.feedback-form input')
const textareaEl = document.querySelector('.feedback-form textarea')
const STOGAGE_KEY = 'feedback-form-state'
const formData = {}

 formEl.addEventListener('submit', onFormSubmit)
inputEl.addEventListener('input', onEmailInput)


formEl.addEventListener('input', e => {
    formData[e.target.name] = e.target.value
    localStorage.setItem(STOGAGE_KEY, JSON.stringify(formData))
})

populateFields()

function onFormSubmit(e) {
    e.preventDefault()
    if (inputEl.value === '' || textareaEl.value === '') {
        alert('Усі поля повинні буди заповнені')
    }
        
    e.target.reset()
    localStorage.removeItem(STOGAGE_KEY)
    console.log(formData);
}


function onEmailInput(e) {
localStorage.setItem(STOGAGE_KEY, e.target.value)
}


// function onTextareaInput(e) {
//     const message = e.target.value
// localStorage.setItem(STOGAGE_KEY, message)
// }

function populateFields() {
    const savedData = localStorage.getItem(STOGAGE_KEY)
    const parsData = JSON.parse(savedData) 
    if (savedData) {
        if (parsData.email) {
          inputEl.value = parsData.email  
        }
        if (parsData.message) {
            textareaEl.value = parsData.message
        }
        
    }
}






