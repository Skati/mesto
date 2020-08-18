﻿export default class UserInfo{
  constructor({userName,userDescription}){
    this._userName = userName;
    this._userDescription = userDescription;
  }

  getUserInfo(){
    return {name:this._userName, info: this._userDescription}//хз косяк
  }

  setUserInfo(){

  }
}
