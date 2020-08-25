﻿export default class UserInfo{
  constructor({userName,userDescription}){
    this._userName = userName;
    this._userDescription = userDescription;
  }

  getUserInfo(){
    console.log(this._userName);
    return {name:this._userName.textContent, info: this._userDescription.textContent};
    // document.querySelector('.popup__input_type_name').value = this._userName.textContent;
    // document.querySelector('.popup__input_type_decription').value = this._userDescription.textContent;

  }

  setUserInfo(){
    this._userName.textContent = document.querySelector('.popup__input_type_name').value;
    this._userDescription.textContent = document.querySelector('.popup__input_type_description').value;
    console.log(this._userName.textContent);
  }
}
