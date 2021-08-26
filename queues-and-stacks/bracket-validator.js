/**
 * You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. 
 * To save you both some time, you decide to write a braces/brackets/parentheses validator.

    Let's say:

    '(', '{', '[' are called "openers."
    ')', '}', ']' are called "closers."
    Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

    Examples:

    "{ [ ] ( ) }" should return true
    "{ [ ( ] ) }" should return false
    "{ [ }" should return false
 */

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}

const isValid = (str) => {
  if (!str.match(/[\[\]\{\}\(\)]+/) || str.length < 2) {
    throw new Error("Invalid string");
  }

  const openers = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  let stack = new Stack();
  for (let i = 0; i < str.length; ++i) {
    const char = str.charAt(i);
    switch (char) {
      case "{":
      case "[":
      case "(":
        stack.push(char);
        break;
      case "}":
      case "]":
      case ")":
        if (stack.peek() === openers[char]) {
          stack.pop();
        } else {
          return false;
        }
      default:
        break;
    }
  }
  return true;
};

// console.log(isValid("abc"));
console.log(isValid("{[]()}"));
console.log(isValid("{[(])}"));
console.log(isValid("{[}"));
