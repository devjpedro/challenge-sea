import axios from 'axios'

// obs: estava utilizando variaveis de ambiente, mas por conta de algum bug na hora da criação da .env direto pelo comando no terminal, optei por deixar fixo para evitar bugs na hora do teste da aplicação, e deixar mais fácil de configurar o ambiente do projeto.

export const api = axios.create({
  baseURL: 'http://localhost:3333', // para rodar local
  // baseURL: 'https://seachallengeapi.onrender.com', // para rodar em prod
})
