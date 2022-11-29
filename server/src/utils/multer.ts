import multer from 'multer';
import crypto from 'crypto';

export default {
  directory: './tmp',
  storage: multer.diskStorage({
    destination: './tmp',
    filename(req, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const filename = `${fileHash}-${file.originalname}`;
      return callback(null, filename);
    }
  })
};
