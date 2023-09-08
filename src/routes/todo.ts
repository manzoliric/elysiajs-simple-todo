import { Elysia, t } from 'elysia';

interface Todo {
  title: string;
  description: string;
  done: boolean;
}

export function todoRoute(app: Elysia) {
  const todos: Todo[] = [];

  return app
  .get('/todo', () => todos)
  .post(
    '/todo', ({ body, set }) => {
      todos.push(body);
      set.status = 201;
      return body;
    }, 
    {
        body: t.Object({
          title: t.String(),
          description: t.String(),
          done: t.Boolean(),
      })
    })
  .put('/todo', () => 'PUT A TODO')
  .delete('/todo', () => 'DELETE A TODO');
}
