const { mapBooksList, fetchBooksList } = require('./books')

module.exports = {
  get: async (userId) => {
    const downstreamBooksList = await fetchBooksList(userId)
    return mapBooksList(downstreamBooksList)
  }
}
