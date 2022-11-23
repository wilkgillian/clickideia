import { DataSource } from "typeorm";

const myDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "docker",
  password: "wilk1998",
  database: "filimo",
  synchronize: false,
  logging: false,
  entities: ["./src/modules/**/entities/*.ts", "./src/modules/accounts/**/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
});

export function createConnection(host = "database"): Promise<DataSource> {
  return myDataSource.setOptions({ host }).initialize();
}

export default myDataSource;
