let formElement = document.querySelector('.popup__container');
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__btn_edit');
let submitButton = document.querySelector('.popup__btn_submit');
let closeButton = document.querySelector('.popup__btn_close');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_dedcription');

editButton.addEventListener('click',popupShow);
closeButton.addEventListener('click',popupClose);
formElement.addEventListener('submit', formSubmitHandler);

function popupShow(){
  popup.setAttribute("style", "display: flex");
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}
function popupClose(){
  popup.removeAttribute("style","display: flex")
}

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent=nameInput.value;
    profileDescription.textContent=jobInput.value;
    popupClose();
}

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
//
