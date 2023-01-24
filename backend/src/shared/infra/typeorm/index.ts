import { DataSource } from 'typeorm';
import { CreateFilms1669043789353 } from './migrations/1669043789353-CreateFilms';
import { ToDo } from '../../../modules/toDos/infra/typeorm/entities/ToDo';

const myDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'wilk1998',
  database: 'clickideia',
  entities: [ToDo],
  migrations: [CreateFilms1669043789353],
});

export async function createConnection(
  host = 'clickideia',
): Promise<DataSource> {
  return await myDataSource.setOptions({ host }).initialize();
}

export default myDataSource;
