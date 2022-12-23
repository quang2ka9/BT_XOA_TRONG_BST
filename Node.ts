export class Node {
    data: Node;
    left: Node | null;
    right: Node | null;

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}