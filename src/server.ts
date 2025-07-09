import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from './env.ts';
import { createQuestionRoute } from './http/routes/create-questionb.ts';
import { createRoomRoute } from './http/routes/create-room.ts';
import { getRoomsQuestionsRoute } from './http/routes/get-room-questions.ts';
import { getRoomsRoute } from './http/routes/get-rooms.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
});

app.get('/health', () => {
  return 'OK';
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(getRoomsRoute);
app.register(getRoomsQuestionsRoute);
app.register(createRoomRoute);
app.register(createQuestionRoute);

app.listen({ port: env.PORT });

// biome-ignore lint/suspicious/noConsole: API Feedback for running
console.log('🚀 Server is running on port', env.PORT);
