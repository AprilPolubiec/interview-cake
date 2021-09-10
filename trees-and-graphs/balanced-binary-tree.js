/**
 * Write a function to see if a binary tree is "superbalanced"
 * (a new tree property we just made up).
 * A tree is "superbalanced" if the difference between the depths of
 * any two leaf nodes is no greater than one.
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

const isBalanced = (root) => {
  const depths = [];
  if (!root || (!root.left && !root.right)) {
    return true;
  }
  // List of tuples (node, depth)
  const nodes = [];
  nodes.push([root, 0]);

  while (nodes.length) {
    const node_pair = nodes.pop();
    const node = node_pair[0];
    const depth = node_pair[1];

    if (!node.left && !node.right) {
      //Leaf - record depth
      if (depths.length === 0) {
        depths.push(depth);
      } else {
        const diff = Math.abs(depths[0] - depth);
        if (diff > 1) {
          return false;
        }
      }
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
      console.log(nodes)
    }
  }
  return true;
};

var node1 = new BinaryTreeNode("One");
var node2 = node1.insertLeft("Two");
var node3 = node1.insertRight("Three");
var node4 = node2.insertLeft("Four");
var node5 = node2.insertRight("Five");

console.log(isBalanced(node1)); // Expect true

node1 = new BinaryTreeNode("One");
node2 = node1.insertLeft("Two");
node3 = node1.insertRight("Three");
node4 = node2.insertLeft("Four");
node5 = node4.insertLeft("Five");

console.log(isBalanced(node1)); // Expect false
