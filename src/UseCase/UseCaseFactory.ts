import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import DeleteTask from './DeleteTask/DeleteTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase'; //Import classe

type UseCases = GetAllTasksUseCase | DeleteTask | SaveTaskUseCase; //Ajout classe "SaveTaskUseCase"

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}

/*
ce fichier :

Étend la ServiceFactory pour préciser quels types de use cases sont acceptés dans l'application.
Définit un ensemble de use cases que UseCaseFactory peut créer : obtenir toutes les tâches, supprimer une tâche, ou enregistrer une tâche.
Rend la création de use cases plus facile et plus centralisée en s'assurant que seuls les use cases définis dans UseCases peuvent être créés.

*/

/*
Pourquoi est-ce utile ?
Cela permet de limiter les types de use cases que UseCaseFactory peut créer, garantissant ainsi que seuls les use cases autorisés sont utilisés dans l'application.
Cela simplifie la gestion des use cases et assure que toutes les créations passent par une structure standardisée, ce qui améliore la maintenabilité du code.
*/
