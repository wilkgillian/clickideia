import { TasksTable1674570326636 } from './migrations/1674570326636-TasksTable';
import { DataSource } from 'typeorm';
import { Task } from '../../../modules/tasks/infra/typeorm/entities/Task';
import { StatusTable1674591173987 } from './migrations/1674591173987-StatusTable';
import { UsersTable1674591227589 } from './migrations/1674591227589-UsersTable';

const myDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'wilk1998',
  database: 'db_clickideia',
  entities: [Task],
  migrations: [
    TasksTable1674570326636,
    StatusTable1674591173987,
    UsersTable1674591227589,
  ],
});

export async function createConnection(
  host = 'db_clickideia',
): Promise<DataSource> {
  return await myDataSource.setOptions({ host }).initialize();
}

export default myDataSource;
