const mongoose = require("mongoose");
const Cache = require("./cache/cache");

let key;

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (options = {}) {
  this.useCache = true;

  this.expiration = options.expiration || 1;

  return this;
};

mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    return exec.apply(this, arguments);
  }

  key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name,
    })
  );

  const cachedValue = await Cache.get(key);

  if (cachedValue) {
    return !Array.isArray(cachedValue)
      ? new this.model(cachedValue)
      : cachedValue.map((d) => new this.model(d));
  }

  const data = await exec.apply(this, arguments);

  await Cache.put(key, data, this.expiration);

  return data;
};
