// You've already implemented this Stack class:

class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

/**
 * Use your Stack class to implement a new class MaxStack with a method
 * getMax() that returns the largest element in the stack. getMax() should
 * not remove the item.
 *
 * Your stacks will contain only integers.
 */

class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maxesStack = new Stack();
  }

  getMax() {
    return this.maxesStack.peek();
  }

  // Push a new item onto the stack
  push(item) {
    if (!this.maxesStack.peek() || item >= this.maxesStack.peek()) {
      this.maxesStack.push(item);
    }
    this.stack.push(item);
  }

  // Remove and return the last item
  pop() {
    let removed = this.stack.pop();
    if (removed === this.maxesStack.peek()) {
      this.maxesStack.pop();
    }
    return removed;
  }

}
