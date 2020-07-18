﻿const enableValidation = ({formSelector, ...rest}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners({formElement, ...rest});
  });
};

function setEventListeners({formElement, inputSelector, submitButtonSelector, ...rest}) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  actualizeButtonState({inputList, buttonElement, ...rest});
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity({formElement, inputElement, ...rest});
      actualizeButtonState({inputList, buttonElement, ...rest});
    });
  });
}

const actualizeButtonState = ({inputList, buttonElement, inactiveButtonClass}) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled", true);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const checkInputValidity = ({formElement, inputElement, ...rest}) => {
  if (!inputElement.validity.valid) {
    showInputError({formElement, inputElement, ...rest});
  } else {
    hideInputError({formElement, inputElement, ...rest});
  }
};

const showInputError = ({formElement, inputElement, errorClass, inputErrorClass, ...rest}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

function hideInputError({formElement, inputElement, errorClass, inputErrorClass, ...rest}) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
}

function resetForm(popup) {
  const errorInputs = Array.from(popup.querySelectorAll('.popup__input_type_error'));
  const errorMessages = Array.from(popup.querySelectorAll('.popup__error_visible'));
  errorInputs.forEach(errorInput => {
    errorInput.classList.remove('popup__input_type_error');
  });
  errorMessages.forEach(errorMessage => {
    errorMessage.classList.remove('popup__error_visible');
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button_type_submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
