const fetchBooks = require('../repository')

module.exports = async (ctx, next) => {
  const userId = ctx.query?.userId
  if (!userId) {
    ctx.status = 400
  } else {
    const response = await fetchBooks(userId)
    ctx.body = response
    ctx.status = 200
  }

  await next()
}
