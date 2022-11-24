import "reflect-metadata"
import { DataSource } from "typeorm";
import { Film } from "../modules/films/entities/Film";

const myDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "docker",
  password: "wilk1998",
  database: "filimo",
  synchronize: true,
  logging: false,
  entities: [Film],
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
});

export function createConnection(host = "database"): Promise<DataSource> {
  return myDataSource.setOptions({ host }).initialize();
}

export default myDataSource;
