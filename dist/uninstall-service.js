"use strict";

var _nodeWindows = require("node-windows");

let svc = new _nodeWindows.Service({
  name: "Gescondo PubSub application as Windows Service",
  description: "Gescondo PubSub application as Windows Service",
  script: "./index.js"
}); // Listen for the "uninstall" event so we know when it's done.

svc.on('uninstall', function () {
  console.log('Uninstall complete.');
  console.log('The service exists: ', svc.exists);
}); // Uninstall the service.

svc.uninstall();