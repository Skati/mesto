﻿import Popup  from './Popup.js';
export default class PopupWithForm extends Popup{
  constructor(containerSelector,submitHandler){
    super(containerSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup__form');
  }
  close(){
    this._form.reset();
    super.close();
  }
  _getInputValues(){
    const inputValues = {};
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;

    });
    return inputValues;

  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) =>{
      evt.preventDefault();
      this._submitHandler(this._getInputValues);
    })
  }
}
