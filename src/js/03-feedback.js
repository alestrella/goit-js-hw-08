// Write a script that will save field values to local storage when the user types something

import throttle from "lodash.throttle";

const ref = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    msg: document.querySelector('[name="message"]'),
    submitBtn: document.querySelector('button'),
};
const STORAGE_KEY = "feedback-form-state";
let feedback = {};

ref.form.addEventListener('submit', handleSubmit);
ref.form.addEventListener('input', throttle(handleInput, 500));
initPage();

function initPage() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
        feedback = JSON.parse(savedData);
        ref.email.value = feedback.email;
        ref.msg.value = feedback.message;
    }
}

function handleInput(e) {
    let data = {
        email: ref.email.value,
        message: ref.msg.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(feedback);

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}