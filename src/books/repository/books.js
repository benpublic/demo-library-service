const booksList = require('../../../downstream-fixtures/all-books.json')
const { throwUnauthorisedError } = require('../../errors')
const { truncate, formatDateString } = require('../../utils')

const validateUserId = (userId) => userId && userId.length === 8

const fetchBooksList = (userId) => {
  if (!validateUserId(userId)) {
    throwUnauthorisedError()
  }

  return Promise.resolve(booksList)
}

const mapBooksList = (booksList) => {
  return booksList.map(({ book }) => ({
    ...book,
    blurb: `${truncate(book.blurb, 80)}...`,
    borrowing_history: book.borrowing_history.map(borrow => ({
      ...borrow,
      date_borrowed: formatDateString(borrow.date_borrowed),
      date_returned: formatDateString(borrow.date_returned)
    }))
  }))
}

module.exports = {
  fetchBooksList,
  mapBooksList
}
