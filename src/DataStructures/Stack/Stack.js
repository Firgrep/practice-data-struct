"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DoublyLinkedList_1 = __importDefault(require("../DoublyLinkedList/DoublyLinkedList"));
class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new DoublyLinkedList_1.default();
        this.maxSize = maxSize;
        this.size = 0;
    }
    hasRoom() {
        return this.size < this.maxSize;
    }
    isEmpty() {
        return this.size === 0;
    }
    push(value) {
        if (this.hasRoom()) {
            this.stack.addToHead(value);
            this.size++;
        }
        else {
            throw new Error('Stack is full');
        }
    }
    pop() {
        if (!this.isEmpty()) {
            const value = this.stack.removeHead();
            this.size--;
            return value;
        }
        else {
            throw new Error('Stack is empty');
        }
    }
    peek() {
        var _a;
        if (!this.isEmpty()) {
            return (_a = this.stack.head) === null || _a === void 0 ? void 0 : _a.data;
        }
        else {
            return null;
        }
    }
}
exports.default = Stack;
