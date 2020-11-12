export default class UserInfo{
  constructor({userName,userDescription,userAvatar}){
    this._userName = userName;
    this._userDescription = userDescription;
    this._userAvatar = userAvatar;
  }

  getUserInfo(){
    return {userName:this._userName.textContent, userDescription:this._userDescription.textContent,userAvatar:this._userAvatar.backgroundImage};
  }

  setUserInfo({userName,userDescription,userAvatar}){
    this._userName.textContent = userName;
    this._userDescription.textContent = userDescription;
    this._userAvatar.style.backgroundImage = `url(${userAvatar})`;

  }
}
