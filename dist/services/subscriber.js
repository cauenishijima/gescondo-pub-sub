"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscriber = void 0;

require("dotenv/config");

var _redis = _interopRequireDefault(require("redis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const subscriber = _redis.default.createClient({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT)
});

exports.subscriber = subscriber;