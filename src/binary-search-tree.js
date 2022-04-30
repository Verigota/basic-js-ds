const { NotImplementedError, Node } = require('../extensions/index.js');
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addElem(this.rootNode, data);

    function addElem(node, data) {
      if(!node) {
        return new Node(data)
      }

      if(node.data === data) {
        return node; 
      }

      if(node.data < data) {
        node.right = addElem(node.right, data);
      } else {
        node.left = addElem(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return containData(this.rootNode, data);

    function containData(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      if(data > node.data){
        return containData(node.right, data)
      } else {
        return containData(node.left, data)
      }

    }
  }

  find(elem) {
    return findData(this.rootNode, elem);

    function findData(node, elem) {
      if(!node) {
        return null;
      }

      if(node.data === elem) {
        return node;
      }

      if(elem > node.data){
        return findData(node.right, elem);
      } else {
        return findData(node.left, elem);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
    
    function removeNode(node, data) {
      if(!node) {
        return null;
      }

      if(data > node.data){
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let nodeFromRight = node.right;
        while (nodeFromRight.left){
          nodeFromRight = nodeFromRight.left;
        }
        node.value = nodeFromRight.value;

        node.right = removeNode(node.right, nodeFromRight.data)
        return node;
      }
    }
  }

  min() {
    return findMin(this.rootNode);
    function findMin(node) {
      if(node.data) {
        if(!node.left) {
          return node.data;
        } else {
          return findMin(node.left);
        }
      } else {
        return null;
      }
    }
  }

  max() {
    return findMax(this.rootNode);
    function findMax(node) {
      if(node.data) {
        if(!node.right) {
          return node.data;
        } else {
          return findMax(node.right);
        }
      } else {
        return null;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};