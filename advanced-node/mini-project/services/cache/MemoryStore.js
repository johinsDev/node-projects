"use strict";

class ObjectStore {
  constructor() {
    this._storage = {};
  }

  async get(key) {
    const cache = this._storage[key];

    if (cache === undefined) {
      return null;
    }

    if (Date.now() / 1000 >= cache.expiration) {
      this.forget(key);

      return null;
    }

    return JSON.parse(cache.value);
  }

  many(keys) {
    return Promise.all(keys.map((key) => this.get(key))).then((values) => {
      let mappedValues = {};

      for (let i = 0; i < keys.length; i++) {
        mappedValues[keys[i]] = values[i];
      }

      return mappedValues;
    });
  }

  put(key, value, minutes = 0) {
    return new Promise((resolve, reject) => {
      const expiration = Math.floor(Date.now() / 1000 + minutes * 60);

      this._storage[key] = {
        value: JSON.stringify(value),
        expiration: expiration,
      };

      resolve();
    });
  }

  putMany(object, minutes) {
    let promiseArray = [];

    for (let prop in object) {
      promiseArray.push(this.put(prop, object[prop], minutes));
    }

    return Promise.all(promiseArray).then((r) => {});
  }

  increment(key, value = 1) {
    return this._incrementOrDecrement(key, value, (currentValue) => {
      return currentValue + value;
    });
  }

  decrement(key, value = 1) {
    return this._incrementOrDecrement(key, value, (currentValue) => {
      return currentValue - value;
    });
  }

  _incrementOrDecrement(key, value, callback) {
    return new Promise((resolve, reject) => {
      const cache = this._storage[key];

      if (cache === undefined) {
        resolve(false);
        return;
      }

      const currentValue = parseInt(cache.value);

      if (isNaN(currentValue)) {
        resolve(false);
        return;
      }

      const newValue = callback(currentValue);

      this._storage[key].value = newValue;

      resolve(newValue);
    });
  }

  forever(key, value) {
    return this.put(key, value, 5256000);
  }

  forget(key) {
    delete this._storage[key];
    return true;
  }

  flush() {
    return new Promise((resolve, reject) => {
      this._storage = {};
      resolve();
    });
  }

  getPrefix() {
    return "";
  }
}

module.exports = ObjectStore;
