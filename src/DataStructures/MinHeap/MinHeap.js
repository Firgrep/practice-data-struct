"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Minimal Heap that is a Binary Tree where the root node has the minimum key in the tree
 */
class MinHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }
    /**
     * Removes the minimal value and heapifies the heap to preserve its order.
     * @returns the minimal value
     */
    popMin() {
        if (this.size === 0) {
            return null;
        }
        // console.log(`\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`);
        const min = this.heap[1];
        this.heap[1] = this.heap[this.size];
        this.heap.pop();
        this.size--;
        // console.log(`.. Removed ${min} from heap`);
        // console.log('..',this.heap);
        this.heapify();
        return min;
    }
    /**
     * Adds value to the heap and then proceeds to bubble up the heap.
     * @param value | Any data
     */
    add(value) {
        // console.log(`.. adding ${value}`);
        this.heap.push(value);
        this.size++;
        this.bubbleUp();
        // console.log(`added ${value} to heap`, this.heap);
    }
    /**
     * Moves up in the heap and swaps items based on their value compared to its parent.
     */
    bubbleUp() {
        let current = this.size;
        let swapCount = 0;
        while (current > 1 && this.heap[getParent(current)] > this.heap[current]) {
            this.swap(current, getParent(current));
            current = getParent(current);
            swapCount++;
        }
        if (this.size == 10000) {
            console.log(`Heap of ${this.size} elements restored with ${swapCount} swaps`);
        }
    }
    /**
     * Moves down in the heap and swaps items based on their value compared to its children.
     */
    heapify() {
        let current = 1;
        let leftChild = getLeft(current);
        let rightChild = getRight(current);
        let swapCount = 0;
        while (this.canSwap(current, leftChild, rightChild)) {
            // Only compare left & right if they both exist
            if (this.exists(leftChild) && this.exists(rightChild)) {
                // Make sure to swap with the smaller of the two children
                if (this.heap[leftChild] < this.heap[rightChild]) {
                    this.swap(current, leftChild);
                    current = leftChild;
                    swapCount++;
                }
                else {
                    this.swap(current, rightChild);
                    current = rightChild;
                    swapCount++;
                }
            }
            else {
                // If only one child exist, always swap with the left
                this.swap(current, leftChild);
                current = leftChild;
                swapCount++;
            }
            leftChild = getLeft(current);
            rightChild = getRight(current);
        }
        if (this.size == 9999) {
            console.log(`Heap of ${this.size} elements restored with ${swapCount} swaps`);
        }
    }
    /**
     * Helper function to check if index exists as below or equal to the size of the heap.
     * @param index
     * @returns
     */
    exists(index) {
        return index <= this.size;
    }
    /**
     * Checks if possible swap conditions obtain between current, left Child and right Child.
     * @param current
     * @param leftChild
     * @param rightChild
     * @returns true or false
     */
    canSwap(current, leftChild, rightChild) {
        // Check that one of the possible swap conditions exists
        return (this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
            || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]);
    }
    /**
     * Swaps two heap positions based on their index.
     * @param a
     * @param b
     */
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}
const getParent = (current) => {
    return Math.floor((current / 2));
};
const getLeft = (current) => {
    return current * 2;
};
const getRight = (current) => {
    return current * 2 + 1;
};
exports.default = MinHeap;
