// App.ts
import Fastify, { FastifyInstance } from "fastify";
import { Routes } from "./routes/routes";

export class App {
  private fastify: FastifyInstance;
  private port: number;

  constructor() {
    this.fastify = Fastify({
      logger: true,
    });
    this.port = Number(process.env.PORT) || 3000;
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
      await this.fastify.listen({
        port: this.port,
        host: "0.0.0.0",
      });
      this.fastify.log.info(`Server listening on http://0.0.0.0:${this.port}`);
    } catch (err) {
      this.fastify.log.error(err);
      process.exit(1);
    }
  }
}
