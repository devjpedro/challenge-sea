import prismaClient from '../prisma';

class ListEmployeesService {
  async execute() {
    const employees = await prismaClient.employee.findMany({
      include: {
        activities: {
          include: {
            epis: true,
          },
        },
      },
    });

    return employees;
  }
}

export { ListEmployeesService };
