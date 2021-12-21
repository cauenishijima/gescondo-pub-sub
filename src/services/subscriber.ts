import "dotenv/config";
import redis from "redis";

const subscriber = redis.createClient({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
});

export { subscriber }