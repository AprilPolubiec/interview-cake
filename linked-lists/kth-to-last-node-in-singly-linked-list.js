// You have a linked list and want to find the kth to last node.

// Write a function kthToLastNode() that takes an integer k and the
// headNode of a singly-linked list, and returns the kth to last node
// in the list.

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// SOLUTION 1: O(n) space, O(n) time
// const kthToLastNode = (k, head) => {
//     let node = head;
//     let nodes = [];
//     while (node) {
//         nodes.push(node)
//         node = node.next;
//     }
//     return nodes[nodes.length - k];
// }

// SOLUTION 2: O(1) space, O(n) time
// const kthToLastNode = (k, head) => {
//   let node = head;
//   let size = 1;
//   while (node) {
//     size++;
//     node = node.next;
//   }

//   node = head;
//   for (let i = 0; i < size - k - 1; i++) {
//     node = node.next;
//   }
//   return node;
// };

const kthToLastNode = (k, head) => {
  if (k < 1) {
    throw new Error("k must be >= 1");
  }
  let start_node = head;
  let end_node = head.next;
  let count = 1;
  while (end_node) {
    if (count < k) {
      count++;
      end_node = end_node.next;
    } else {
      start_node = start_node.next;
      end_node = end_node.next;
    }
  }

  return start_node;
};

const node1 = new LinkedListNode("One");
const node2 = new LinkedListNode("Two");
const node3 = new LinkedListNode("Three");
const node4 = new LinkedListNode("Four");

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(kthToLastNode(2, node1));
