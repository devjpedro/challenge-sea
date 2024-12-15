import prismaClient from '../prisma';

interface DeleteEmployeeProps {
  id: string;
}

class DeleteEmployeeService {
  async execute({ id }: DeleteEmployeeProps) {
    if (!id) throw new Error('Solicitação inválida.');

    const findEmployee = await prismaClient.employee.findFirst({
      where: {
        id,
      },
      include: {
        activities: {
          include: {
            epis: true,
          },
        },
      },
    });

    if (!findEmployee) throw new Error('Funcionário não encontrado.');

    for (const activity of findEmployee.activities) {
      if (activity.epis.length > 0) {
        await prismaClient.ePI.deleteMany({
          where: {
            activityId: activity.id,
          },
        });
      }
    }

    await prismaClient.activity.deleteMany({
      where: {
        employeeId: findEmployee.id,
      },
    });

    await prismaClient.employee.delete({
      where: {
        id: findEmployee.id,
      },
    });

    return {
      message: 'Funcionário removido com sucesso.',
    };
  }
}

export { DeleteEmployeeService };
