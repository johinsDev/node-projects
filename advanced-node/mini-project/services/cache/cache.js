"use strict";

const config = require("../../config/cache");

const MemoryStore = require("./MemoryStore");
const RedisStore = require("./RedisStore");
const Repository = require("./Repository");

const cacheMethods = [
  "get",
  "many",
  "put",
  "putMany",
  "increment",
  "decrement",
  "forever",
  "forget",
  "flush",
  "remember",
];

// @TODO Create a cache manager
// Manger should permilt change store or extends with custom store
// Reposityory for common use of stores
// Interface for each store
// Tags cache for tag cache
class CacheManger {
  constructor() {
    this._stores = [];
  }

  store(name = null) {
    name = name || this.getDefaultDriver();
    this._stores[name] = this._get(name);
    return this._stores[name];
  }

  _get(name) {
    return this._stores[name] != null
      ? this._stores[name]
      : this._resolve(name);
  }

  _getConfig(name) {
    return config.stores && config.stores[name];
  }

  _resolve(name) {
    const config = this._getConfig(name);

    if (config == null) {
      throw new Error(
        `InvalidArgumentException: Cache store [${name}] is not defined.`
      );
    }

    const driveName =
      config["driver"].charAt(0).toUpperCase() +
      config["driver"].substr(1).toLowerCase();

    const driverMethod = "_create" + driveName + "Driver";

    if (typeof this[driverMethod] === "function") {
      return this[driverMethod](config);
    } else {
      throw new Error(
        `InvalidArgumentException: Driver [${config["driver"]}] is not supported.`
      );
    }
  }

  _createMemoryDriver(config) {
    return new Repository(new MemoryStore(config));
  }

  _createRedisDriver(config) {
    const connection = config["connection"] ? config["connection"] : "local";
    return new Repository(new RedisStore(config, connection));
  }

  getDefaultDriver() {
    return config.default;
  }
}

cacheMethods.forEach((method) => {
  CacheManger.prototype[method] = function redisConnectionProxyFn(...args) {
    return this.store()[method](...args);
  };
});

module.exports = new CacheManger();
