"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateResident = void 0;

var _prisma = require("./services/prisma");

const updateResident = async (channel, message) => {
  const resident = JSON.parse(message);
  await _prisma.prisma.moradores.updateMany({
    where: {
      cpf: resident.document.replace(/[^0-9]/g, '')
    },
    data: {
      nome: resident.name,
      cpf: resident.document.replace(/[^0-9]/g, ''),
      email: resident.email,
      celular: resident.cellphone.replace(/[^0-9]/g, '')
    }
  });
};

exports.updateResident = updateResident;