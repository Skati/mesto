﻿
const enableValidation = ({formSelector, ...rest}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  // console.log(forms);
  forms.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      formElement.reset();
      evt.preventDefault();
    });
    setEventListeners({formElement,...rest});
  });
};
function setEventListeners({formElement, inputSelector, submitButtonSelector,...rest}){
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  actualizeButtonState({inputList, buttonElement,...rest});
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {

      checkInputValidity({formElement, inputElement,...rest});
      actualizeButtonState({inputList, buttonElement,...rest});
    });
  });
}

const actualizeButtonState = ({inputList, buttonElement, inactiveButtonClass}) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true)
    console.log(buttonElement.classList);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled', true)
  }
};
const hasInvalidInput = (inputList) =>{
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
});
};
const checkInputValidity = ({formElement,inputElement,...rest}) => {
  if (!inputElement.validity.valid) {
    showInputError({formElement, inputElement,...rest});
    console.log(inputElement);
  } else {
    hideInputError({formElement, inputElement,...rest});
  }
};
//TODO reset validation message
const showInputError = ({formElement,inputElement,errorClass,inputErrorClass,...rest}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

function hideInputError(formElement,inputElement,errorClass) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button_type_submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
