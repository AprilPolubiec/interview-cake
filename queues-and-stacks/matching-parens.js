/**
 * I like parentheticals (a lot).

"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, 
finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the first parenthesis), 
the output should be 79 (position of the last parenthesis).
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

// SOLUTION 1: Using stacks; could instead use a counter to reduce space to O(1)
const findClosingParen = (str, start) => {
  if (str.length < 2) {
    throw new Error("String must be at least 2 chars long");
  }
  let paren_stack = new Stack();
  for (let i = start; i < str.length; ++i) {
    if (str.charAt(i) === "(") {
      paren_stack.push("(");
    } else if (str.charAt(i) === ")") {
      paren_stack.pop();
    }
    if (!paren_stack.peek()) {
      return i;
    }
  }
  return -1;
};

const str =
  "Sometimes (when I nest them (my parentheticals) too much (like this (and this)))) they get confusing.";
console.log(findClosingParen(str, 10));
