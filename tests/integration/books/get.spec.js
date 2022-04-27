const expectedResponse = require('../../../test-fixtures/books-list-response')
const server = require('../../../src/index')
const request = require('supertest')

describe('GET /books', () => {
  afterAll(() => {
    server.close()
  })

  it('Should respond with a list of books when passed a valid userId', async () => {
    const response = await request(server)
      .get('/books?userId=strfx-01')
      .expect(200)

    expect(response.body).toStrictEqual(expectedResponse)
  })

  it('Should respond with a 400 when not passed a userId', async () => {
    const response = await request(server)
      .get('/books')
      .expect(400)

    expect(response.text).toStrictEqual('Bad Request')
  })

  it('Should respond with a 401 when passed an invalid userId', async () => {
    const response = await request(server)
      .get('/books?userId=slppyt-0ad')
      .expect(401)

    expect(response.text).toStrictEqual("Oi! No unauthorised access to the esteemed downstream service! That's enough of that!")
  })
})
