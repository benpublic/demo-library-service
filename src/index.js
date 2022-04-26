const Koa = require('koa')
const KoaRouter = require('@koa/router')

const bookHandler = require('./books/handlers')

const app = new Koa()
app.use(bookHandler.routes())
app.use(bookHandler.allowedMethods())

app.listen(3000)
