import type { FastifyReply, FastifyRequest } from 'fastify';
import { ListEmployeesService } from '../services/list-employees-service';

class ListEmployeesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listEmployeeService = new ListEmployeesService();

    const employees = await listEmployeeService.execute();

    reply.send(employees);
  }
}

export { ListEmployeesController };
