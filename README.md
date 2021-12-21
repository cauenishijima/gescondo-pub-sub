# Instalação

- Antes de efetuarmos a transpilação do código TypeScript para JavaScript e instalar nosso projeto como serviço do windows, precisamos configurar o endereço do nosso Redis e do nosso banco de dados, essas configurações ficam no arquivo **.env**. Geralmente o endereço do banco de dados mysql será o localhost mesmo, e o do Redis será no cloud já que terá que ser acessado pelo nosso sistema web

- Buildar o projeto, para converter os arquivos TS em JS, após isso o código estará disponível na pasta **./dist**

```bash
  node build
```

- Agora com o projeto traspilado é necessário instalar-lo no sistema como um serviço, para isso execute o comando:

```bash
  node ./dist/install-service.ts
```

### Observação
