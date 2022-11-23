import { container } from "tsyringe";

import { IFilmsRepository } from "./../../modules/films/repositories/IFilmsRepository";
import { FilmRepository } from "../../modules/films/repositories/implementations/FilmsRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";

container.registerSingleton<IFilmsRepository>(
  "FilmsRepository",
  FilmRepository
);

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);
