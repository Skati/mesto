﻿const photoView = document.querySelector('.popup__image');
const photoDescription = document.querySelector('.popup__description');
const photoPopup = document.querySelector('.popup_type_photo');

function showCard(name, link) {
  photoView.src = link;
  photoDescription.textContent = name;
  photoDescription.alt = name;
  openPopup(photoPopup);
}
//popups
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
export {showCard,openPopup,closePopup,handleOverlayCrossButton,photoPopup};
