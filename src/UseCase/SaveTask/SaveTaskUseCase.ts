import { BadRequestException, Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
//Import pour utiliser la méthode qui sauvergarde une tâche
import TaskRepository from 'src/Repositories/TaskRepository';

@Injectable()
export default class SaveTaskUseCase
  implements UseCase<Promise<Task>, [dto: SaveTaskDto]>
{
  //Ajout dans le constructeur de l'instance TakeRepository pour effectuer des opérations dans la BDD
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto) {
    /*
     * @todo IMPLEMENT HERE : VALIDATION DTO = Data Transfer Object, DATA SAVING, ERROR CATCHING
     */

    //Ajout logique de validation (ex: nom de la tâche présente ?)
    if (!dto.name) {
      throw new BadRequestException('Le nom de la tâche est requis');
    }
    //Sauvegarde des données dans la BDD avec la méthode définie dans TaskRepository
    //Gestion des erreurs avec try-catch
    try {
      return await this.taskRepository.save(dto);
    } catch (error) {
      throw new BadRequestException(
        `Erreur lors de la sauvegarde de la tâche : ${error.message}`,
      );
    }
  }
}
