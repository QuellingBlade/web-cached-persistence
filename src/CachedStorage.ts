import Storage from './Storage'

export default class CachedStorage {
  storageKey: string
  cache: string

  constructor(key: string) {
    this.storageKey = key
    this.cache = ''
  }

  set(val) {
    this.cache = ''
    Storage.set(this.storageKey, val)
  }

  get() {
    if (this.cache) {
      return this.cache
    }

    this.cache = Storage.get(this.storageKey)
    return this.cache
  }

  remove() {
    this.cache = ''
    Storage.remove(this.storageKey)
  }
}
