const booksRepository = require('../repository')

module.exports = async (ctx, next) => {
  const userId = ctx.query?.userId
  if (!userId) {
    ctx.status = 400
  } else {
    try {
      const response = await booksRepository.get(userId)
      ctx.body = response
      ctx.status = 200
    } catch (error) {
      ctx.status = error.status
      ctx.body = error.message
    }
  }

  await next()
}
