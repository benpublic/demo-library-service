const getHandler = require('./get')
const booksRepository = require('../repository')
jest.mock('../repository')

const userId = '123123-01'
const next = jest.fn()

describe('GET /books handler', () => {
  describe('Successful responses', () => {
    let ctx

    beforeAll(() => {
      ctx = {
        query: { userId }
      }
    })

    test('should return a status 200 response', async () => {
      await getHandler(ctx, next)
      expect(ctx.status).toStrictEqual(200)
    })

    test('should call fetchBooks from repository with userId', async () => {
      await getHandler(ctx, next)
      expect(booksRepository.get).toBeCalledWith(userId)
    })
  })

  describe('Unsuccessful responses', () => {
    let ctx

    beforeAll(() => {
      ctx = { query: {} }
    })

    test('should return a status 400 when missing user id', async () => {
      await getHandler(ctx, next)
      expect(ctx.status).toStrictEqual(400)
    })
  })
})
