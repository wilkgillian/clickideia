import { Task } from '../../tasks/infra/typeorm/entities/Task';

export interface ICreateUserDTO {
  name: string;
  username: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  created_at?: Date;
  tasks?: Task[];
}
