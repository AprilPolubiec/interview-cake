// Write a function for reversing a linked list. Do it in place.
// Your function will have one input: the head of the list.
// Your function should return the new head of the list.

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const reverseList = (head) => {
  let node = head;
  let previous_node = null;
  let next_node = null;
  while (node) {
    next_node = node.next;
    node.next = previous_node;
    previous_node = node;
    node = next_node;
  }
  return previous_node;
};

const node1 = new LinkedListNode("One");
const node2 = new LinkedListNode("Two");
const node3 = new LinkedListNode("Three");
const node4 = new LinkedListNode("Four");

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(reverseList(node1));
