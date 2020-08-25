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
    this._inputValues = {};
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._inputList.foreach((input) => {
    });
    return this._inputValues;

  }
  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) =>{
      evt.preventDefault();
      this._submitHandler(this._getInputValues);
    })
  }
}
