import Popup  from './Popup.js';
export default class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector);
    this._photoLink = this._popup.querySelector('.popup__image');
    this._photoDescription = this._popup.querySelector('.popup__description');
  }

  open({link,name}){
    this._photoLink.src = link;
    this._photoDescription.textContent = name;
    this._photoDescription.alt = name;
    console.log(this);
    super.open();
  }
}
