import { Repository } from 'typeorm';
import myDataSource from '../../../../../shared/infra/typeorm';
import { ICreateToDoDTO } from '../../../dtos/ICreateToDoDTO';
import { v4 as uuidV4 } from 'uuid';
import { IToDosRepository } from '../../../repositories/IToDosRepository';
import { ToDo } from '../entities/ToDo';
import { IUpdateToDoDTO } from '../../../dtos/IUpdateToDoDTO';

export class ToDoRepository implements IToDosRepository {
  private toDos: Repository<ToDo>;

  constructor() {
    this.toDos = myDataSource.getRepository(ToDo);
  }

  async create({ title, content, list }: ICreateToDoDTO): Promise<ToDo> {
    const toDo = this.toDos.create({
      title,
      content,
      list,
      id: uuidV4(),
    });

    await this.toDos.save(toDo);

    return toDo;
  }
  // async updateDatabase(): Promise<ToDo[]> {
  //   try {
  //     const { data } = await api.get("/toDos");
  //     data.map((dat: ICreateToDoDTO) => {
  //       const film = this.toDos.create({
  //         id: dat.id,
  //         title: dat.title,
  //         description: dat.description,
  //         image: dat.image,
  //         movie_banner: dat.movie_banner,
  //         movie_url:
  //           "https://www.youtube.com/watch?v=Y9TL_43X3Lc&ab_channel=FullStackMastery",
  //         director: dat.director,
  //         producer: dat.producer,
  //         release_date: dat.release_date,
  //         rt_score: dat.rt_score,
  //         running_time: dat.running_time,
  //         genre: "Estrangeiro",
  //       });
  //       this.toDos.save(film);
  //     });
  //   } catch {
  //     throw new Error("Falha ao obter dados");
  //   }
  //   const toDos = await this.toDos.find();
  //   return toDos;
  // }
  async list(): Promise<ToDo[]> {
    try {
      const toDos = await this.toDos.find({
        order: {
          created_at: 'DESC',
        },
      });
      return toDos;
    } catch {
      throw new Error('Falha ao obter dados');
    }
  }
  async findByName(title: string): Promise<ToDo> {
    const toDo = await this.toDos.findOne({
      where: {
        title: title,
      },
    });
    return toDo;
  }
  async delete(id: string): Promise<string> {
    try {
      await this.toDos
        .createQueryBuilder('toDos')
        .delete()
        .from(ToDo)
        .where({ id: id })
        .execute();
      return 'ToDo deletado com sucesso';
    } catch {
      throw new Error('Erro ao deletar todo');
    }
  }
  async update(data: IUpdateToDoDTO, id: string): Promise<ToDo> {
    // try {
    //   const existentData = await this.toDos.findOne({
    //     where: {
    //       id: id,
    //     },
    //   });
    await this.toDos
      .createQueryBuilder()
      .update(ToDo)
      .set({
        title: data.title,
        content: data.content,
        list: data.list,
      })
      .where({
        id: id,
      })
      .execute();

    const toDo = await this.toDos.findOne({
      where: {
        id: id,
      },
    });
    return toDo;
    // } catch {
    //   throw new Error("Erro ao editar toDo");
    // }
  }
  // async updateMovieBanner({
  //   id,
  //   movie_banner,
  // }: IUpdateMovieBanner): Promise<void> {
  //   await this.toDos
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
  async getOneToDo(id: string) {
    const toDo = await this.toDos.findOne({
      where: {
        id: id,
      },
    });
    return toDo;
  }
}
