export default class UserInfo{
  constructor({userName,userDescription,userAvatar}){
    this._userName = userName;
    this._userDescription = userDescription;
    this._userAvatar = userAvatar;
  }

  getUserInfo(){
    return {name:this._userName.textContent, info: this._userDescription.textContent,avatar:this._userAvatar};
  }

  setUserInfo({name,job}){
    this._userName.textContent = name.value;
    this._userDescription.textContent = job.value;
    this._userAvatar.style.backgroundImage = `url(${avatar})`;

  }
}
