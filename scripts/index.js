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

const cardTemplate = document.querySelector('#element').content;
const popup = document.querySelector('.popup');
//редактирование профиля
const buttonEdit = document.querySelector('.profile__button_type_edit');
const editFormPopup = document.querySelector('.popup_type_profile');
const editFormSubmitButton = editFormPopup.querySelector('.popup__button_type_submit');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
//добавление карточек
const cardContainer = document.querySelector('.elements');
const addCardPopup = document.querySelector('.popup_type_add-card');
const buttonAdd = document.querySelector('.profile__button_type_add');
const submitButtonAddCard = addCardPopup.querySelector('.popup__button_type_submit');
const imageLink = document.querySelector('.popup__input_type_image-link');
const imageName = document.querySelector('.popup__input_type_image-name');
//photo popup
const photoPopup = document.querySelector('.popup_type_photo');
const photoView = document.querySelector('.popup__image');
const photoDescription = document.querySelector('.popup__description');

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
  photoLink.addEventListener('click', () => showCard(cardDescription.textContent, cardImage.src));
  elementTrash.addEventListener('click', deleteCard);
  return cardElement;
}

function addCard(evt) {
  evt.preventDefault();
  const card = {
    name: imageName.value,
    link: imageLink.value
  };
  cardContainer.prepend(createCard(card));
  closePopup(addCardPopup);
}

function showCard(name, link) {
  photoView.src = link;
  photoDescription.textContent = name;
  photoDescription.alt = name;
  openPopup(photoPopup);
}

function renderCards() {
  initialCards.forEach((cardElement) => {
    cardContainer.prepend(createCard(cardElement));
  });
}

function deleteCard(item) {
  item.currentTarget.closest('.element').remove();
}

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keyup', handleEscKey);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  popup.removeEventListener('keyup', handleEscKey);
}

function handleEscKey(evt) {
  const activePopup = document.querySelector('.popup_is-opened');
  if (evt.code === 'Escape' && activePopup) {
    closePopup(activePopup);
  }
}

function handleOverlayCrossButton(evt) {
  const activePopup = document.querySelector('.popup_is-opened');
  if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('popup__button_type_close')) {
    closePopup(activePopup);
  }
}

buttonEdit.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  editFormSubmitButton.classList.remove('popup__button_disabled');
  editFormSubmitButton.removeAttribute('disabled', true);
  openPopup(editFormPopup);
  resetForm(editFormPopup);
});

editFormSubmitButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(editFormPopup);
});

editFormPopup.addEventListener('click', handleOverlayCrossButton);

buttonAdd.addEventListener('click', () => {
  imageLink.value = '';
  imageName.value = '';
  submitButtonAddCard.classList.add('popup__button_disabled');
  submitButtonAddCard.setAttribute('disabled', true);
  openPopup(addCardPopup);
  resetForm(addCardPopup);
});

addCardPopup.addEventListener('click', handleOverlayCrossButton);

submitButtonAddCard.addEventListener('click', addCard);

photoPopup.addEventListener('click', handleOverlayCrossButton);

renderCards();
