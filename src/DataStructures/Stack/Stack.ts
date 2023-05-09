import DoublyLinkedList from '../DoublyLinkedList/DoublyLinkedList';


class Stack {
    stack: DoublyLinkedList;
    maxSize: number;
    size: number;

    constructor(maxSize = Infinity) {
        this.stack = new DoublyLinkedList();
        this.maxSize = maxSize;
        this.size = 0;
    }

    hasRoom() {
        return this.size < this.maxSize;
    }
    
    isEmpty() {
        return this.size === 0;
    }

    push(value: any) {
        if (this.hasRoom()) {
            this.stack.addToHead(value);
            this.size++;
        } else {
            throw new Error('Stack is full');
        }
    }

    pop() {
        if (!this.isEmpty()) {
            const value = this.stack.removeHead();
            this.size--;
            return value;
        } else {
            throw new Error('Stack is empty');
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.stack.head?.data;
        } else {
            return null;
        }
    }
}

export default Stack;
