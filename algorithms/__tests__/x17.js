const { x17 } = require('../../index.js');
const assert = require('assert');

test('Should return properly hashed X17 buffer', () => {
  const data = Buffer.from('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
  var hashed = x17(data);
  expect(hashed.toString('hex')).toBe('89607959ef6b688efdf879cfaa00df614ead6b43b13f617ee72251c802623fa7')
})


test('should error and expect one argument to be hashed', () => {
  expect(() => {
    x17();
  }).toThrowError(/exactly one argument/);
})


test('should error and expect one argument instead of two', () => {
  const data = Buffer.from('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
  expect(() => {
    x17(data, data);
  }).toThrowError(/exactly one argument/)
})


test('should throw if the argument is not buffer', () => {
  expect(() => {
    x17("some string");
  }).toThrowError(/be a buffer object/)
})
