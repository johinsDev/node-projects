"use strict";

async function valueOf(value) {
  if (typeof value === "function") {
    value = value();
  }

  return value;
}

class Repository {
  constructor(store) {
    this._store = store;
  }

  async has(key) {
    return (await this.get(key)) != null;
  }

  async get(key, defaultValue = null) {
    let value = await this._store.get(await this._itemKey(key));

    if (value == null) {
      return valueOf(defaultValue);
    }

    return value;
  }

  async many(keys) {
    const values = await this._store.many(keys);

    return values;
  }

  async pull(key, defaultValue = null) {
    const value = await this.get(key, defaultValue);

    await this.forget(key);

    return value;
  }

  async put(key, value, minutes = null) {
    if (value == null) {
      return;
    }

    minutes = this._getMinutes(minutes);

    if (minutes != null) {
      await this._store.put(await this._itemKey(key), value, minutes);
    }
  }

  async putMany(values, minutes) {
    minutes = this._getMinutes(minutes);

    if (minutes != null) {
      await this._store.putMany(values, minutes);
    }
  }

  async add(key, value, minutes) {
    minutes = this._getMinutes(minutes);

    if (minutes == null) {
      return false;
    }

    if (typeof this._store["add"] === "function") {
      return this._store.add(await this._itemKey(key), value, minutes);
    }

    if ((await this.get(key)) == null) {
      await this.put(key, value, minutes);
      return true;
    }

    return false;
  }

  increment(key, value = 1) {
    return this._store.increment(key, value);
  }

  decrement(key, value = 1) {
    return this._store.decrement(key, value);
  }

  async forever(key, value) {
    this._store.forever(await this._itemKey(key), value);
  }

  async remember(key, minutes, closure) {
    let value = await this.get(key);

    if (value != null) {
      return value;
    }

    value = await valueOf(closure);

    this.put(key, value, minutes);

    return value;
  }

  sear(key, closure) {
    return this.rememberForever(key, closure);
  }

  async rememberForever(key, closure) {
    let value = await this.get(key);

    if (value != null) {
      return value;
    }

    value = await valueOf(closure);

    await this.forever(key, value);

    return JSON.stringify(JSOn.parse(value));
  }

  async forget(key) {
    const success = await this._store.forget(await this._itemKey(key));

    return success;
  }

  async _itemKey(key) {
    return key;
  }

  getStore() {
    return this._store;
  }

  _getMinutes(duration) {
    if (duration instanceof Date) {
      duration = (duration.getTime() - Date.now()) / 1000 / 60;
    }

    return duration * 60 > 0 ? duration : null;
  }
}

module.exports = Repository;
