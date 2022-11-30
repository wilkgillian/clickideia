import path from 'path';
import fs from 'fs';
import mime from 'mime';
import crypto from 'crypto';
import aws, { S3 } from 'aws-sdk';

import uploadConfig from '../utils/multer';

class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: process.env.AWS_REGION
    });
  }

  async saveFile(filename: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.directory, filename);
    const ContentType = mime.getType(originalPath);
    if (!ContentType) {
      throw new Error('File not found');
    }

    const fileContent = await fs.promises.readFile(originalPath);

    this.client
      .putObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: filename,
        Body: fileContent,
        ContentType: path.resolve(uploadConfig.directory, filename)
      })
      .promise();
    const url_file = this.client.getSignedUrl('getObject', {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: filename,
      Expires: 31536000
    });
    await fs.promises.unlink(originalPath);
    return url_file;
  }

  async deleteFile(filename: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: filename
      })
      .promise();
  }
}

export default S3Storage;
