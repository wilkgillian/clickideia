import S3Storage from "./S3Storage";

export async function deleteImageFromS3(filename: string) {
  const s3 = new S3Storage();
  await s3.deleteFile(filename);
}
