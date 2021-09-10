/**
 * Write a function reverseWords() that takes a message as an array of characters
 * and reverses the order of the words in place.
 * When writing your function, assume the message contains only letters and spaces,
 * and all words are separated by one space.
 */

// NOT COMPLETE
const reverseWords = (message) => {
  const reverseInPlace = (arr, start, end) => {
    console.log("Reversing: ", arr, start, end);
    for (let i = start; i < Math.ceil(end / 2); ++i) {
      const char = arr[i];
      const swap_index = end - start - 1 - i;
      arr[i] = arr[swap_index];
      arr[swap_index] = char;
    }
    return arr;
  };

  reverseInPlace(message, 0, message.length);
  let start = 0;
  for (let i = 0; i < message.length; ++i) {
    if (message[i] === " " || i === message.length) {
      reverseInPlace(message, start, i);
      start = i + 1;
    }
  }
};

/**
 * i    char  swap_index  message
 * 0    c       15          lake pound steac
 * 1    a       14          lake pound steac
 * 2    k       13          laee pound stkac
 * 3    e       12          laet pound sekac
 * 4            11          laetspound  ekac
 */

const message = [
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l",
];

reverseWords(message);

console.log(message.join(""));
