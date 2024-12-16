import type { FastifyReply, FastifyRequest } from 'fastify';
import {
  UpdateEmployeeService,
  type UpdateEmployeeProps,
} from '../services/update-employee-service';

class UpdateEmployeeController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const { name, birthDay, cpf, gender, rg, role, status, activities, healthCertificate } =
      request.body as UpdateEmployeeProps;

    const employeeService = new UpdateEmployeeService();

    const employee = await employeeService.execute({
      id,
      birthDay,
      cpf,
      gender,
      name,
      rg,
      role,
      status,
      activities,
      healthCertificate
    });

    reply.send(employee);
  }
}

export { UpdateEmployeeController };
