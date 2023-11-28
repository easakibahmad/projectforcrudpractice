import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) }); //process.cwd() means current project directory

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
