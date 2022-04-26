const Koa = require('koa')
const KoaRouter = require('@koa/router')

const bookHandler = require('./books/handlers')

const router = new KoaRouter()
router.use(bookHandler.routes())
router.use(bookHandler.allowedMethods())

const app = new Koa()
app.listen(3000)
