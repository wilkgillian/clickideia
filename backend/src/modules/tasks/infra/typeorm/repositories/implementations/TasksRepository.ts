import { Repository } from 'typeorm';
import myDataSource from '../../../../../../shared/infra/typeorm';
import { ICreateTaskDTO } from '../../../../dtos/ICreateTask';
import { v4 as uuidV4 } from 'uuid';
import { ITasksRepository } from '../ITasksRepository';
import { Task } from '../../entities/Task';
import { IUpdateTaskDTO } from '../../../../dtos/IUpdateTaskDTO';

export class TaskRepository implements ITasksRepository {
  private tasks: Repository<Task>;

  constructor() {
    this.tasks = myDataSource.getRepository(Task);
  }

  async create({ title, content, list }: ICreateTaskDTO): Promise<Task> {
    const task = this.tasks.create({
      id: uuidV4(),
      title: title,
      content: content,
      list: list,
      created_at: new Date(),
      status: 'to_do',
    });

    await this.tasks.save(task);

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
  async findByName(title: string): Promise<Task> {
    const task = await this.tasks.findOne({
      where: {
        title: title,
      },
    });
    return task;
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
    // try {
    //   const existentData = await this.tasks.findOne({
    //     where: {
    //       id: id,
    //     },
    //   });
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
    // } catch {
    //   throw new Error("Erro ao editar toDo");
    // }
  }
  // async updateMovieBanner({
  //   id,
  //   movie_banner,
  // }: IUpdateMovieBanner): Promise<void> {
  //   await this.tasks
  //     .createQueryBuilder()
  //     .update(Film)
  //     .set({
  //       movie_banner: movie_banner,
  //     })
  //     .where({
  //       id: id,
  //     })
  //     .execute();
  // }
  // async updateFilmImage({ id, image }: IUpdateMovieImage): Promise<void> {
  //   await this.toDos
  //     .createQueryBuilder()
  //     .update(Film)
  //     .set({
  //       image: image,
  //     })
  //     .where({
  //       id: id,
  //     })
  //     .execute();
  // }
  async getOneTask(id: string) {
    const task = await this.tasks.findOne({
      where: {
        id: id,
      },
    });
    return task;
  }
}
