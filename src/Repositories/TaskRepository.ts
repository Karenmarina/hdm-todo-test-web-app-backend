import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export default class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany();
  }

  async delete(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }

  async save(
    data:
      | Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>
      | Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>,
  ) {
    if (!data.id) {
      // @todo IMPLEMENT HERE USING PRISMA API
      //Création nouvelle tâche
      return this.prisma.task.create({
        data: {
          name: data.name as string,
        },
      });
    } else {
      // @todo IMPLEMENT HERE USING PRISMA API
      // Si une tâche existe déjà, mettre à jour
      return this.prisma.task.update({
        where: { id: data.id as number },
        data: {
          name: data.name as string,
        },
      });
    }
  }
}
