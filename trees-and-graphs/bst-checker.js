/**
 * Write a function to check that a binary tree is a valid binary search tree.
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

const isBinarySearchTree = (root) => {
  // DFS
  let bounds = [];
  bounds.push({
    node: root,
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
  });

  while (bounds.length) {
    // const stack = bounds.map((b) => {
    //   return { val: b.node.value, min: b.min, max: b.max };
    // });
    // console.log(stack);
    const { node, min, max } = bounds.pop();
    if (node.value <= min || node.value >= max) return false;

    // we good, check next node
    if (node.left) {
      bounds.push({
        node: node.left,
        min,
        max: node.value,
      });
    }

    if (node.right) {
      bounds.push({
        node: node.right,
        min: node.value,
        max,
      });
    }
  }

  return true;
};

var node1 = new BinaryTreeNode(35);
var node2 = node1.insertLeft(30);
var node3 = node1.insertRight(37);
var node4 = node2.insertLeft(20);
var node5 = node2.insertRight(33);

console.log(isBinarySearchTree(node1)); // Expect true

node1 = new BinaryTreeNode(35);
node2 = node1.insertLeft(30);
node3 = node1.insertRight(29);
node4 = node2.insertLeft(20);
node5 = node4.insertRight(33);

console.log(isBinarySearchTree(node1)); // Expect false
