const getHandler = require('./get')
const fetchBooks = require('../repository')
jest.mock('../repository')

const userId = '123123-01'
const next = jest.fn()

describe('GET /books handler', () => {
  describe('Successful responses', () => {
    let ctx;

    beforeAll(() => {
      ctx = {
        state: {
          userId,
        },
      }
    })

    test('should return a status 200 response', () => {
      await getHandler(ctx, next)
      expect(ctx.status).toStrictEqual(200)
    })

    test('should call fetchBooks from repository with userId', async () => {
      await getHandler(ctx, next)
      expect(fetchBooks).toBeCalledWith(userId)
    })
  })

  describe('Unsuccessful responses', () => {
    let ctx;

    beforeAll(() => {
      ctx = {state: {}}
    })

    test('should return a status 400 when missing user id', () => {
      await getHandler(ctx, next)
      expect(ctx.status).toStrictEqual(400)
    })
  })
})
