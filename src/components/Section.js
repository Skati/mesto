﻿export default class Section{
  constructor({items, renderer},container){
    this._initialArray = items;
    this._renderer = renderer;
    this._container = container;//изменить на селектор
  }
  rendererItems(){
    this._initialArray.forEach(item => this._renderer(item));
  }

  addItem(element){
    this._container.prepend(element);
  }
}
