import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import {
  initialCards,
  validateSettings,
  buttonEdit,
  editFormPopup,
  profileName,
  profileDescription,
  nameInput,
  jobInput,
  cardListContainer,
  buttonAdd,
  imageLink,
  imageName
} from '../components/constants.js';


const ProfileValidation = new FormValidator(validateSettings, 'form[name="profile"]');
const AddCardValidation = new FormValidator(validateSettings, 'form[name="add_card"]');
const ImagePopup = new PopupWithImage('.popup_type_photo');
const userInfo = new UserInfo({
  userName : profileName,
  userDescription : profileDescription
});

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
  });
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
});

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
  AddCardValidation.enableValidation();
});

cardList.rendererItems();
