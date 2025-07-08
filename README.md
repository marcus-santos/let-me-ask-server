# Let me Ask

Real-time Q&A platform developed during a **Rocketseat** event, enabling interactive question and answer sessions.

## 🚀 Technologies

### Backend
- **Node.js** - JavaScript runtime
- **TypeScript** - Typed superset of JavaScript
- **Fastify** - Fast and efficient web framework
- **Zod** - TypeScript-first schema validation
- **Drizzle ORM** - TypeScript-first ORM
- **PostgreSQL** - Relational database
- **pgvector** - PostgreSQL extension for vectors

### Development Tools
- **Biome** - Linter and formatter
- **Docker** - Containerization
- **Drizzle Kit** - Database migrations

## 🏗️ Architecture & Patterns

- **REST API** with type validation using Zod
- **Type-safe** application with TypeScript throughout
- **Dependency Injection** through Fastify
- **Environment Variables** for configuration
- **Docker Compose** for local development

## ⚙️ Environment Setup

### Prerequisites
- Node.js 18+
- Docker and Docker Compose
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd let-me-ask/server
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

4. **Start the database**
```bash
docker compose up -d
```

5. **Run migrations**
```bash
npx drizzle-kit migrate
```

6. **Seed the database (optional)**
```bash
npm run db:seed
```

## 🏃‍♂️ Running the Project

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will be available at `http://localhost:3333`

## 📁 Project Structure

```
src/
├── db/          # Database configuration and schemas
├── routes/      # API route definitions
├── env.ts       # Environment variables validation
└── server.ts    # Server configuration
```

## 🐳 Docker

The project uses PostgreSQL with pgvector extension via Docker:

```bash
# Start the database
docker compose up -d

# View logs
docker compose logs -f

# Stop containers
docker compose down
```

## 📝 Testing the API

Use the `client.http` file to test API endpoints directly in VS Code with the REST Client extension.

