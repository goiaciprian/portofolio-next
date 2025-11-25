import { list } from "@vercel/blob";

export const getFileUrl = (filename: string) =>
  list({
    token: process.env.BLOB_STORAGE_READ_WRITE_TOKEN,
    prefix: filename,
  }).then((data) => data.blobs[0]);
