const Koa = require('koa')
const KoaRouter = require('@koa/router')

// const allBooks = require('./allBooks/handlers')
// const bookDetails = require('./policy-details/handlers')

const router = new KoaRouter()
// router.use(allBooks.routes())
// router.use(allBooks.allowedMethods())
// router.use(bookDetails.routes())
// router.use(bookDetails.allowedMethods())

const app = new Koa()
app.listen(3000)
