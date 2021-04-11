import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Function works in a wrong way');
}

if (capitalize('') !== '') {
  throw new Error('Function should return an empty string');
}

console.log('All tests passed');
