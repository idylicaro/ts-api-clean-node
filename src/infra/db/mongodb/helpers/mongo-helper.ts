import { MongoClient, Collection } from 'mongodb'
export const MongoHelper = {
  // atribui null e declara como MongoClient
  client: null as MongoClient,
  url: null as String,

  async connect (url: string): Promise<void> {
    this.url = url
    this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect () {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client || !this.client.isConnected()) {
      await this.connect(this.url)
    }
    return this.client.db().collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}
