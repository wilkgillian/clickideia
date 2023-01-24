import { CardsTable1674570326636 } from './migrations/1674570326636-CardsTable';
import { DataSource } from 'typeorm';
import { Card } from '../../../modules/toDos/infra/typeorm/entities/Card';

const myDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'wilk1998',
  database: 'db_clickideia',
  entities: [Card],
  migrations: [CardsTable1674570326636],
});

export async function createConnection(
  host = 'db_clickideia',
): Promise<DataSource> {
  return await myDataSource.setOptions({ host }).initialize();
}

export default myDataSource;
