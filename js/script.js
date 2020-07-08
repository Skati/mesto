const cardTemplate = document.querySelector('#element').content;
//редактирование профиля
const buttonEdit = document.querySelector('.profile__button_type_edit');
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
const buttonAdd = document.querySelector('.profile__button_type_add');
const submitButtonAddCard = addCardPopup.querySelector('.popup__button_type_submit');
const closeButtonAddCard = addCardPopup.querySelector('.popup__button_type_close');
const imageLink = document.querySelector('.popup__input_type_image-link');
const imageName = document.querySelector('.popup__input_type_image-name');

//photo popup
const photoPopup = document.querySelector('.popup_type_photo');
const photoView = document.querySelector('.popup__image');
const photoDescription = document.querySelector('.popup__description');
const photoCloseButton = photoPopup.querySelector('.popup__button_type_close');
const initialCards = [{
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

function like(evt) {
  evt.target.classList.toggle('element__like_active');
}

function createCard(elem) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__image');
  const cardLike = cardElement.querySelector('.element__like');
  const photoLink = cardElement.querySelector('.element__link');
  const elementTrash = cardElement.querySelector('.element__trash');
  const cardDescription = cardElement.querySelector('.element__name');
  cardImage.src = elem.link;
  cardImage.alt = elem.name;
  cardDescription.textContent = elem.name;
  cardLike.addEventListener('click', like);
  photoLink.addEventListener('click', showCard);
  elementTrash.addEventListener('click', deleteCard);
  return cardElement;
}

function renderCards() {
  initialCards.forEach((cardElement) => {
    cardContainer.prepend(createCard(cardElement));
  });
}

function showCard(evt) {
  photoView.src = evt.target.src;
  photoDescription.textContent = evt.target.alt;
  photoDescription.alt = evt.target.alt;
  togglePopup(photoPopup);
}

function deleteCard(item) {
  item.currentTarget.closest('.element').remove();
}

function togglePopup(popup) {
  popup.classList.toggle('popup_is-opened');
}

buttonEdit.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  togglePopup(editFormPopup);
});

editFormSubmitButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  togglePopup(editFormPopup);
});

editFormCloseButton.addEventListener('click', () => togglePopup(editFormPopup));
//add popup
buttonAdd.addEventListener('click', () => togglePopup(addCardPopup));

closeButtonAddCard.addEventListener('click', () => togglePopup(addCardPopup));

photoCloseButton.addEventListener('click', () => togglePopup(photoPopup));

submitButtonAddCard.addEventListener('click', (evt) => {
  evt.preventDefault();
  const card = {
    name: imageName.value,
    link: imageLink.value
  };
  cardContainer.prepend(createCard(card));
  togglePopup(addCardPopup);

});
renderCards();
