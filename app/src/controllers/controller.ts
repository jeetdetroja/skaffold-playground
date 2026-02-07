// controllers/GreetingController.ts
import { FastifyRequest, FastifyReply } from "fastify";

export class GreetingController {
  // Method to handle the greeting logic
  public getGreeting(request: FastifyRequest, reply: FastifyReply): void {
    const { name = "world", excitement = 1 } = request.query as {
      name: string;
      excitement: number;
    };

    const greeting = `Hello, ${name}! ${"!".repeat(excitement)}`;

    reply.send({ hello: greeting });
  }
}
