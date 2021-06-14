const httpRequest = require('./httpRequest')
const Server = require('../modal/server')
const swaggerService = {}

swaggerService.proxyCall = (config, cb) => {

  let fullUrl = config.proto + config.baseUrl + config.url

  const itr = fullUrl.matchAll('{.*?}')
  let result = itr.next()
  while (!result.done) {
    const key = result.value[0]
    const value = config.params[key.slice(1, -1).trim()]
    fullUrl = fullUrl.replace(key, value)
    result = itr.next()
  }

  let pathVariable = ''
  const querys = config.query || {}
  Object.keys(querys).forEach((value, index, arr) => {
    if (index === 0) {
      pathVariable += '?' 
    }
    pathVariable += `${value}=${querys[value]}`
    if (index !== arr.length - 1) {
      pathVariable += '&'
    }
  })

  fullUrl += pathVariable
  
  const requestBody = {}
  requestBody.url = fullUrl
  requestBody.method = config.method || 'GET'
  requestBody.headers = config.headers || {}
  if (typeof config.data === 'object' && requestBody.method !== 'GET') {
    requestBody.headers['Content-type'] = 'application/json'
  }
  if (requestBody.method !== 'GET') {
    requestBody.data = config.data
  }
  httpRequest(requestBody, cb)
}

swaggerService.addServer = (server, cb) => {
  const newServer = new Server(server)
  newServer.save(cb)
}

swaggerService.getAllServers = (cb) => {
  const newServer = new Server()
  newServer.getAll(cb)
}

swaggerService.deleteServer = (id, cb) => {
  const newServer = new Server()
  newServer.deleteById(id, cb)
}

module.exports = swaggerService