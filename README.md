

# Projeto 2 - Módulo 4 - Backend - Blue Edtech

## Api Twitter

Nesse projeto, utilizamos as seguintes tecnolgias:

* NestJs - framework para back-end que auxilia no desenvolvimento de aplicações eficientes.
* Prisma - biblioteca para facilitar nossas consultas ao banco e no gerenciamento de tabelas.
* Jwt - sistema de transferência de dados que pode ser enviado por URL, POST ou em cabeçalho  HTTP (header) de maneira segura.
* Sweeger - framework de uso online para testar endpoints e auxiliar na elaboração da documentação de projetos.
* PostgreSql - banco de dados utilizado no projeto para armazenar nossos dados.

Primeiramente devemos instalar as dependências do NestJs com o seguinte comando no terminal do VSCODE:

``npm i -g @nestjs/cli``

Após, iremos criar nosso projeto utilizando o comando:

``nest new nome_do_projeto``

Em nosso caso: ``nest new Projeto2-Nestjs-Prisma-Sweeger`` escolhemos a opção de estruturas NPM.

Após a criação do projeto, teremos uma estrutura parecida com a da foto abaixo:

![alt projeto_criado](https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/William/img/cria%C3%A7%C3%A3o%20projeto.png?raw=true)

Devemos instalar o Prisma também, com o comando:

``npm i prisma --save-dev``

Iniciar o Prisma, com o comando:

``npx prisma init``

Criando assim a pasta Prisma e dentro dessa, o schema.prisma, onde iremos estruturar todo nosso modelo do banco de dados e o arquivo .env onde iremos inserir os dados de acesso ao nosso banco de dados no PostgreSql, conforme abaixo:

``schema.prisma`` estruturado:

```javascript
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" //tipo de banco de dados utilizado
  url      = env("DATABASE_URL") //busca do banco de dados através do .env
}

model Usuario {
  id              Int   @default(autoincrement()) @id //id gerado automaticamente
  nome            String //entrada de dados STRING
  imagem          String //entrada de dados STRING
  bio             String //entrada de dados STRING
  nascimento      String //entrada de dados STRING
  seguidores      Seguidores [] //lista de seguidores
  seguindo        Seguindo [] //lista de seguindo
  criado_em       DateTime @default(now()) @map(name: "created_at") //data gerada automaticamente
  modificado_em   DateTime @updatedAt @map(name: "updated_at") //data gerada automaticamente
  tweet           Tweet[] //lista de tweets
}

model Seguidores {
  id              Int @default(autoincrement()) @id //id gerado automaticamente
  idseguidor      Int //entrada de dados NUMBER
  usuarios        Usuario [] //lista de usuarios
  usuarioid       Int //entrada de dados NUMBER
}

model Seguindo {
  id              Int   @default(autoincrement()) @id //id gerado automaticamente
  idseguindo      Int //entrada de dados NUMBER
  usuarios        Usuario [] //lista de usuarios
  usuarioid       Int //entrada de dados NUMBER
}

model Tweet {
  id              Int   @default(autoincrement()) @id //id gerado automaticamente
  texto           String @db.VarChar(280) //entrada de dados STRING máximo 280 caracteres
  emoji           String //entrada de dados STRING
  data_postagem   DateTime @default(now()) @map(name: "created_at") //data gerada automaticamente
  curtidas        Int //entrada de dados NUMBER
  usuarios        Usuario [] //lista de usuarios
  usuarioid       Int //entrada de dados NUMBER
}
```

