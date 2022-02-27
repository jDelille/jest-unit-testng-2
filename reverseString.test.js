const reverseString = require('./reverseString')

test("reverse string function exists", () => {
 expect(reverseString).toBeDefined();
})

test('String should reverse', () => {
 expect(reverseString('hello')).toEqual('olleh')
})