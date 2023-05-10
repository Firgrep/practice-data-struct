"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TreeNode node to be used in a Trees data structure.
 */
class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    /**
     * Adds TreeNode as child to parent. If argument is not a TreeNode,
     * a new TreeNode will be made with function argument as data.
     * @param child Any | TreeNode or any data
     */
    addChild(child) {
        if (child instanceof TreeNode) {
            this.children.push(child);
        }
        else {
            this.children.push(new TreeNode(child));
        }
    }
    /**
     * Removes child TreeNode either by reference to TreeNode or by data value.
     * @param childToRemove  Any | TreeNode or any data
     */
    removeChild(childToRemove) {
        const length = this.children.length;
        this.children = this.children.filter(child => {
            return childToRemove instanceof TreeNode
                ? child !== childToRemove
                : child.data !== childToRemove;
        });
        if (length === this.children.length) {
            this.children.forEach(child => child.removeChild(childToRemove));
        }
    }
    /**
     * Recursive print method that logs to console the tree and its children.
     * Each child/parent one level down is indicated by "--".
     * @param level number | Input is automated based on levels of recursion.
     */
    print(level = 0) {
        let result = '';
        for (let i = 0; i < level; i++) {
            result += '-- ';
        }
        console.log(`${result}${this.data}`);
        this.children.forEach(child => child.print(level + 1));
    }
    /**
     * Recursive print method that logs to console the tree and its children
     * by depth traversal, or "flattens" the tree but keeps the structure.
     */
    depthFirstTraversal() {
        console.log(this.data);
        this.children.forEach(child => child.depthFirstTraversal());
    }
    /**
     * Print method that logs to the console the tree and its children
     * by breadth traversal, or "flattens" the tree but alters the structure to
     * show, in the form: root first, then first parent and its chidren, then
     * second parent and its children, etc.
     */
    breadthFirstTraversal() {
        let queue = [this];
        while (queue.length > 0) {
            const current = queue.shift();
            if (current !== undefined) {
                console.log(current.data);
                queue = [...queue, ...current.children];
            }
        }
    }
}
;
exports.default = TreeNode;
