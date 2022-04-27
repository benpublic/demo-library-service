const downstreamFixture = require('../../../downstream-fixtures/all-books.json')
const expectedResponse = require('../../../test-fixtures/books-list-response')
const { fetchBooksList, mapBooksList } = require('./books')

describe('Repository for fetching & mapping list of books', () => {
  describe('Downstream service call', () => {
    const userId = 'strfx-01'

    test('Should return JSON data as object', async () => {
      expect(fetchBooksList(userId)).resolves.toEqual(downstreamFixture)
    })

    test('Should throw an error if missing userId', () => {
      try {
        expect(fetchBooksList(null)).rejects.toThrow({
          status: 401,
          name: 'Unauthorised',
          message: "Oi! No unauthorised access to the esteemed downstream service! That's enough of that!"
        })
      } catch (error) {}
    })

    test('Should throw an error if given invalid userId', () => {
      try {
        expect(fetchBooksList('slppyt-0ad')).rejects.toThrow({
          status: 401,
          name: 'Unauthorised',
          message: "Oi! No unauthorised access to the esteemed downstream service! That's enough of that!"
        })
      } catch (error) {}
    })
  })

  describe('Mapping downstream data to desired shape', () => {
    it('Should map downstream data correctly', () => {
      expect(mapBooksList(downstreamFixture)).toStrictEqual(expectedResponse)
    })
  })
})
