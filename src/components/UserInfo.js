﻿export default class UserInfo{
  constructor({userName,userDescription}){
    this._userName = userName;
    this._userDescription = userDescription;
  }

  getUserInfo(){
    return {name:this._userName.textContent, info: this._userDescription.textContent};
  }

  setUserInfo({name,job}){
    this._userName.textContent = name.value;
    this._userDescription.textContent = job.value;
  }
}
