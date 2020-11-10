  export default class Api{
    constructor({ address, token, groupId }) {
      this._token = token;
      this._groupId = groupId;
      this._address = address;
    }

    getUserInfo() {
      return fetch(`${this._address}/${this._groupId}/users/me`, {
        headers: {
          authorization: this._token
        }
      })
        .then(res => this._getResponse(res))
    }

    getCardList() {
      return fetch(`${this._address}/${this._groupId}/cards`, {
        headers: {
          authorization: this._token
        }
      })
        .then(res => this._getResponse(res))
    }

    _getResponse(res) {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    }
  }
