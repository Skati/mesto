﻿export default class Popup{
  constructor(containerSelector){
    this._popup = document.querySelector(containerSelector);
    this._handleEscClose = this._handleEscClose.bind(this);

  }
  open(){
    this._popup.classList.add('popup_is-opened');
    document.addEventListener('keyup', this._handleEscClose);
  }

  close(){
    this._popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();

    }
}
  _handleOverlayCrossButton(evt) {
    if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('popup__button_type_close')) {
      this.close();
    }
  }

  setEventListeners(){
    this._popup.addEventListener('click',(evt)=>{
      this._handleOverlayCrossButton(evt);
    })
  }

}

