const Koa = require('koa')
const bookHandler = require('./books/handlers')

const app = new Koa()
app.use(bookHandler.routes())
app.use(bookHandler.allowedMethods())

module.exports = app.listen(3000)
