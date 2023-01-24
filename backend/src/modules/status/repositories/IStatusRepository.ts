import { IUpdateStatusDTO } from '../dtos/IUpdateStatusDTO';

interface IStatusRepository {
  create(data: IUpdateStatusDTO): Promise<void>;
}
export { IStatusRepository };
