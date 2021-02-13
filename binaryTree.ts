class BinaryTree {
  value: string;
  rightNode: BinaryTree | null;
  leftNode: BinaryTree | null;

  constructor(value: string) {
    this.value = value;
    this.rightNode = null;
    this.leftNode = null;
  }

  insertLeft(value: string) {
    let nTree = new BinaryTree(value);
    if (this.leftNode) {
      nTree.leftNode = this.leftNode;
    }
    this.leftNode = nTree;
  }

  insertRight(value: string) {
    let nTree = new BinaryTree(value);
    if (this.rightNode) {
      nTree.rightNode = this.rightNode;
    }
    this.rightNode = nTree;
  }

  printDFS() {
    console.log(this.value, " ");
    this.leftNode && this.leftNode.printDFS();
    this.rightNode && this.rightNode.printDFS();
  }

  printBFS() {
    let queue = [];
    queue.push(this);

    while (queue.length > 0) {
      let d = queue.shift();
      console.log(d.value);

      d.leftNode && queue.push(d.leftNode);
      d.rightNode && queue.push(d.rightNode);
    }
  }
}

let btree = new BinaryTree("a");
btree.insertLeft("b");
btree.insertRight("c");
btree.leftNode.insertRight("d");
btree.rightNode.insertLeft("e");
btree.rightNode.insertRight("f");

console.log(btree.printBFS());
console.log(btree.printDFS());
