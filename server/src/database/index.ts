import "reflect-metadata";
import { DataSource } from "typeorm";
import { Film } from "../../src/modules/films/entities/Film";
// import { Film } from "src/  ../modules/films/entities/Film";

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

// myDataSource
//   .initialize()
//   .then(async () => {
//     console.log("Connection initialized with database...");
//   })
//   .catch((error) => console.log(error));

// export const getDataSource = (delay = 3000): Promise<DataSource> => {
//   if (myDataSource.isInitialized) return Promise.resolve(myDataSource);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (myDataSource.isInitialized) resolve(myDataSource);
//       else reject("Failed to create connection with database");
//     }, delay);
//   });
// };

export async function createConnection(host = "database"): Promise<DataSource> {
  return await myDataSource.setOptions({ host }).initialize();
}

export default myDataSource;
