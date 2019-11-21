import { mongoClient } from "../loaders/mongodb"

interface MongoDocument {
  dbName: string
  collection: string
}

export class UserService {
  private dbClient = mongoClient()

  async getAllUser() {
    try {
      const userCollection = await this.getUserCollection()

      const allUser = userCollection.find({})

      return allUser.toArray()
    } catch (error) {
      throw new Error(`Error connecting database: ${error}`)
    } finally {
      await this.closeDatabaseConnection()
    }
  }

  private async getUserCollection() {
    await this.connectDatabase()
    const collection = this.getCollection({
      dbName: "allUser",
      collection: "user",
    })

    return collection
  }

  private async connectDatabase() {
    await this.dbClient.connect()
  }

  private getCollection(document: MongoDocument) {
    const db = this.dbClient.db(document.dbName)

    return db.collection(document.collection)
  }

  private async closeDatabaseConnection() {
    await this.dbClient.connect()
  }

  async find(name: string) {
    try {
      const userCollection = await this.getUserCollection()

      const result = await userCollection.findOne({ name })

      return result
    } catch (error) {
      throw new Error(`Error connecting database: ${error}`)
    } finally {
      await this.closeDatabaseConnection()
    }
  }

  async add(name: string) {
    try {
      const userCollection = await this.getUserCollection()

      await userCollection.insertOne({ name })
    } catch (error) {
      throw new Error(`Error connecting database: ${error}`)
    } finally {
      await this.closeDatabaseConnection()
    }
  }
}
