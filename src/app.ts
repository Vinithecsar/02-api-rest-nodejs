import fastify from "fastify";
import cookie from "@fastify/cookie";
import { transactionsRoutes } from "./routes/transactions";

export const app = fastify();

app.register(cookie);

//app.addHook("preHandler", async (request, reply) => {
//  console.log(`[${request.method}] ${request.url}`);
//}); executa uma função antes de todas as outras dado o ambiente em que for inserida

app.register(transactionsRoutes, {
  prefix: "transactions",
});
