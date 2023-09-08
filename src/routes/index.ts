import { Elysia } from 'elysia';

export function indexRoute(app: Elysia) {
  return app.get('/', () => 'Simple todo is working!');
}

