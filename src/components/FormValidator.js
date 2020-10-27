export default class FormValidator {
  constructor(validateSettings, formSelector) {
    this._inputSelector = validateSettings.inputSelector;
    this._submitButtonSelector = validateSettings.submitButtonSelector;
    this._inactiveButtonClass = validateSettings.inactiveButtonClass;
    this._inputErrorClass = validateSettings.inputErrorClass;
    this._errorClass = validateSettings.errorClass;
    this._form = formSelector;
    this._element = document.querySelector(this._form);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement) {
    const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disableButtonState() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;

  }

  _enableButtonState() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _actualizeButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButtonState();
    } else {
      this._enableButtonState();
    }
  }

  resetForm() {
    const errorInputs = [...this._element.querySelectorAll('.popup__input_type_error')];
    const errorMessages = [...this._element.querySelectorAll('.popup__error_visible')];
    errorInputs.forEach(errorInput => {
      errorInput.classList.remove('popup__input_type_error');
    });
    errorMessages.forEach(errorMessage => {
      errorMessage.classList.remove('popup__error_visible');
    });
  }

  _setEventListeners() {
    this._inputList = [...this._element.querySelectorAll(this._inputSelector)];
    this._buttonElement = this._element.querySelector(this._submitButtonSelector);
    this._actualizeButtonState();
    this.resetForm();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._actualizeButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
