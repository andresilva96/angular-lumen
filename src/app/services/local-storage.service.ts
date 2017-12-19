import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  set(key, value) {
    return window.localStorage[key] = value;
  }

  get(key, defaultValue = null) {
    return window.localStorage[key] || defaultValue;
  }

  setObject(key, value: Object) {
      return window.localStorage[key] = JSON.stringify(value);

  }

  getObject(key) {
    return JSON.parse(window.localStorage[key]);
  }

  remove(key) {
    return window.localStorage.removeItem(key);
  }
}
