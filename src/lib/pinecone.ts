import { Pinecone } from "@pinecone-database/pinecone";
import { downloadFromS3 } from "./s3-server";

let pinecone: Pinecone | null = null;

export const getPineconeClient = async () => {
  if (!pinecone) {
    pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
      environment: process.env.PINECONE_ENVIRONMENT!,
    });
  }

  return pinecone;
};

export async function loadS3IntoPinecone(file_key: string) {
  // 1. obtain the pdf -> download and read from pdf
  console.log("downloading s3 into file system");
  const file_name = await downloadFromS3(file_key);
}