![alt .env](https://raw.githubusercontent.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/William/img/config%20env.png)

Devemos agora configurar o arquivo .env com os dados de acesso ao PostgreSql e o nome do banco de dados do projeto.

Após essa configuração, iremos criar nossos Resources, que serão os seguintes:

* Usuários - comando: ``nest g resource usuarios`` utilizando transport layer com REST API e gerando o CRUD para nossa aplicação.
* Seguidores - comando: ``nest g resource seguidores`` utilizando transport layer com REST API e gerando o CRUD para nossa aplicação.
* Seguindo - comando: ``nest g resource seguindo`` utilizando transport layer com REST API e gerando o CRUD para nossa aplicação.
* Tweets - comando: ``nest g resource tweets`` utilizando transport layer com REST API e gerando o CRUD para nossa aplicação.

Após criarmos nossos Resources, iremos efetivamente criar essa estrutura em nossa banco de dados no PostgreSql com os seguintes comandos:

* ``npx prisma generate`` para a criação do nosso schema. Lembrando que toda alteração feita no arquivo schema, deverá ser executado esse comando para a atualização do mesmo.
* ``npx prisma db push`` criando assim nosso banco de dados no PostgreSql, esse comando também deve ser executado toda vez que o arquivo schema sofrer alterações.

Vamos criar uma pasta ``prisma`` dentro da pasta ``src`` onde iremos colocar nossos arquivos ``prisma.module.ts e prisma.service.ts`` com os seguintes comandos:

* ``nest g module prisma``
* ``nest g service prisma``

Criar uma pasta chamada ``lib`` e dentro dessa, um arquivo chamado ``prisma.ts`` com o seguinte código:

```javascript
/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;
```

Agora iremos estruturar nossos ``create.dto`` de cada resource, antes, devemos instalar o CLASS VALIDATOR, o qual utilizamos para validar as entradas de dados. Comando: ``npm i --save class-validator class-transformer``.

Após a alteração no ``create-nome_resource.dto.ts``, ficando parecido como imagem abaixo:

#### ![alt create_dto](https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/William/img/create%20dto.png?raw=true)

Após estruturar todos os resources, agora é hora de estruturar nossos ``.services``, responsáveis por buscar nossos requisições do CRUD nos arquivos ``controllers``, ficando parecido como imagem abaixo:

![alt crud_service](https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/William/img/crud%20service.png?raw=true)Vamos criar a pasta ``auth`` dentro de ``src`` onde iremos criar os seguintes arquivos: ``auth.module , auth.service , jwt.strategy`` responsáveis por tratar a entrada de dados de login, gerar o token para autorização de login.

Após criar  a pasta ``auth`` execute os seguintes comandos: 

* ``npm install --save @nestjs/passport passport passport-local`` instalar o passaporte local.
* ``npm install passport-jwt`` instalar o passaporte-jwt.
* ``nest g module auth`` criar o arquivo auth.module.
* ``nest g service auth`` criar o arquivo auth.service.

Agora iremos instalar Jwt para realização nossa autenticação com token, com o comando: ``npm install @nestjs/jwt``

Criar dentro da pasta ``auth`` uma pasta ``dto`` e dentro dessa pasta um arquivo ``login.dto.ts`` o qual irá receber os dados pra realizar o login com o token que será gerado quando em execução. Lembrando que a estrutura desse arquivo deve ser igual ao ``create.nome_arquivo.dto.ts``.

O arquivo ``jwt.strategy.ts`` deverá ficar parecido com a imagem abaixo:

![alt jwt-strategy](https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/William/img/jwt-strategy.png?raw=true)

Obs> onde é chamado o ``secretOrKey: process.env.SECRETKEY`` deve ser cadastrado no ``.env`` uma palavra-chave, no nosso caso ``SECRETKEY = "blue2021"``.

Para testes utilizamos nesse projeto uma extensão do próprio VsCode, a ``Rest Client`` sendo muito funcional e prática.

![alt rest_client](https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/William/img/rest%20client.png?raw=true)Foram criado os seguintes arquivos de testes: ``usuarios.http`` , ``auth.htpp`` , ``tweets.http``, ``seguidores.http``, ``seguindo.http``

Abaixo como realizar a autenticação de login, sendo necessário o cadastro de ao menos 1 usuário previamente.

``cadastrando um novo usuário``:

![alt novo_usuario](https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/William/img/novo%20usuario.png?raw=true)

Após criar o ``usuário`` entrar no arquivo ``auth.http`` , se tentarmos listar os usuários, não será autorizado por falta do token, conforme imagem:

![alt nao_autorizado](https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/William/img/nao%20autorizado.png?raw=true)Para conseguir logar, deve ser gerado um token, para isso, utilizar a opção ``POST`` e como parâmetro passar o ``nome de usuário já cadastrado`` , exemplo aqui ``Usuário Teste`` e clicar em ``send request``

![alt token_criado](https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/William/img/token%20criado.png?raw=true)

Com o token já criado, basta colar o mesmo logo após ``Bearer`` e clicar em ``send request`` , deverá ser mostrado a seguinte tela:

![alt logado](https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/William/img/logado.png?raw=true)Estrutura e dados esperados:

```javascript
# USUARIOS
{
    "nome":"String",
    "imagem":"String",
    "bio":"String",
    "nascimento":"String"
}
```

```javascript
# AUTH
{
    "nome":"String"
}
```

```javascript
# SEGUIDORES
{
    "idseguidor": Number,
    "usuarioid": Number
}
```

```javascript
# SEGUINDO
{
    "idseguindo": Number,
    "usuarioid": Number
}
```

```javascript
# TWEETS
{
    "texto":"String",
    "emoji":"String",
    "curtidas": Number,
    "usuarioid": Number
}
```

Para todos Resources foram criado as seguintes rotas: ``GET`` ``POST`` ``PATCH`` ``DELETE`` abaixo uma relação das mesmas:

| ROTAS      | USUÁRIOS         | AUTH      | SEGUIDORES         | SEGUINDO         | TWEETS         | ESPERADO           |
| ---------- | ---------------- | --------- | ------------------ | ---------------- | -------------- | ------------------ |
| ``GET``    | ``/usuarios``    | ``/auth`` | ``/seguidores``    | ``/seguindo``    | ``/tweets``    | ``Lista todos``    |
| ``GET``    | ``/usuarios/id`` | --------- | ``/seguidores/id`` | ``/seguindo/id`` | ``/tweets/id`` | ``Lista um item``  |
| ``POST``   | ``/usuarios``    | ``/auth`` | ``/seguidores``    | ``/seguindo``    | ``/tweets``    | ``Cadastra novo``  |
| ``PATCH``  | ``/usuarios/id`` | --------- | ``/seguidores/id`` | ``/seguindo/id`` | ``/tweets/id`` | ``Altera um item`` |
| ``DELETE`` | ``/usuarios/id`` | --------- | ``/seguidores/id`` | ``/seguindo/id`` | ``/tweets/id`` | ``Exclui um item`` |

Agora iremos instalar o Swagger, um framework muito prático e rápido para testar os endpoints no navegador.

O comando para a instalação é: ``npm install --save @nestjs/swagger swagger-ui-express``

Após a instalação iremos realizar alguma alterações no arquivo ``main.ts`` afim de quando executarmos nossa API ser chamado o Swagger automaticamente e para personalizar nossa API, o arquivo ficará como a seguir:

![alt main] (https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/main/img/arquivo%20main.png?raw=true)

No arquivo ``create.dto.ts`` de cada resource, iremos inserir o ``decorator @ApiProperty()`` para que seja automaticamente gerado um modelo no formato .json como schema no Swagger quando rodarmos a nossa aplicação, assim facilitando ao usuário saber quais campos e que tipo de dados deve digitar para poder executar os endpoints, ficando como segue:

![alt schema_swagger] (https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/main/img/schema%20swagger.png?raw=true)

Agora iremos inicializar nossa aplicação e acessar o endereço ``localhost:3000/api`` sendo mostrado essa tela inicial:

![alt API_Swagger] (https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/main/img/Swagger.png?raw=true)

Nesse endereço se encontram todos os resources separados por título e dentro de cada aba contém os endpoints ``GET`` ``POST`` ``PATCH`` ``DELETE``

Cada um tendo os seguintes endpoints: (exemplo utilizado rota USUARIOS)

* ``GET`` Retornando todos os cadastros;

  ![alt GET_usuarios] (https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/main/img/get%20usuarios.png?raw=true)

* ``GET / ID`` Retornando um cadastro específico por ID;

  ![alt GET_ID_usuarios] (https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/main/img/get%20ID%20usuarios.png?raw=true)

* ``POST`` Realizar um novo cadastro;

  ![alt POST_usuarios] (https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/main/img/post%20usuarios.png?raw=true)

* ``PATCH`` Alterar dados de um cadastro específico por ID;

  ![alt PATCH_usuarios] (https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/main/img/Patch%20usuarios.png?raw=true)

  

* ``DELETE`` Excluir um cadastro específico por ID:

  ![alt DEL_usuarios] (https://github.com/wsr2k2/Projeto2-Nestjs-Prisma-Sweeger/blob/main/img/del%20usuarios.png?raw=true)

