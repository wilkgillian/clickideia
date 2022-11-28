import { DataSource } from "typeorm";
import { Film } from "../../../modules/films/infra/typeorm/entities/Film";
import { CreateFilms1669043789353 } from "./migrations/1669043789353-CreateFilms";

const myDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "docker",
  password: "wilk1998",
  database: "database_filimo",
  entities: [Film],
  migrations: [CreateFilms1669043789353],
});

export async function createConnection(
  host = "database_filimo"
): Promise<DataSource> {
  return await myDataSource.setOptions({ host }).initialize();
}

export default myDataSource;
