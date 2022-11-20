import crypto from 'crypto';
import multer from 'multer';

export default {
  directory: './tmp',
  storage: multer.diskStorage({
    destination: './tmp',
    filename(req, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const file_name = file.originalname.trim();
      const filename = `${fileHash.toString()}-${file_name}`;

      return callback(null, filename);
    }
  })
};
