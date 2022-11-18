import { UploadFilmController } from "./uploadFilmController";
import { UploadFilmUseCase } from "./uploadFilmUseCase";

const uploadFilmUseCase = new UploadFilmUseCase();
const uploadFilmController = new UploadFilmController(uploadFilmUseCase);

export { uploadFilmController };
