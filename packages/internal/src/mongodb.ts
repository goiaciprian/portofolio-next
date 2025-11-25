import { attachDatabasePool } from "@vercel/functions";
import { MongoClient } from "mongodb";

function main() {
  const mongoClient = new MongoClient(process.env.MONGODB_URI ?? "");
  attachDatabasePool(mongoClient);
}

main();
