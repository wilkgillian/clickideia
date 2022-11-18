import imageParser from "nodejs-image-parser";
import fs from "fs";

class UploadFilmUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = imageParser();

    stream.pipe(parseFile);
  }
}

export { UploadFilmUseCase };
