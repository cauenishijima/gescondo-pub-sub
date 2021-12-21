const redis = require("redis");

let publisher = redis.createClient({
  host: "localhost",
  port: 6379,
});

let condominium = {
  id: "32779a21-48c6-4e5c-a145-e6f2a5b2367c",
  code: 292,
  cnpj: "57729253000118",
  name: "CONDOMINIO EDIFICIO AMERICA",
  zip_code: "11045401",
  address: "AVENIDA BARTOLOMEU DE GUSMÃO",
  number: "73",
  city: "SANTOS",
  state: "SP",
  neighborhood: "",
  email: "rafael@sertaltda.com.br",
  phone: "1136734855",
  contact: "Rafael de Oliveira Peres Domingues",
  created_at: "2021-10-08T21:42:21.167Z",
  updated_at: "2021-10-08T21:42:21.167Z",
};

publisher.publish("gescondo:condominium", JSON.stringify(condominium), () => {
  process.exit(0);
});
