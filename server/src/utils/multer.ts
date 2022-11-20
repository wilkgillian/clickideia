import multer from 'multer';

export default {
  directory: './tmp',
  storage: multer.diskStorage({
    destination: './tmp',
    filename(req, file, callback) {
      const filename = file.originalname;
      return callback(null, filename);
    }
  })
};
