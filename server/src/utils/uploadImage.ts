import { Request } from "express";
import S3Storage from "../config/S3Storage";

export async function uploadImageOnS3(req: Request) {
  const { file } = req;
  const s3Storage = new S3Storage();

  const url_file = await s3Storage.saveFile(file.filename);
  return url_file;
}
