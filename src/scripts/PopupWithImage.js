﻿import Popup  from './Popup.js';
export default class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector);
    this._photoLink = this._popup.querySelector('.popup__image');
    this._photoDescription = this._popup.querySelector('.popup__description');
  }

  open({link,description}){
    // this._photoLink.src = link;
    // this._photoDescription.textContent = description;
    // this._photoDescription.alt = description;
    console.log('1');
    // super.open();
  }
}
