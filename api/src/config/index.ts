import dotenv from "dotenv"

const isProduction = process.env.NODE_ENV === "production"

const localVariable = dotenv.config({
  path: isProduction ? `.production.env` : `.env`,
})

if (!localVariable) {
  throw new Error("no .env found!")
}

export const config = {
  dbUsername: process.env.MONGO_INITDB_ROOT_USERNAME,
  dbPassword: process.env.MONGO_INITDB_ROOT_PASSWORD,
  dbPort: process.env.MONGO_DB_PORT,
  dbAuthSource: process.env.MONGO_AUTH_SOURCE,
  dbHostName: process.env.MONGO_HOSTNAME,
  port: Number(process.env.NODE_PORT) || 8080,
  hostname: process.env.NODE_HOSTNAME || "localhost",
}
