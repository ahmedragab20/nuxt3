import { ServerResponse, IncomingMessage } from "http";
import newCollectionDB from "@/db/new-collection-db";

export default (req: IncomingMessage, res: ServerResponse) => {
  // you can directly use it in ur template instead of doing that. I just made it here for example on nitro-server usage.
  return newCollectionDB;
};
