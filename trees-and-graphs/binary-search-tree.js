// https://www.youtube.com/watch?v=6JeuJRqKJrI&list=PLu_sD_1ixKmhufvEeg2cCq4Wah7t3f91d&index=4

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(val) {
    this.root = new Node(val);
    this.count = 1; // # of nodes
  }

  size() {
    return this.count;
  }

  insert(val) {
    this.count++;
    let new_node = new Node(val);

    const searchTree = (node) => {
      if (val < node.value) {
        if (!node.left) {
          node.left = new_node;
        } else {
          searchTree(node.left);
        }
      } else if (val > node.value) {
        if (!node.right) {
          node.right = new_node;
        } else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    //Find left-most leaf node
    let current_node = this.root;
    while (current_node.left) {
      current_node = current_node.left;
    }
    return current_node.value;
  }

  max() {
    //Find right-most leaf node
    let current_node = this.root;
    while (current_node.right) {
      current_node = current_node.right;
    }
    return current_node.value;
  }

  contains(val) {
    let current_node = this.root;
    while (current_node) {
      if (val === current_node.value) {
        return true;
      }
      if (val < current_node.value) {
        current_node = current_node.left;
      } else if (val > current_node.value) {
        current_node = current_node.right;
      }
    }
    return false;
  }

  // DFS = branch by branch

  // In order:
  // Process left, then root, then right
  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      result.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  // Pre order:
  // Process root, then left, then right
  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      result.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);

    return result;
  }

  // Post order:
  // Process left, then right, then root
  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      result.push(node.value);
    };

    traverse(this.root);

    return result;
  }

  // BFS  = level by level
  // Use a queue
  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let current_node = queue.shift();
      result.push(current_node.value);
      if (current_node.left) {
        queue.push(current_node.left);
      }
      if (current_node.right) {
        queue.push(current_node.right);
      }
    }

    return result;
  }
}

const bst = new BST(15);
bst.insert(3);
bst.insert(2);
bst.insert(12);
bst.insert(36);
bst.insert(28);
bst.insert(39);

console.log(bst);
console.log(bst.size());
console.log(bst.min());
console.log(bst.max());
console.log(bst.contains(2));
console.log(bst.contains(9));

console.log(bst.dfsInOrder());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());

console.log(bst.bfs());


