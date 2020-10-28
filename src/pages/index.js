﻿import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";
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
} from "../utils/utils.js";

const profileValidation = new FormValidator(
  validateSettings,
  'form[name="profile"]'
);

const addCardValidation = new FormValidator(
  validateSettings,
  'form[name="add_card"]'
);

profileValidation.enableValidation();
addCardValidation.enableValidation();

const imagePopup = new PopupWithImage(".popup_type_photo");

const userInfo = new UserInfo({
  userName: profileName,
  userDescription: profileDescription,
});

const userPopup = new PopupWithForm(".popup_type_profile", () => {
  userInfo.setUserInfo({
    name: nameInput,
    job: jobInput
  });
});

const addCardPopup = new PopupWithForm(".popup_type_add-card", () => {
  createCard(imageName.value, imageLink.value);
  addCardPopup.close();
});

imagePopup.setEventListeners();
addCardPopup.setEventListeners();
userPopup.setEventListeners();

function createCard(name, link) {
  const card = new Card(name, link, (item) => {
    imagePopup.open(item);
  }, '#card-template');
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      createCard(item.name, item.link);
    },
  },
  cardListContainer
);

buttonEdit.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  jobInput.value = info.info;
  userPopup.open();
  profileValidation.resetForm();

});

editFormPopup.addEventListener("submit", () => {
  // userInfo.setUserInfo({name:nameInput,job:jobInput});
  userPopup.close();
});

buttonAdd.addEventListener("click", () => {
  addCardPopup.open();
  addCardValidation.resetForm();
  addCardValidation.disableButtonState();
});

cardList.rendererItems();
