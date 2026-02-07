import { FastifyInstance } from "fastify";
import { GreetingController } from "../controllers/controller";

export class Routes {
  private greetingController: GreetingController;

  constructor() {
    this.greetingController = new GreetingController();
  }

  public registerRoutes(fastify: FastifyInstance): void {
    fastify.route({
      method: "GET",
      url: "/",
      schema: {
        querystring: {
          name: { type: "string" },
          excitement: { type: "integer" },
        },
        response: {
          200: {
            type: "object",
            properties: {
              hello: { type: "string" },
            },
          },
        },
      },
      handler: this.greetingController.getGreeting.bind(
        this.greetingController
      ),
    });
    fastify.route({
      method: "GET",
      url: "/world",
      schema: {
        querystring: {
          name: { type: "string" },
          excitement: { type: "integer" },
        },
        response: {
          200: {
            type: "object",
            properties: {
              hello: { type: "string" },
            },
          },
        },
      },
      handler: this.greetingController.getGreeting.bind(
        this.greetingController
      ),
    });
  }
}
