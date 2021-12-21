import { prisma } from "./services/prisma";

type Resident = {
  user_id: string;
  kind_entity: string;
  document: string;
  name: string;
  email: string;
  cellphone: string;
  birthdate: Date | null;
}

const updateResident = async (channel: string, message: string) => {
  const resident = JSON.parse(message) as Resident;

  await prisma.moradores.updateMany({
    where: {
      cpf: resident.document.replace(/[^0-9]/g, '')
    },
    data: {
      nome: resident.name,
      cpf: resident.document.replace(/[^0-9]/g, ''),
      email: resident.email,
      celular: resident.cellphone.replace(/[^0-9]/g, ''),
    }
  })
}

export { updateResident }

