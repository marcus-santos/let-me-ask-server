# Let me Ask

Projeto desenvolvido durante um evento da **Rocketseat** para criação de uma plataforma de perguntas e respostas em tempo real.

## 🚀 Tecnologias

### Backend
- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Fastify** - Framework web rápido e eficiente
- **Zod** - Validação de schemas TypeScript-first
- **Drizzle ORM** - ORM TypeScript-first
- **PostgreSQL** - Banco de dados relacional
- **pgvector** - Extensão PostgreSQL para vetores

### Ferramentas de Desenvolvimento
- **Biome** - Linter e formatter
- **Docker** - Containerização
- **Drizzle Kit** - Migrações de banco de dados

## 🏗️ Arquitetura e Padrões

- **API REST** com validação de tipos usando Zod
- **Type-safe** com TypeScript em toda aplicação
- **Dependency Injection** através do Fastify
- **Environment Variables** para configuração
- **Docker Compose** para desenvolvimento local

## ⚙️ Configuração do Ambiente

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose
- Git

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd let-me-ask/server
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

4. **Suba o banco de dados**
```bash
docker compose up -d
```

5. **Execute as migrações**
```bash
npx drizzle-kit migrate
```

6. **Popule o banco (opcional)**
```bash
npm run db:seed
```

## 🏃‍♂️ Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

O servidor estará disponível em `http://localhost:3333`

## 📁 Estrutura do Projeto

```
src/
├── db/          # Configuração do banco e schemas
├── routes/      # Definição das rotas da API
├── env.ts       # Validação de variáveis de ambiente
└── server.ts    # Configuração do servidor
```

## 🐳 Docker

O projeto utiliza PostgreSQL com a extensão pgvector via Docker:

```bash
# Subir o banco
docker compose up -d

# Ver logs
docker compose logs -f

# Parar os containers
docker compose down
```

## 📝 Testando a API

Use o arquivo `client.http` para testar os endpoints da API diretamente no VS Code com a extensão REST Client.

---

**Desenvolvido com ❤️ durante evento da Rocketseat**
