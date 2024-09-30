import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import DeleteTask from './DeleteTask/DeleteTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase'; //Import classe

type UseCases = GetAllTasksUseCase | DeleteTask | SaveTaskUseCase; //Ajout classe "SaveTaskUseCase"

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
