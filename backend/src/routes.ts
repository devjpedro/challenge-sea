import type {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from 'fastify';
import { CreateEmployeeController } from './controllers/create-employee-controller';
import { ListEmployeesController } from './controllers/list-employees-controller';
import { DeleteEmployeeController } from './controllers/delete-employee-controller';
import { UpdateEmployeeController } from './controllers/update-employee-controller';

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) {
  fastify.post(
    '/employee',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateEmployeeController().handle(request, reply);
    },
  );

  fastify.get(
    '/employees',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListEmployeesController().handle(request, reply);
    },
  );

  fastify.delete(
    '/employee',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteEmployeeController().handle(request, reply);
    },
  );

  fastify.put(
    '/employee',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateEmployeeController().handle(request, reply);
    },
  );
}
