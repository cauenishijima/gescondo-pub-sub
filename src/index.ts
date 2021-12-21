import { updateResident } from "./residents";
import { updateCondominium } from "./condominiums";
import { subscriber } from "./services/subscriber";

subscriber.on("message", (channel, message) => {
  switch (channel) {
    case 'gescondo:condominium':
      updateCondominium(channel, message);
      break;

    case 'gescondo:resident':
      updateResident(channel, message);
      break;

    default:
      break;
  }
});

subscriber.subscribe(["gescondo:condominium", "gescondo:resident"], () => {
  console.log("Listening channels " + new Date());
});