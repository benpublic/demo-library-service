const throwUnauthorisedError = () => {
  const error = {
    status: 401,
    name: 'Unauthorised',
    message: "Oi! No unauthorised access to the esteemed downstream service! That's enough of that!"
  }

  throw error
}

module.exports = {
  throwUnauthorisedError
}
