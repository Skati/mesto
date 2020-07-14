﻿function validate(input){
  console.log(input.validity);
}
function getErrorMessage(input){
  if (input.validity.valueMissing){
    return 'Вы пропустили это поле';
  }
}
function setError(){

}
function isUrl(input){
  const regex = new RegExp('(http|ftp|https)://[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?')
  return regex.test(input.value);
}

function enableValidation({formSelector,inputSelector,submitButtonSelector,inactiveButtonClass,inputErrorClass,errorClass}){
  const forms = document.querySelectorAll(formSelector);
  forms.forEach((form)=>{
    console.log(form);
    const inputs = form.querySelectorAll(inputSelector);
    form.addEventListener('input',(evt) =>{
      evt.preventDefault();
      if (form.checkValidity()){
        inputs.forEach(validate);
      }
      else {
        inputs.forEach(validate);
      }
    });
  });
  }




enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button_type_submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
