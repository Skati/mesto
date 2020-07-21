export default class FormValidator{
  constructor(validateSettings,form){
    this._formSelector = validateSettings.formSelector;
    this._inputSelector = validateSettings.inputSelector;
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._submitButtonSelector = validateSettings.submitButtonSelector;
    this._inactiveButtonClass = validateSettings.inactiveButtonClass;
    this._inputErrorClass = validateSettings._inputErrorClass;
    this._errorClass = validateSettings._errorClass;
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);

    this._form = form;
  }

  disableButtonState(){

    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }

  enableButtonState(){
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute("disabled", true);
  }

  actualizeButtonState(){
    if (hasInvalidInput(this._inputList)) {
      disableButtonState(this._buttonElement,this._inactiveButtonClass);
    } else {
      enableButtonState(this._buttonElement,this._inactiveButtonClass);
    }
  }

  _hasInvalidInput(){
    return this._inputList.some((inputElement) => {
      return !this._inputList.validity.valid;
    });
  }

  _checkInputValidity() {
    if (!inputElement.validity.valid) {
      showInputError();
    } else {
      hideInputError();
    }
  }

  _showInputError() {
    const errorElement = this._form .querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError() {
    const errorElement = this._form .querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _resetForm() {
    errorInputs.forEach(errorInput => {
      errorInput.classList.remove('popup__input_type_error');
    });
    errorMessages.forEach(errorMessage => {
      errorMessage.classList.remove('popup__error_visible');
    });
  }

  _setEventListeners() {
    this._actualizeButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        this._checkInputValidity();
        this._actualizeButtonState();
      });
    });
  }

  enableValidation(){
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
