import { list } from "@vercel/blob";

type FileType = "files/" | "images/";

export const getFileUrl = (filename: string) =>
  list({
    token: process.env.BLOB_STORAGE_READ_WRITE_TOKEN,
    prefix: `${filename}`,
  }).then((data) => data.blobs[0]);

export const getFiles = (type: FileType) =>
  list({
    token: process.env.BLOB_STORAGE_READ_WRITE_TOKEN,
    prefix: type,
  }).then((data) => data.blobs.filter((obj) => obj.pathname !== type));
