const formElement = document.querySelector('.popup__container');
const profilePopup = document.querySelector('.popup_type_profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const photoPopup = document.querySelector('popup_type_photo');
const popup = document.querySelectorAll('.popup');

const editButton = document.querySelector('.profile__button_type_edit');
const submitButton = document.querySelector('.popup__button_type_submit');
const addButton = document.querySelector('.profile__button_type_add');
const closeButton = document.querySelector('.popup__button_type_close');
const imageLink = document.querySelector('.popup__input_type_image-link');
const imageName = document.querySelector('.popup__input_type_image-name');


const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const cardContainer = document.querySelector('.elements');

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


editButton.addEventListener('click',profilePopupShow);
addButton.addEventListener('click',addCardPopupShow);
formElement.addEventListener('submit', formSubmitHandler);
// photoPopup.addEventListener('click',addCardPopupShow);
// closeButton.addEventListener('click', function () {
//   popup.forEach((item) => {
//     console.log('item');
//     item.removeAttribute("style","visibility: visible;opacity: 1;");
//     console.log(item);
//   });
// });


function profilePopupShow(){
  popup[0].setAttribute("style", "visibility: visible;opacity: 1;");
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}
function addCardPopupShow(){
 popup[1].setAttribute("style", "visibility: visible;opacity: 1;");
}

function imagePopupShow(){
  popup[2].setAttribute("style", "visibility: visible;opacity: 1;");
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent=nameInput.value;
    profileDescription.textContent=jobInput.value;
    popupClose();
}

console.log(cardContainer);

function addCard(name,link){
  const cardTemplate = document.querySelector('#element').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.element__image').setAttribute('src', link);
  cardElement.querySelector('.element__image').alt = name;
  cardElement.querySelector('.element__name').textContent = name;
  cardContainer.append(cardElement);
}
initialCards.forEach((item) => {
  addCard(item.name,item.link);
  console.log(item.name,item.link);
    });
// function like(evt){
//   element.querySelector('.element__like').addEventListener('click', function (evt) {
//     evt.target.classList.toggle('element__like_active');
//   });
// }

