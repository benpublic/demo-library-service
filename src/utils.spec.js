const { truncate, formatDateString } = require('./utils')

describe('Utility functions', () => {
  describe('truncate function', () => {
    test('Truncates to 50 characters by default', () => {
      expect(truncate('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890')).toStrictEqual('12345678901234567890123456789012345678901234567890')
    })

    test('Truncates to custom number of characters', () => {
      expect(truncate('1234567890123456789012', 4)).toStrictEqual('1234')
    })

    test('Does not alter strings shorter than desired length', () => {
      expect(truncate('1', 5)).toStrictEqual('1')
    })
  })

  describe('formatDateString function', () => {
    test('Formats date correctly', () => {
      expect(formatDateString('2003-02-23T13:14:00')).toStrictEqual('23/02/2003')
    })
  })
})
