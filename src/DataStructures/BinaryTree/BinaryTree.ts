/**
 * Binary Tree datastructure
 */
class BinaryTree {
    value: any;
    depth: number;
    left: BinaryTree | null;
    right: BinaryTree | null;

    /**
     * 
     * @param value | Any data
     * @param depth | Number | Level of depth per root Tree
     */
    constructor(value: any, depth = 1) {
        this.value = value;
        this.depth = depth;
        this.left = null;
        this.right = null;
    }

    insert(value: any) {
        if (value < this.value) {
            if (!this.left) {
                this.left = new BinaryTree(value, this.depth + 1);
            } else {
                this.left.insert(value);
            }
        } else {
            if (!this.right) {
                this.right = new BinaryTree(value, this.depth + 1);
            } else {
                this.right.insert(value);
            }
        }
    }
    
    getNodeByValue(value: any): BinaryTree | null {
        if (this.value === value) {
            return this;
        } else if ((this.left) && (value < this.value)) {
            return this.left.getNodeByValue(value);
        } else if (this.right) {
            return this.right.getNodeByValue(value);
        } else {
            return null;
        }
    }

    depthFirstTraversal() {
        if (this.left) {
            this.left.depthFirstTraversal();
        }
        console.log(`Depth=${this.depth}, Value=${this.value}`);
        if (this.right) {
            this.right.depthFirstTraversal();
        }
    }
};

export default BinaryTree;
