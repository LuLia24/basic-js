const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 * 1, 5, 2
 */
function deleteDigit(n) {
  const arr = String(n).split(''); // ['1', '5', '2']
  let maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    const tempArr = [...arr];
    tempArr.splice(i, 1);
    maxArr.push(Number(tempArr.join('')));
  }
  return Math.max(...maxArr);
}

module.exports = {
  deleteDigit,
};
