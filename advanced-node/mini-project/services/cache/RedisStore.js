"use strict";

const Redis = require("ioredis");

class RedisStore {
  constructor(config) {
    this._redis = new Redis(config);
    this.setPrefix(config.prefix);
    this.proxyConnectionEvents();
  }

  async get(key) {
    return JSON.parse(await this.getRedis().get(this._prefix + key));
  }

  async put(key, value, minutes = 0) {
    const prefixedKey = this._prefix + key;

    let expiration = Math.floor(minutes * 60);

    const serializedValue = JSON.stringify(value);

    if (isNaN(expiration) || expiration < 1) {
      expiration = 1;
    }

    await this.getRedis().set(prefixedKey, serializedValue, "EX", expiration);
  }

  async forget(key) {
    await this.getRedis().del(this._prefix + key);

    return true;
  }

  proxyConnectionEvents() {
    this._redis.on("connect", () => console.log("CONNECT"));

    this._redis.on("ready", () => {
      console.log("READY");
    });
  }

  getRedis() {
    return this._redis;
  }

  getPrefix() {
    return this._prefix;
  }

  setPrefix(prefix) {
    this._prefix = !!prefix ? prefix + ":" : "";
  }
}

module.exports = RedisStore;
