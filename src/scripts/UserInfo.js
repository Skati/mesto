﻿export default class UserInfo{
  constructor({userName,userInfo}){
    this._userName = userName;
    this._userInfo = userInfo;
  }

  getUserInfo(){
    return {name:this._userName, info: this._userInfo}
  }

  setUserInfo(){

  }
}
