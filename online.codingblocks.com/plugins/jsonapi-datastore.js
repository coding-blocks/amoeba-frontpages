import { JsonApiDataStore, JsonApiDataStoreModel } from 'jsonapi-datastore'

export default ({ app }, inject) => {
  const store = new JsonApiDataStore()
  inject('jsonApiStore', store)
}