# web-cached-persistence

Tools for Cookie Cache and Storage Cache.

# Why?
In some scenerio, we need to read local storage or cookie any and any.
Sometimes, it is not necessary and a waste of system resource.
This lib help to cache

# install and import

```
npm install web-cached-persistence
yarn add web-cached-persistence


import { CachedCookie, CachedStorage } from 'web-cached-persistence'
```

# CachedStorage

```
const CachedTest = new CachedStorage('test') // create a cached local storage whose key is 'test'
CachedTest.set('123') // set local storage 'test' value to '123'.
CachedTest.get() // return '123'
CachedTest.remove() // remove the local storage record
```

# CachedCookie

```
const CachedToken = new CachedCookie('token') // create a cached cookie
CachedToken.get() // return the cookie value and cache it
CachedToken.clear() // make the cookie calue to ''
CachedToken.renew() // refresh the cache and read value from cache, then return the new value.
```
