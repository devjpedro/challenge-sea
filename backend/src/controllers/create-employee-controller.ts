import type { FastifyReply, FastifyRequest } from 'fastify';
import {
  CreateEmployeeService,
  type CreateEmployeeProps,
} from '../services/create-employee-service';

class CreateEmployeeController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, birthDay, cpf, gender, rg, role, status, activities } =
      request.body as CreateEmployeeProps;

    const employeeService = new CreateEmployeeService();

    const employee = await employeeService.execute({
      birthDay,
      cpf,
      gender,
      name,
      rg,
      role,
      status,
      activities,
    });

    reply.send(employee);
  }
}

export { CreateEmployeeController };
