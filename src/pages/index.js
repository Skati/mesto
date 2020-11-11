import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
// import "./index.css";
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
  apiConfig,
  profileAvatar
} from "../utils/constants.js";

const api = new Api(apiConfig);
const userInfo = new UserInfo({
  userName: profileName,
  userDescription: profileDescription,
  userAvatar:profileAvatar
});
const userPopup = new PopupWithForm(".popup_type_profile", () => {
  userInfo.setUserInfo({
    name: nameInput,
    job: jobInput
  });
});
const imagePopup = new PopupWithImage(".popup_type_photo");
const addCardPopup = new PopupWithForm(".popup_type_add-card", () => {
  createCard(imageName.value, imageLink.value);
  addCardPopup.close();
});
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      createCard(item.name, item.link);
    },
  },
  cardListContainer
);
// Promise.all([api.getCardList(), api.getUserInfo()])
//   .then(([cards, userData]) => {
//       userInfo.setUserInfo({
//       userName: userData.name,
//       userDescription: userData.about,
//       userAvatar: userData.avatar
//     });
//
//     cardList.rendererItems(cards.reverse());
//   })
//   .catch(err => console.log(`Ошибка загрузки данных: ${err}`))

const profileValidation = new FormValidator(
  validateSettings,
  'form[name="profile"]'
);

const addCardValidation = new FormValidator(
  validateSettings,'form[name="add_card"]'
);
profileValidation.enableValidation();
addCardValidation.enableValidation();
imagePopup.setEventListeners();
addCardPopup.setEventListeners();
userPopup.setEventListeners();

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

function createCard(name, link) {
  const card = new Card(name, link, (item) => {
    imagePopup.open(item);
  }, '#card-template');
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

cardList.rendererItems();
