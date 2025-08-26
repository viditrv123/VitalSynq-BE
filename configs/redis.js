import Redis from "ioredis";

class RedisClient {
  static instance = null;

  constructor() {
    if (RedisClient.instance) {
      return RedisClient.instance;
    }

    this.redis = new Redis({
      host: "redis",
      port: 6379,
    });
    RedisClient.instance = this;
  }

  getClient() {
    return this.redis;
  }
}

export default RedisClient;
