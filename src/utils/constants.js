export const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validateSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button_type_submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
export const apiConfig = {
  address: 'https://mesto.nomoreparties.co/v1',
  groupId: `cohort-17`,
  token: `741ae5d6-8517-4b26-96a9-11c24cc6935d`,
}
//редактирование профиля
export const buttonEdit = document.querySelector('.profile__button_type_edit');
export const editFormPopup = document.querySelector('.popup_type_profile');
export const editFormSubmitButton = editFormPopup.querySelector('.popup__button_type_submit');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const profileAvatar = document.querySelector('profile__avatar');

export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_description');
//добавление карточек
export const cardListContainer = document.querySelector('.card-list');
export const addCardPopup = document.querySelector('.popup_type_add-card');
export const buttonAdd = document.querySelector('.profile__button_type_add');
export const submitButtonAddCard = addCardPopup.querySelector('.popup__button_type_submit');
export const imageLink = document.querySelector('.popup__input_type_image-link');
export const imageName = document.querySelector('.popup__input_type_image-name');



