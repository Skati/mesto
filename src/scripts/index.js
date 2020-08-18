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
const AddCardPopup = new PopupWithForm('.popup_type_add-card', ()=>{
  // const card = new Card(item.name, item.link,(item)=>{
  //   // ImagePopup.open(item);
  //   // ImagePopup.setEventListeners();
  //   console.log(item);
  // });
  console.log(AddCardPopup._getInputValues);

});
const UserPopup = new PopupWithForm('.popup_type_profile', ()=>{
  // const card = new Card(item.name, item.link,(item)=>{
  //   // ImagePopup.open(item);
  //   // ImagePopup.setEventListeners();
  //   console.log(item);
  // });

});

AddCardPopup.setEventListeners();
UserPopup.setEventListeners();

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
  AddCardValidation.enableValidation();
});

cardList.rendererItems();
