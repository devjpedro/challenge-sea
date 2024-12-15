import type { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteEmployeeService } from '../services/delete-employee-service';

class DeleteEmployeeController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const employeeService = new DeleteEmployeeService();

    const employee = await employeeService.execute({ id });

    reply.send(employee);
  }
}

export { DeleteEmployeeController };
