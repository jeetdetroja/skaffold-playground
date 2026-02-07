// App.ts
import Fastify, { FastifyInstance } from "fastify";
import { Routes } from "./routes/routes";

export class App {
  private fastify: FastifyInstance;

  constructor() {
    this.fastify = Fastify({
      logger: true,
    });
    this.registerRoutes();
  }

  // Method to register routes
  private registerRoutes(): void {
    const routes = new Routes();
    routes.registerRoutes(this.fastify);
  }

  // Method to start the server
  public async start(): Promise<void> {
    try {
      await this.fastify.listen({ port: 80, host: "127.0.0.1" });
      this.fastify.log.info(`Server listening on http://127.0.0.1`);
    } catch (err) {
      this.fastify.log.error(err);
      process.exit(1);
    }
  }
}
