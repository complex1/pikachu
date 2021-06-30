const axios = require('axios').default
const ResponseDao = require('../dao/resposce')

const httpRequest = (config, cb) => {
  console.log(config)
  const responseDao = new ResponseDao()
  const startTime = new Date().valueOf()
  axios(config).then(res => {
    const endTime = new Date().valueOf()
    responseDao.duration = endTime - startTime
    responseDao.responseBody = res.data
    responseDao.responseHeader = res.headers
    responseDao.statusCode = res.statusCode
    responseDao.requestConfig = config
    cb(responseDao)
  }).catch(err => {
    const endTime = new Date().valueOf()
    responseDao.duration = endTime - startTime
    responseDao.error = true
    responseDao.setErrorMessage({message: err.message, errorObj: err.response && err.response.data})
    responseDao.requestConfig = config
    cb(responseDao)
  })
}

module.exports = httpRequest