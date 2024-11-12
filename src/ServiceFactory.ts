import { Injectable } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';
import { ModuleRef } from '@nestjs/core';
import { UseCase } from './index';

@Injectable()
export default abstract class ServiceFactory<U extends UseCase<any, any>> {
  constructor(protected readonly container: ModuleRef) {}

  async create<T extends U>(type: Type<T>): Promise<T> {
    return this.container.create(type);
  }
}

/*
Ce fichier définit une classe abstraite appelée ServiceFactory qui est utilisée pour créer des instances de use cases de manière flexible et dynamique. C'est une usine de services (Service Factory) qui permet de centraliser la création des objets de type UseCase.
*/

/*
À quoi sert ce fichier dans l'application ?
But principal : ServiceFactory est un outil qui facilite la création de cas d'utilisation (use cases) de manière centralisée et automatisée.
Use Case : Un use case représente une unité de logique métier, comme obtenir une liste de tâches, supprimer une tâche, etc. Au lieu de créer manuellement chaque use case, ServiceFactory permet de créer ces objets de manière efficace.
Flexibilité : Si votre application contient plusieurs use cases (comme GetAllTasksUseCase, DeleteTask, SaveTaskUseCase), ServiceFactory offre un moyen de les créer dynamiquement sans écrire beaucoup de code répétitif.
*/
