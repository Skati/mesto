import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';

// import {
//   openPopup,
//   closePopup,
//   handleOverlayCrossButton,
//   photoPopup
// } from './utils.js';
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

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    },
  },
  cardListContainer
);

// const imagePopup = new PopupWithImage('.popup_type_photo');
// imagePopup.open();
// function addCard(evt) {
//   evt.preventDefault();
//   const card = new Card(imageName.value, imageLink.value);
//   const cardElement = card.generateCard();
//   cardContainer.prepend(cardElement);
//   closePopup(addCardPopup);
// }

// buttonEdit.addEventListener('click', () => {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileDescription.textContent;
//   ProfileValidation.enableValidation();
//   openPopup(editFormPopup);
// });

// editFormSubmitButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileDescription.textContent = jobInput.value;
//   closePopup(editFormPopup);
// });

// editFormPopup.addEventListener('click', handleOverlayCrossButton);

// buttonAdd.addEventListener('click', () => {
//   imageLink.value = '';
//   imageName.value = '';
//   openPopup(addCardPopup);
//   AddCardValidation.enableValidation();
// });

// addCardPopup.addEventListener('click', handleOverlayCrossButton);

// submitButtonAddCard.addEventListener('click', addCard);

// photoPopup.addEventListener('click', handleOverlayCrossButton);

cardList.rendererItems();
