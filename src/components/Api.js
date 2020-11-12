export default class Api {
  constructor({address, token, groupId}) {
    this._token = token;
    this._groupId = groupId;
    this._address = address;
  }

  getCardList() {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => this.getResponse(res))
  }

  addCard(name, link) {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token
      },
      body: JSON.stringify({name: name, link: link})
    })
  }

  deleteCard(name, cardId) {
    return fetch(`${this._address}/${this._groupId}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then(res => this.getResponse)
  }

  getUserInfo() {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => this.getResponse(res))
  }

  setUserInfo(name, about) {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      method: 'Patch',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(res => this.getResponse(res))
  }

  changeAvatar(avatar){
    return fetch(`${this._address}/${this._groupId/users/me}/avatar`,{
      method:'Patch',
      headers:{
        authorization: this._token
      },
      body:JSON.stringify({
        avatar:avatar
      })
    })
      .then(res => this.getResponse(res))
  }

  likeCard(cardId){
    return fetch(`${this.address}/${this._groupId}/cards/likes/${cardId}`,{
      method:'Patch',
      headers:{
        authorization: this._token
      }
    })
      .then(res => this.getResponse(res))
  }

  deleteLikedCard(cardId){
    return fetch(`${this.address}/${this._groupId}/cards/likes/${cardId}`,{
      method:'DELETE',
      headers:{
        authorization: this._token
      }
    })
      .then(res => this.getResponse(res))
  }
  // getUserInfo(){
  //   return Promise.all([getCardList(), getUserInfo()]);
  // }
  getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }
}
