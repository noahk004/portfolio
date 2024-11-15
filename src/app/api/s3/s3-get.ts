import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import type { S3ClientConfig } from "@aws-sdk/client-s3";

if (
  !process.env.S3_ACCESS_KEY ||
  !process.env.S3_SECRET_KEY ||
  !process.env.S3_BUCKET ||
  !process.env.S3_REGION
) {
  throw new Error("One or more .env variables are not configured.");
}

const S3_ACCESS_KEY: string = process.env.S3_ACCESS_KEY;
const S3_SECRET_KEY: string = process.env.S3_SECRET_KEY;
const S3_BUCKET: string = process.env.S3_BUCKET;
const S3_REGION: string = process.env.S3_REGION;

const s3Client = new S3Client({
  credentials: {
    accessKeyId: S3_ACCESS_KEY,
    secretAccessKey: S3_SECRET_KEY,
  },
  region: process.env.S3_REGION,
} as S3ClientConfig);

export default async function getImage(fileName: string) {
  const getObjectParams = {
    Bucket: S3_BUCKET,
    Key: fileName,
  };
  const command = new GetObjectCommand(getObjectParams);
  const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });

  return url;
}
