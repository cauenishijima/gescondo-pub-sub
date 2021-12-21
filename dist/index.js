"use strict";

var _residents = require("./residents");

var _condominiums = require("./condominiums");

var _subscriber = require("./services/subscriber");

_subscriber.subscriber.on("message", (channel, message) => {
  switch (channel) {
    case 'gescondo:condominium':
      (0, _condominiums.updateCondominium)(channel, message);
      break;

    case 'gescondo:resident':
      (0, _residents.updateResident)(channel, message);
      break;

    default:
      break;
  }
});

_subscriber.subscriber.subscribe(["gescondo:condominium", "gescondo:resident"], () => {
  console.log("Listening channels " + new Date());
});