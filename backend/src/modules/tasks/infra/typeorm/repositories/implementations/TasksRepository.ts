import { Repository } from 'typeorm';
import myDataSource from '../../../../../../shared/infra/typeorm';
import { ICreateTaskDTO } from '../../../../dtos/ICreateTask';
import { v4 as uuidV4 } from 'uuid';
import { ITasksRepository } from '../ITasksRepository';
import { Task } from '../../entities/Task';
import { IUpdateTaskDTO } from '../../../../dtos/IUpdateTaskDTO';
import { User } from '../../../../../accounts/entities/User';

export class TaskRepository implements ITasksRepository {
  private tasks: Repository<Task>;
  private users: Repository<User>;

  constructor() {
    this.tasks = myDataSource.getRepository(Task);
    this.users = myDataSource.getRepository(User);
  }

  async create({
    title,
    content,
    list,
    userId,
    status,
  }: ICreateTaskDTO): Promise<Task> {
    const user = await this.users.findOne({
      where: {
        id: userId,
      },
    });

    if (user.id === userId) {
      const task = this.tasks.create({
        id: uuidV4(),
        title: title,
        content: content,
        list: list,
        status: status,
        userId: userId,
      });
      await this.tasks.save(task);

      return task;
    }
  }

  async findByName(title: string, userId: string): Promise<Task> {
    const task = await this.tasks.findOne({
      where: {
        title: title,
        userId: userId,
      },
    });
    return task;
  }
  async list(): Promise<Task[]> {
    try {
      const tasks = await this.tasks.find({
        order: {
          created_at: 'DESC',
        },
      });
      return tasks;
    } catch {
      throw new Error('Falha ao obter dados');
    }
  }
  async delete(id: string): Promise<string> {
    try {
      await this.tasks
        .createQueryBuilder('tasks')
        .delete()
        .from(Task)
        .where({ id: id })
        .execute();
      return 'Task deletado com sucesso';
    } catch {
      throw new Error('Erro ao deletar task');
    }
  }
  async update(data: IUpdateTaskDTO, id: string): Promise<Task> {
    await this.tasks
      .createQueryBuilder()
      .update(Task)
      .set({
        title: data.title,
        content: data.content,
        list: data.list,
        status: data.status,
      })
      .where({
        id: id,
      })
      .execute();

    const task = await this.tasks.findOne({
      where: {
        id: id,
      },
    });
    return task;
  }
  async listTasksByUser(userId: string): Promise<Task[]> {
    const tasks = await this.tasks.find({
      where: {
        userId: userId,
      },
    });
    return tasks;
  }
  async getOneTask(id: string) {
    const task = await this.tasks.findOne({
      where: {
        id: id,
      },
    });
    return task;
  }
}
