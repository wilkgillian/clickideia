import { TasksTable1674570326636 } from './migrations/1674570326636-TasksTable';
import { DataSource } from 'typeorm';
import { Task } from '../../../modules/tasks/infra/typeorm/entities/Task';
import { StatusTable1674591173987 } from './migrations/1674591173987-StatusTable';
import { UsersTable1674591227589 } from './migrations/1674591227589-UsersTable';
import { User } from '../../../modules/accounts/entities/User';

const myDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'wilk1998',
  database: 'db_clickideia',
  synchronize: true,
  // logging: true,
  entities: [Task, User],
  migrations: [
    UsersTable1674591227589,
    TasksTable1674570326636,
    // StatusTable1674591173987,
  ],
});

export async function createConnection(
  host = 'db_clickideia',
): Promise<DataSource> {
  return await myDataSource.setOptions({ host }).initialize();
}

export default myDataSource;
