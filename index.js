function sum(a, b) {
  return a + b;
}

function diff(a, b) {
return a - b;
}

describe('', () => {});

function throwError(a) {
  a = 'Here\'s your error ' + a;
  throw new Error(a);
}

module.exports = sum, diff, throwError;
