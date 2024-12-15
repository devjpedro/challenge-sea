import prismaClient from '../prisma';

export interface UpdateEmployeeProps {
  id: string;
  status?: boolean;
  name?: string;
  gender?: string;
  cpf?: string;
  birthDay?: Date;
  rg?: string;
  role?: string;
  activities?: {
    id?: string;
    name: string;
    epis: {
      name: string;
      caCode: string;
    }[];
  }[];
}

class UpdateEmployeeService {
  async execute({
    id,
    status,
    name,
    cpf,
    gender,
    birthDay,
    rg,
    role,
    activities,
  }: UpdateEmployeeProps) {
    return await prismaClient.$transaction(async (tx) => {
      const updatedEmployee = await tx.employee.update({
        where: { id },
        data: {
          status,
          name,
          cpf,
          gender,
          birthDay,
          rg,
          role,
        },
      });

      if (activities) {
        await tx.ePI.deleteMany({
          where: {
            activity: {
              employeeId: id,
            },
          },
        });
        await tx.activity.deleteMany({
          where: { employeeId: id },
        });

        for (const activity of activities) {
          const newActivity = await tx.activity.create({
            data: {
              name: activity.name,
              employeeId: id,
              epis: {
                create: activity.epis.map((epi) => ({
                  name: epi.name,
                  caCode: epi.caCode,
                })),
              },
            },
          });
        }
      }

      return await tx.employee.findUnique({
        where: { id },
        include: {
          activities: {
            include: {
              epis: true,
            },
          },
        },
      });
    });
  }
}

export { UpdateEmployeeService };
