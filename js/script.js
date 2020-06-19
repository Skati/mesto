const formElement = document.querySelector('.popup__container');
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__button_type_edit');
const submitButton = document.querySelector('.popup__button_type_submit');
const closeButton = document.querySelector('.popup__button_type_close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_description');

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
    evt.preventDefault();
    profileName.textContent=nameInput.value;
    profileDescription.textContent=jobInput.value;
    popupClose();
}
