import imageParser from 'nodejs-image-parser';
import fs from 'fs';
import S3Storage from '../../../../utils/S3Storage';

class UploadFilmUseCase {
  async execute(file: Express.Multer.File): Promise<void> {
    const s3Storage = new S3Storage();

    const url_file = await s3Storage.saveFile(file.filename);
    // const parseFile = imageParser();
    // stream.pipe(parseFile);
  }
}

export { UploadFilmUseCase };
