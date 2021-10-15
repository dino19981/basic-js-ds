const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(num) {
    let flag = true;
    let tree = this.tree;
    if (tree === null) {
      this.tree = new Node(num);
    } else {
      while (flag) {
        if (tree.data > num) {
          if (tree.left === null) {
            tree.left = new Node(num);
            flag = false;
          } else {
            tree = tree.left;
          }
        } else {
          if (tree.right === null) {
            tree.right = new Node(num);
            flag = false;
          } else {
            tree = tree.right;
          }
        }
      }
    }
  }

  has(num) {
    let tree = this.tree;
    if (tree === null) {
      return false;
    } else {
      while (true) {
        if (tree === null) {
          return false;
        } else if (tree.data == num) {
          return true;
        }
        if (tree.data > num) {
          tree = tree.left;
        } else {
          tree = tree.right;
        }
      }
    }
  }

  find(num) {
    let tree = this.tree;

    if (tree === null) {
      return false;
    } else {
      while (true) {
        if (tree === null) {
          return null;
        } else if (tree.data == num) {
          return tree;
        }
        if (tree.data > num) {
          tree = tree.left;
        } else {
          tree = tree.right;
        }
      }
    }
  }

  remove(data) {
    this.tree = this.removeNode(this.tree, data);
  }

  removeNode(node, data) {
    let tree = node;
    if (tree === null) {
      return null;
    } else if (data < tree.data) {
      tree.left = this.removeNode(tree.left, data);
      return tree;
    } else if (data > tree.data) {
      tree.right = this.removeNode(tree.right, data);
      return tree;
    } else {
      if (tree.left === null && tree.right === null) {
        tree = null;
        return tree;
      }

      if (tree.left === null) {
        tree = tree.right;
        return tree;
      } else if (tree.right === null) {
        tree = tree.left;
        return tree;
      }

      const needMinNode = this.findMinNode(tree.right);
      tree.data = needMinNode.data;
      tree.right = this.removeNode(tree.right, needMinNode.data);
      return tree;
    }
  }

  findMinNode(node) {
    let tree = node;
    if (tree.left === null) {
      return tree;
    } else {
      return this.findMinNode(node.left);
    }
  }
  min() {
    let tree = this.tree;
    let min = 0;
    if (tree === null) {
      return null;
    } else {
      while (true) {
        if (tree.left === null) {
          min = tree.data;
          break;
        }
        tree = tree.left;
      }
    }
    return min;
  }

  max() {
    let tree = this.tree;
    let max = 0;
    if (tree === null) {
      return null;
    } else {
      while (true) {
        if (tree.right == null) {
          max = tree.data;

          break;
        }
        tree = tree.right;
      }
    }
    return max;
  }
};
