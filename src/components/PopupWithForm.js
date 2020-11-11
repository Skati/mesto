import Popup  from './Popup.js';
export default class PopupWithForm extends Popup{
  constructor(containerSelector,submitHandler){
    super(containerSelector);
    this._submitHandler = submitHandler;
    this._button = document.querySelector('.popup__button_type_submit');
    this._buttonDefaultText =this._button.textContent;
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

  renderLoading(isSending) {
    this._button.textContent = isSending ? 'Загрузка...' : this._buttonDefaultText;
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) =>{
      evt.preventDefault();
      this._submitHandler(this._getInputValues);
    })
  }
}
