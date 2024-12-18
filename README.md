
# Desafio Front-end - Sea Tecnologia

Uma aplicação completa para cadastro, listagem, edição e exclusão de funcionários, desenvolvida com foco em desempenho e usabilidade.

## 🔧 Stack Utilizada

**Front-end:** React, Redux, Ant Design, Styled-Components, React Hook Form, Zod, Axios e React Query ()

**Back-end:** Node, Fastify, Prisma e MongoDB

A utilização do React Query foi para lidar com o estado das requisições de forma que fique mais performático, aproveitando o sistema de cache da própria biblioteca.

## 🚀 Deploy da aplicação

 - [Front-end](https://seachallenge.netlify.app)
 - [Back-end](https://seachallengeapi.onrender.com/employees)

## 🛠️ Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env


#### Back-end

```bash
DATABASE_URL="mongodb+srv://devjpedro:seachallengebackjp@sea-challenge.nfbqi.mongodb.net/sea-challenge?retryWrites=true&w=majority&appName=sea-challenge"
```

#### Front-end

```bash
VITE_API_BASE_URL=http://localhost:3333
```

## 💻 Rodando localmente

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
echo DATABASE_URL="mongodb+srv://devjpedro:seachallengebackjp@sea-challenge.nfbqi.mongodb.net/sea-challenge?retryWrites=true&w=majority&appName=sea-challenge" > .env
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

#### Abra um novo terminal no diretório raiz do projeto.

Entre no diretório do frontend do projeto

```bash
cd frontend
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
