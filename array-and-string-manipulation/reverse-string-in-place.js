/**
 * Write a function that takes an array of characters and reverses the letters in place.
 */

const reverseInPlace = (str) => {
  for (let i = 0; i < Math.ceil(str.length / 2); ++i) {
    const char = str[i];
    const swap_index = str.length - 1 - i;
    str[i] = str[swap_index];
    str[swap_index] = char;
  }
  return str;
};

/**
 * abcde
 * i    char    swap_index  str[i]  str[swap]   str
 * 0    a       4           e       a           ebcda
 * 1    b       3           d       b           edcba
 * 2    c       2           c       c           edcba
 *
 */

/**
 * abcd
 * i    char    swap_index  str[i]  str[swap]   str
 * 0    a       3           d       a           dbca
 * 1    b       2           c       b           dcba
 *
 */

console.log(reverseInPlace(["a", "b", "c", "d", "e"])); // "edcba"
console.log(reverseInPlace(["a", "b", "c", "d"])); // "dcba"
console.log(reverseInPlace(["a"])); // "a"

// abcde
// [0] => [4]
// [1] => [3]
// [2] => [2]
// [3] => [1]
// [4] => [0]

// abcd
// [0] => [3]
// [1] => [2]
// [2] => [1]
// [3] => [0]
