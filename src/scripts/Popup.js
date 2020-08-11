﻿export default class Popup{
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
  }
  open(){
    this._popup.classList.add('popup_is-opened');
    this._popup.addEventListener('keyup', this._handleEscClose);
  }

  close(){
    this._popup.classList.remove('popup_is-opened');
    this._popup.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(evt){
    const activePopup = document.querySelector('.popup_is-opened');
    if (evt.code === 'Escape' && activePopup) {
      close();
    }
  }
  _handleOverlayCrossButton(evt) {
    const activePopup = document.querySelector('.popup_is-opened');
    if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('popup__button_type_close')) {
      close();
    }
  }

  setEventListeners(){
    this._popup.addEventListener('click', (evt) => {
      console.log(this);

      // this._handleEscClose();
      // this._handleOverlayCrossButton();
    });

  }
}
//TODO проверить листенеры
