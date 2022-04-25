const Router = require('@koa/router')
// const getHandler = require('./get')

const router = new Router()
router.get('/policies', getHandler)

module.exports = router
