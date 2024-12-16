import prismaClient from '../prisma';

export interface CreateEpiProps {
  name: string;
  caCode: string;
}

export interface CreateActivityProps {
  name: string;
  epis?: CreateEpiProps[];
}

export interface CreateEmployeeProps {
  status: boolean;
  name: string;
  gender: 'male' | 'female';
  cpf: string;
  birthDay: string;
  rg: string;
  role: string;
  healthCertificate?: string
  activities?: CreateActivityProps[];
}

class CreateEmployeeService {
  async execute({
    status,
    name,
    cpf,
    gender,
    birthDay,
    rg,
    role,
    activities,
    healthCertificate
  }: CreateEmployeeProps) {
    const data = { status, name, cpf, gender, birthDay, rg, role, healthCertificate };
    for (const [key, value] of Object.entries(data)) {
      if (value === undefined || value === null || value === '') {
        throw new Error('Preencha todos os campos obrigatórios');
      }
    }

    const employee = await prismaClient.employee.create({
      data: {
        status,
        name,
        cpf,
        gender,
        birthDay: new Date(birthDay),
        rg,
        role,
        healthCertificate,
        activities: activities
          ? {
              create: activities.map((activity) => ({
                name: activity.name,
                epis: activity.epis
                  ? {
                      create: activity.epis.map((epi) => ({
                        name: epi.name,
                        caCode: epi.caCode,
                      })),
                    }
                  : undefined,
              })),
            }
          : undefined,
      },
      include: {
        activities: {
          include: {
            epis: true,
          },
        },
      },
    });

    return employee;
  }
}

export { CreateEmployeeService };
