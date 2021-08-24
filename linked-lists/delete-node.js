// Delete a node from a singly-linked list,
// given only a variable pointing to that node.


class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Garbage collector will take care of the rest here
function deleteNode(node) {
    node.value = node.next.value;
    node.next = node.next.next;
    return;
}

const a = new LinkedListNode("A");
const b = new LinkedListNode("B");
const c = new LinkedListNode("C");

a.next = b;
b.next = c;

deleteNode(b);
console.log(a)

// Pros: O(1) space & time
// Cons: dangling pointers & previous pointers may be in correct; this is an in-place solution