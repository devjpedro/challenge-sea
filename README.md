
# Desafio Front-end - Sea Tecnologia

A aplicação se trata de um sistema de gerenciamento de funcionários. O sistema lida com a listagem de funcionários, cadastro, edição e remoção dos mesmos.

## Stack utilizada

**Front-end:** React, Redux, Ant Design, Styled-Components, React Hook Form, Zod, Axios e React Query

**Back-end:** Node, Fastify, Prisma e MongoDB


## Rodando localmente

### Back-end

Clone o projeto

```bash
git clone https://github.com/devjpedro/challenge-sea
```

Entre no diretório do projeto

```bash
cd challenge-sea/backend
```

Instale as dependências

```bash
npm install
```

Crie o arquivo .env

```bash
echo DATABASE_URL=mongodb+srv://devjpedro:seachallengebackjp@sea-challenge.nfbqi.mongodb.net/sea-challenge?retryWrites=true&w=majority&appName=sea-challenge > .env
```

Gere o schema do Prisma

```bash
npx prisma generate
```

Inicie o servidor

```bash
npm run start
```


### Front-end

Entre no diretório do projeto

```bash
cd ../frontend
```

Instale as dependências

```bash
npm install
```

Crie o arquivo .env

```bash
echo VITE_API_BASE_URL=http://localhost:3333 > .env
```

Rode o projeto

```bash
npm run dev
```


## Deploy da aplicação

 - [Front-end](https://seachallenge.netlify.app)
 - [Back-end](https://seachallengeapi.onrender.com/employees)
