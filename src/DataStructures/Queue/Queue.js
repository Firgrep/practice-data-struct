"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DoublyLinkedList_1 = __importDefault(require("../DoublyLinkedList/DoublyLinkedList"));
class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new DoublyLinkedList_1.default();
        this.maxSize = maxSize;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    hasRoom() {
        return this.size < this.maxSize;
    }
    enqueue(data) {
        if (this.hasRoom()) {
            this.queue.addToTail(data);
            this.size++;
        }
        else {
            throw new Error("Queue is full!");
        }
    }
    dequeue() {
        if (!this.isEmpty()) {
            const data = this.queue.removeHead();
            this.size--;
            return data;
        }
        else {
            throw new Error("Queue is empty!");
        }
    }
}
exports.default = Queue;
