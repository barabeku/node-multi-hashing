const { scrypt, scryptn, groestl, x17, blake } = require('../../index.js');

const BASE_INPUT_HASH = Buffer.from('1234test1234test1234test1234dasd');

test('scryptn', () => {
  expect(scryptn(BASE_INPUT_HASH, 20).toString('hex')).toBe("5e7af685e53f05f6d3267e2f887658e41003278b6d5c0c8e80eadc2b8841c03a")
})

test('blake', () => {
  expect(blake(BASE_INPUT_HASH).toString('hex')).toBe("f7b19ee7b108f543e981ded94741f26faaa97d1f629742a7389d38fa06bc3a75");
})

test('Groestl', () => {
  expect(groestl(BASE_INPUT_HASH).toString('hex')).toBe("b847a7c01c812ed224282877a6c0839731f0109daded4db811a1a67756d71c8d");
})

// test('adds 1 + 2 to equal 3', () => {
//   console.log("Testing Groestl");
//   console.log(lyra2re(BASE_INPUT_HASH).toString('hex'));
// })

test('X17', () => {
  expect(x17(BASE_INPUT_HASH).toString('hex')).toBe("a63c4d9113fc871b979eae5b7fc0255a5b25a96ef7041912bf215623e4756fc7");
})

test('scrypt pure', () => {
  expect(scrypt(BASE_INPUT_HASH, 1024, 32).toString('hex')).toBe("5f917c1cc70f7f3dcf6d89c357cf93e80e82ecfd49397c0f9fadd426ec58da1c");
})