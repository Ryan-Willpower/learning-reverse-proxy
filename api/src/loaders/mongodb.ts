import { MongoClient } from "mongodb"

import { config } from "../config"

export function mongoClient() {
  const URI = dbURI()

  // prevent the "password must be a string" error
  const auth = getURIAuthenticateData()

  const newClient = new MongoClient(URI, {
    auth,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return newClient
}

function dbURI() {
  const { dbHostName, dbPort, dbAuthSource } = config

  const uri = `mongodb://${dbHostName}:${dbPort}?authSource=${dbAuthSource}`

  return uri
}

function getURIAuthenticateData() {
  return {
    user: encodeURIComponent(config.dbUsername),
    password: encodeURIComponent(config.dbPassword),
  }
}
