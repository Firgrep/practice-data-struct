/**
 * Modified Min-Heap whose .add() method additionally adds a priority number.
 */
class PriorityQueue {
    heap: any[];
    size: number;

    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    add({vertex, priority}: any) {
        this.heap.push({vertex, priority});
        this.size++;
        this.bubbleUp();
    }

    isEmpty() {
        return this.size === 0;
    }

    popMin() {
        if (this.size === 0) {
            return null 
        }
        const min = this.heap[1];
        this.heap[1] = this.heap[this.size];
        this.size--;
        this.heap.pop();
        this.heapify();
        return min;
    }

    bubbleUp() {
        let current = this.size;
        while (current > 1 && this.heap[getParent(current)].priority > this.heap[current].priority) {
            this.swap(current, getParent(current));
            current = getParent(current);
        }
    }

    heapify() {
        let current = 1;
        let leftChild = getLeft(current);
        let rightChild = getRight(current);
        // Check that there is something to swap (only need to check the left if both exist)
        while (this.canSwap(current, leftChild, rightChild)){

            // Only compare left & right if they both exist
            if (this.exists(leftChild) && this.exists(rightChild)) {

                // Make sure to swap with the smaller of the two children
                if (this.heap[leftChild].priority < this.heap[rightChild].priority) {
                    this.swap(current, leftChild);
                    current = leftChild;
                } else {
                    this.swap(current, rightChild);
                    current = rightChild;
                }

            } else {
                // If only one child exist, always swap with the left
                this.swap(current, leftChild);
                current = leftChild;
            }
            
            leftChild = getLeft(current);
            rightChild = getRight(current);
        }
    }

    swap(a: number, b: number) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    exists(index: number) {
        return index <= this.size;
    }

    canSwap(current: number, leftChild: number, rightChild: number) {
        // Check that one of the possible swap conditions exists
        return (
        this.exists(leftChild) && this.heap[current].priority > this.heap[leftChild].priority
        || this.exists(rightChild) && this.heap[current].priority > this.heap[rightChild].priority
        );
    }
}

const getParent = (current: number) => {
    return Math.floor((current / 2));
}

const getLeft = (current: number) => {
    return current * 2;
}

const getRight = (current: number) => {
    return current * 2 + 1;
}

export default PriorityQueue;
