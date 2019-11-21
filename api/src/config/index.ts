import dotenv from "dotenv"

const localVariable = dotenv.config()

if (!localVariable) {
  throw new Error("no .env found!")
}

export const config = {
  dbUsername: process.env.MONGO_INITDB_ROOT_USERNAME,
  dbPassword: process.env.MONGO_INITDB_ROOT_PASSWORD,
  dbPort: process.env.MONGO_DB_PORT,
  port: Number(process.env.NODE_PORT) || 8080,
  hostname: process.env.NODE_HOSTNAME || "localhost",
}
