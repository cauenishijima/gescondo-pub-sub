import { prisma } from "./services/prisma";

type Condominium = {
  id: string,
  code: string,
  cnpj: string,
  name: string,
  zip_code: string,
  address: string,
  number: string,
  city: string,
  state: string,
  email: string,
  phone: string,
  contact: string,
  neighborhood: string,
  created_at: string,
  updated_at: string,
}

const updateCondominium = async (channel: string, message: string) => {
  const condominium = JSON.parse(message) as Condominium;

  const predio = await prisma.predios.findFirst({
    where: {
      cnpj: condominium.cnpj.replace(/[^0-9]/g, ''),
    }
  })

  await prisma.predios.update({
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
      telefone: condominium.phone,
    }
  })
}

export { updateCondominium }

