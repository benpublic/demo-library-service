const downstreamData = require('../../../downstream-fixtures/all-books.json')

module.exports = async (userId) => { 
  return Promise.resolve(downstreamData)
}
