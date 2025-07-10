# Let me Ask

AI-powered real-time Q&A platform developed during a **Rocketseat** event, featuring intelligent question answering using vector embeddings and semantic search.

## 🚀 Technologies

### Backend
- **Node.js** - JavaScript runtime
- **TypeScript** - Typed superset of JavaScript
- **Fastify** - Fast and efficient web framework
- **Zod** - TypeScript-first schema validation
- **Drizzle ORM** - TypeScript-first ORM
- **PostgreSQL** - Relational database
- **pgvector** - PostgreSQL extension for vector similarity search

### AI & Machine Learning
- **Google Gemini AI** - AI model for generating embeddings and answers
- **Vector Embeddings** - Semantic search and similarity matching
- **RAG (Retrieval Augmented Generation)** - Context-aware answer generation

### Development Tools
- **Biome** - Linter and formatter
- **Docker** - Containerization
- **Drizzle Kit** - Database migrations and seeding

## 🏗️ Architecture & Patterns

- **REST API** with type validation using Zod
- **Type-safe** application with TypeScript throughout
- **Vector Search** using pgvector for semantic similarity
- **AI-Powered Responses** with context-aware answer generation
- **Dependency Injection** through Fastify
- **Environment Variables** for configuration
- **Docker Compose** for local development

## ✨ Key Features

- **🤖 Intelligent Q&A**: AI-powered answers based on audio transcriptions
- **🔍 Semantic Search**: Vector similarity search for relevant content
- **📝 Audio Processing**: Store and search through audio chunk transcriptions
- **⚡ Real-time API**: Fast and efficient question-answer flow
- **🎯 Context-Aware**: Answers generated from relevant audio content

## ⚙️ Environment Setup

### Prerequisites
- Node.js 18+
- Docker and Docker Compose
- Git
- Gemini API Key (for AI features)

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
# Add your GEMINI_API_KEY to .env file
```

4. **Start the database**
```bash
docker compose up -d
```

5. **Generate database schema**
```bash
npm run db:generate
```

6. **Run migrations**
```bash
npm run db:migrate
```


7. **Seed the database (optional)**
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
├── db/
│   ├── connection.ts      # Database connection
│   ├── schema/           # Database schemas
│   │   ├── rooms.ts      # Rooms table schema
│   │   ├── questions.ts  # Questions table schema
│   │   └── audio-chunks.ts # Audio chunks with embeddings
│   └── seed.ts           # Database seeding
├── http/
│   └── routes/           # API route definitions
│       ├── create-room.ts
│       ├── get-rooms.ts
│       ├── create-question.ts
│       └── get-room-questions.ts
├── services/
│   └── gemini.ts         # AI service integration
├── env.ts                # Environment variables validation
└── server.ts             # Server configuration
```

## 🤖 AI Features

### Question Processing Flow
1. **Question Input**: User submits a question via API
2. **Embedding Generation**: Question is converted to vector embeddings using Gemini
3. **Semantic Search**: Find similar audio chunks using vector similarity (>0.7 threshold)
4. **Context Retrieval**: Relevant transcriptions are retrieved
5. **Answer Generation**: AI generates contextual answer based on retrieved content
6. **Response**: Question and AI-generated answer are stored and returned

### Vector Search
- Uses **pgvector** for efficient similarity search
- **768-dimensional embeddings** from Gemini AI
- **Cosine similarity** for relevance matching
- **Top 3 most relevant** chunks for context

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

## 📝 API Endpoints

### Rooms
- `GET /rooms` - List all rooms with question counts
- `POST /rooms` - Create a new room

### Questions
- `GET /rooms/:roomId/questions` - Get all questions for a room
- `POST /rooms/:roomId/questions` - Create a question with AI-generated answer

### Testing
Use the `client.http` file to test API endpoints directly in VS Code with the REST Client extension.

