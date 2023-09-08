import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { indexRoute } from "./routes";
import { todoRoute } from "./routes/todo";

const app = new Elysia()
  .use(swagger())
  .use(indexRoute)
  .use(todoRoute)
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
