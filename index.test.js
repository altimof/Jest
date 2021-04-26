const sum = require('./index');
const throwError = require('./index');

console.log('Testing sum() function');
test('Adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

//test('Adds 1 + 2 not to equal 3', () => {
//  expect(sum(1, 2)).not.toBe(3);
//});

console.log('Testing throwError(\'OUCH!!!\') function');
test('Checks for error', () => {
  expect(() => throwError('OUCH!!!').toThrow(/OUCH/));
});