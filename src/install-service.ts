import { Service } from 'node-windows';

let svc = new Service({
  name: "Gescondo PubSub application as Windows Service",
  description: "Gescondo PubSub application as Windows Service",
  script: "./index.js"
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
  svc.start();
});

svc.install();