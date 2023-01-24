import { Repository } from 'typeorm';
import myDataSource from '../../../../shared/infra/typeorm';
import { IUpdateStatusDTO } from '../../dtos/IUpdateStatusDTO';
import { Status } from '../../entities/Status';
import { IStatusRepository } from '../IStatusRepository';

class StatusRepository implements IStatusRepository {
  private repository: Repository<Status>;
  constructor() {
    this.repository = myDataSource.getRepository(Status);
  }
  async create(data: IUpdateStatusDTO): Promise<void> {
    const status = await this.repository.update({});
  }
}

export { StatusRepository };
