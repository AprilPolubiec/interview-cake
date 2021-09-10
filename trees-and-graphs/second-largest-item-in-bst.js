/**
 * Write a function to find the 2nd largest element in a binary search tree.
 */

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// SOLUTION 1: oops I thought it was not a BST!
// const findSecondLargest = (node) => {
//   // DFS, BFS
//   // Goal: find Max & second Max
//   // Binary search tree or no?
//   var max = Number.MIN_SAFE_INTEGER;
//   var second_max = Number.MIN_SAFE_INTEGER;
//   var current_node = node;
//   const nodeStack = [current_node];

//   while (nodeStack.length > 0) {
//     const node = nodeStack.pop();

//     if (node.value > max) {
//       second_max = max;
//       max = node.value;
//     } else if (node.value > second_max) {
//       second_max = node.value;
//     }

//     if (node.left) {
//       nodeStack.push(node.left);
//     }
//     if (node.right) {
//       nodeStack.push(node.right);
//     }
//   }
//   return second_max;
// };

const findSecondLargest = (root) => {
  var current_node = root;
  var max = Number.MIN_SAFE_INTEGER;
  var second_max = Number.MIN_SAFE_INTEGER;
  while (current_node) {
    if (current_node.value > second_max) {
      second_max = Math.min(max, current_node.value);
      max = Math.max(max, current_node.value);
    }
    if (!current_node.right && current_node.left) {
      current_node = current_node.left;
    } else {
      current_node = current_node.right;
    }
  }
  return second_max;
};

var node1 = new BinaryTreeNode(35);
var node2 = node1.insertLeft(30);
var node3 = node1.insertRight(37);
var node4 = node2.insertLeft(20);
var node5 = node2.insertRight(33);

// console.log(findSecondLargest(node1)); // Expect 35

node1 = new BinaryTreeNode(5);
node2 = node1.insertLeft(3);
node3 = node1.insertRight(8);
node4 = node2.insertLeft(1);
node5 = node2.insertRight(4);
node6 = node3.insertLeft(7);
node7 = node3.insertRight(12);
node8 = node7.insertLeft(10);
node9 = node8.insertLeft(9);
node10 = node8.insertRight(11);

console.log(findSecondLargest(node1)); // Expect 11
