import {
  showCard
} from "./utils.js";
export default class Card {
  constructor(text, image) {
    this._text = text;
    this._image = image;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('#card-template')
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _like() {
    this._card.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _deleteCard() {
    this._card.remove();
  }

  _setEventListeners() {
    this._card.querySelector('.card__like').addEventListener('click', () => {
      this._like();
    });

    this._card.querySelector('.card__trash').addEventListener('click', () => {
      this._deleteCard();
    });

    this._card.querySelector('.card__image').addEventListener('click', () => {
      showCard(this._text, this._image);
    });
  }

  generateCard() {
    this._card = this._getTemplate();
    this._setEventListeners();
    this._card.querySelector('.card__image').src = this._image;
    this._card.querySelector('.card__image').alt = this._text;
    this._card.querySelector('.card__name').textContent = this._text;

    return this._card;
  }
}
