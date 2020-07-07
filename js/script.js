const cardTemplate = document.querySelector('#element').content;
//редактирование профиля
const editButton = document.querySelector('.profile__button_type_edit');
const editFormPopup = document.querySelector('.popup_type_profile');
const editFormSubmitButton = editFormPopup.querySelector('.popup__button_type_submit');
const editFormCloseButton = editFormPopup.querySelector('.popup__button_type_close');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
//добавление карточек
const cardContainer = document.querySelector('.elements');
const addCardPopup = document.querySelector('.popup_type_add-card');
const addButton = document.querySelector('.profile__button_type_add');
const addCardSubmitButton = addCardPopup.querySelector('.popup__button_type_submit');
const addCardCloseButton = addCardPopup.querySelector('.popup__button_type_close');
const imageLink = document.querySelector('.popup__input_type_image-link');
const imageName = document.querySelector('.popup__input_type_image-name');
//photo popup
const photoPopup = document.querySelector('.popup_type_photo');
const photoLink = document.querySelector('.element__link');
const photoCloseButton = photoPopup.querySelector('.popup__button_type_close');
const initialCards = [
  {
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

function createCard(name,link){
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardLike = cardElement.querySelector('.element__like');
  cardImage.src = link;
  cardImage.alt = name;
  cardImage.textContent = name;
  cardLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });

  cardContainer.append(cardElement);
}
// function addCard(card){

// }
initialCards.forEach((item) => {
  createCard(item.name,item.link);
});


function togglePopup(popup) {
  popup.classList.toggle('popup_is-opened');
}
//edit popup
console.log(photoLink);
editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  togglePopup(editFormPopup);
});

editFormSubmitButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  profileName.textContent=nameInput.value;
  profileDescription.textContent=jobInput.value;
  togglePopup(editFormPopup);
});

editFormCloseButton.addEventListener('click', () => {
  togglePopup(editFormPopup);
});
//add popup
addButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
});

addCardCloseButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
});

photoCloseButton.addEventListener('click', () => {
  togglePopup(photoPopup);
});
