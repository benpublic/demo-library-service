const truncate = (string, targetLength = 50) => `${string}`.slice(0, targetLength)

const formatDateString = (dateString) => new Date(dateString).toLocaleDateString()

module.exports = {
  truncate,
  formatDateString
}
