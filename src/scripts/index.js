import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
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
const userInfo = new UserInfo({
  userName : profileName,
  userDescription : profileDescription
});
console.log(userInfo);
const UserPopup = new PopupWithForm('.popup_type_profile', ()=>{
  userInfo.setUserInfo();
});

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
    // ImagePopup.setEventListeners();

  });
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
  // AddCardPopup.close();
});//вынести в функцию, какой-то косяк с повторным добавлением
AddCardPopup.setEventListeners();

buttonEdit.addEventListener('click', () => {
  ProfileValidation.enableValidation();
  nameInput.value   = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().info;
  UserPopup.open();
  UserPopup.setEventListeners();
});

editFormPopup.addEventListener('submit',()=>{
  userInfo.setUserInfo();
  UserPopup.close();
});

buttonAdd.addEventListener('click', () => {
  AddCardPopup.open();
  // AddCardPopup.setEventListeners();
  AddCardValidation.enableValidation();
});

cardList.rendererItems();
