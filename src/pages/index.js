import Card from "../components/Card.js";
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
  imageName,
} from "../components/constants.js";

const ProfileValidation = new FormValidator(
  validateSettings,
  'form[name="profile"]'
);
ProfileValidation.enableValidation();
const AddCardValidation = new FormValidator(
  validateSettings,
  'form[name="add_card"]'
);
const imagePopup = new PopupWithImage(".popup_type_photo");
imagePopup.setEventListeners();

const userInfo = new UserInfo({
  userName: profileName,
  userDescription: profileDescription,
});

const userPopup = new PopupWithForm(".popup_type_profile", () => {
  userInfo.setUserInfo();
});

function createCard(name, link) {
  const card = new Card(name, link, (item) => {
    imagePopup.open(item);
  });
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

const AddCardPopup = new PopupWithForm(".popup_type_add-card", () => {
  createCard(imageName.value, imageLink.value);
  AddCardPopup.close();
});

AddCardPopup.setEventListeners();

buttonEdit.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  jobInput.value = info.info;
  userPopup.open();
  userPopup.setEventListeners();
});

editFormPopup.addEventListener("submit", () => {
  userInfo.setUserInfo();
  userPopup.close();
});

buttonAdd.addEventListener("click", () => {
  AddCardPopup.open();
  AddCardValidation.enableValidation();
});

cardList.rendererItems();
