// You have a singly-linked list and want to check if it contains a cycle.
// Write a function containsCycle() that takes the first node in a singly-linked list and 
// returns a boolean indicating whether the list contains a cycle.

class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }


const node1 = new LinkedListNode("One");
const node2 = new LinkedListNode("Two")
const node3 = new LinkedListNode("Three")


node1.next = node2;
node2.next = node3;
node3.next = node1;

// SOLUTION 1 : O(N) time, O(N) space
// const containsCycle = (head) => {
//   var nodes = new Set();
//   var node = head;
//   while (node) {
//     if (nodes.has(node)) {
//       return true;
//     }
//     nodes.add(node);
//     node = node.next;
//   }
//   return false;
// }

// SOLUTION 1 : O(N) time, O(1) space
const containsCycle = (head) => {
  var fast_loop_node = head;
  var slow_loop_node = head;

  while (fast_loop_node && fast_loop_node.next) {
    fast_loop_node = fast_loop_node.next.next;
    slow_loop_node = slow_loop_node.next;
    if (fast_loop_node === slow_loop_node) return true;
  }

  return false;
}

console.log(containsCycle(node1))