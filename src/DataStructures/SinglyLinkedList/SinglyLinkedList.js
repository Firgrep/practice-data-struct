"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("../Node/Node"));
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    addToHead(data) {
        const newHead = new Node_1.default(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }
    addToTail(data) {
        const newNode = new Node_1.default(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let tail = null;
        let current = this.head;
        while (current) {
            tail = current;
            current = current.getNextNode();
        }
        if (tail) {
            tail.setNextNode(newNode);
        }
    }
    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }
    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}
exports.default = SinglyLinkedList;
