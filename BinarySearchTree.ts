import {Node} from "./Node";

class BinarySearchTree {
    root: Node | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    remove(data: any) {
        let currentNode = this.root;
        if (this.root == null) {
            return false;
        } else {
            if (data == this.root) {
                this.root = null;
            } else if (data < this.root) {
                if (this.root.left != null) {
                    currentNode = this.root.left
                    while (currentNode) {
                        if (data < currentNode) {
                            this.remove(currentNode.left)
                        } else if (data == currentNode) {


                            if (currentNode.right == null) {
                                currentNode = currentNode.left;
                                return this.root
                            } else if (currentNode.right != null) {
                                let mostLeft = currentNode.left;
                                currentNode = currentNode.right
                                if (currentNode.left != null) {
                                    currentNode.left.left = mostLeft;
                                } else {
                                    currentNode.left = mostLeft;
                                }

                            }
                        }
                    }
                }
            } else if (data > this.root) {
                if (this.root.right == null) {
                    return false;
                } else if (data < this.root) {
                    currentNode = this.root.right;

                }
            }
        }
    }
}