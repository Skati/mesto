export default class Card {
  constructor(name, link,handleCardClick,cardSelector) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    // this._cardSelector.content
    //   .querySelector('.card')
    //   .cloneNode(true);

    return cardElement;
  }

  _like() {
    this._card.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _deleteCard() {
    this._card.remove();
  }

  _showCard() {
    this._handleCardClick({ name: this._name, link: this._link });
  }

  _setEventListeners() {
    this._card.querySelector('.card__like').addEventListener('click', () => {
      this._like();
    });

    this._card.querySelector('.card__trash').addEventListener('click', () => {
      this._deleteCard();
    });

    this._card.querySelector('.card__image').addEventListener('click', () => this._showCard())
  }

  generateCard() {
    this._card = this._getTemplate();
    this._setEventListeners();
    this._card.querySelector('.card__image').src = this._link;
    this._card.querySelector('.card__image').alt = this._name;
    this._card.querySelector('.card__name').textContent = this._name;
    return this._card;
  }
}
