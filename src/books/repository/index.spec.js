const booksRepository = require('.')
const expectedResponse = require('../../../test-fixtures/books-list-response')

describe('Books repository export', () => {
  const userId = 'strfx-01'

  it('Fetches and maps books list', async () => {
    expect(booksRepository.get(userId)).resolves.toStrictEqual(expectedResponse)
  })
})
