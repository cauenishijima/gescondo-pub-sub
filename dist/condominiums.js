"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCondominium = void 0;

var _prisma = require("./services/prisma");

const updateCondominium = async (channel, message) => {
  const condominium = JSON.parse(message);
  const predio = await _prisma.prisma.predios.findFirst({
    where: {
      cnpj: condominium.cnpj.replace(/[^0-9]/g, '')
    }
  });
  await _prisma.prisma.predios.update({
    where: {
      id: predio.id
    },
    data: {
      nome: condominium.name,
      cep: condominium.zip_code.replace(/[^0-9]/g, ''),
      email: condominium.email,
      endereco: condominium.address,
      contato: condominium.contact,
      municipio: condominium.city,
      numero: condominium.number,
      uf: condominium.state,
      telefone: condominium.phone
    }
  });
};

exports.updateCondominium = updateCondominium;