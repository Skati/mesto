import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

import {
  initialCards,
  validateSettings,
  buttonEdit,
  editFormPopup,
  editFormSubmitButton,
  profileName,
  profileDescription,
  nameInput,
  jobInput,
  cardListContainer,
  addCardPopup,
  buttonAdd,
  submitButtonAddCard,
  imageLink,
  imageName
} from './constants.js';


const ProfileValidation = new FormValidator(validateSettings, 'form[name="profile"]');
const AddCardValidation = new FormValidator(validateSettings, 'form[name="add_card"]');
const ImagePopup = new PopupWithImage('.popup_type_photo');

// UserPopup.setEventListeners();

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link,(item)=>{
      ImagePopup.open(item);
      ImagePopup.setEventListeners();
    });
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    },

  },

  cardListContainer
);

const AddCardPopup = new PopupWithForm('.popup_type_add-card', ()=>{
  const card = new Card(imageName.value,imageLink.value,(item)=>{
    ImagePopup.open(item);
    ImagePopup.setEventListeners();
    console.log('1');

  });
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
  // AddCardPopup.close();
});//вынести в функцию, какой-то косяк с повторным добавлением
const UserPopup = new PopupWithForm('.popup_type_profile', ()=>{
  // const userInfo = new UserInfo({username: '.popup__input_type_name',userDescription:'.popup__input_type_description'});
});
// function addCard(evt) {
//   evt.preventDefault();
//   const card = new Card(imageName.value, imageLink.value);
//   const cardElement = card.generateCard();
//   cardContainer.prepend(cardElement);
//   closePopup(addCardPopup);
// }

buttonEdit.addEventListener('click', () => {
  // nameInput.value = profileName.textContent;
  // jobInput.value = profileDescription.textContent;

  ProfileValidation.enableValidation();
  UserPopup.open();
  console.log(UserPopup._inputValues);
});

// editFormSubmitButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileDescription.textContent = jobInput.value;
//   closePopup(editFormPopup);
// });

buttonAdd.addEventListener('click', () => {
  AddCardPopup.open();
  AddCardPopup.setEventListeners();
  AddCardValidation.enableValidation();

});

cardList.rendererItems();
