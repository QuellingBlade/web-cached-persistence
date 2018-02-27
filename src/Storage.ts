export default {
  set(key: string, data) {
    return localStorage.setItem(key, JSON.stringify(data))
  },
  get(key: string) {
    return JSON.parse(localStorage.getItem(key))
  },
  remove(key: string) {
    return localStorage.removeItem(key)
  }
}
