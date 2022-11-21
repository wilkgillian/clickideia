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
  entities: [],
  migrations: ["./src/database/migrations"],
  subscribers: [],
});

myDataSource.initialize();
