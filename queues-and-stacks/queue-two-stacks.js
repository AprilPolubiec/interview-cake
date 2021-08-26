/**
 * Implement a queue ↴ with 2 stacks. ↴ Your queue should have an enqueue and
 * a dequeue method and it should be "first in first out" (FIFO).
 *
 * Optimize for the time cost of m calls on your queue. These can be any mix of
 * enqueue and dequeue calls.
 */

class Stack {
  constructor() {
    this.items = [];
  }

  push() {
    this.items.push();
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

class Queue {
  constructor() {}

  dq() {}

  enq() {}
}
