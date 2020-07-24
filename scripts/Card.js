import { showCard } from "./index.js";
// import { showCard } from "./utils.js";

export default class Card{
  constructor(text,image){
    this._text = text;
    this._image = image;
  }

  _getTemplate(){
    const cardElement = document
    .querySelector('#element')//TODO поменять на #card-template
    .content
    .querySelector('.element')//TODO поменять на .card
    .cloneNode(true);

    return cardElement;
  }

  _like(){
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _deleteCard(){
    this._element.remove();
  }

  _setEventListeners(){
    this._element.querySelector('.element__like').addEventListener('click',() =>{
      this._like();
    });

    this._element.querySelector('.element__trash').addEventListener('click',() =>{
      this._deleteCard();
    });

    this._element.querySelector('.element__image').addEventListener('click',() =>{
      showCard(this._text,this._image);
    });
  }

  generateCard(){
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__image').alt = this._text;
    this._element.querySelector('.element__name').textContent = this._text;

    return this._element;
  }
}


