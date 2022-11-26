import { DataSource } from 'typeorm';
import { Film } from '../../../modules/films/infra/typeorm/entities/Film';
import { CreateFilms1669043789353 } from './migrations/1669043789353-CreateFilms';

const myDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'wilk1998',
  database: 'filimo',
  // synchronize: true,
  // logging: false,
  entities: [Film],
  migrations: [CreateFilms1669043789353]
  // subscribers: []
});

export async function createConnection(host = 'database'): Promise<DataSource> {
  return await myDataSource.setOptions({ host }).initialize();
}

export default myDataSource;
