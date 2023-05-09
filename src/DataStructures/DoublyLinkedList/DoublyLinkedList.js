"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("../Node/Node");
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
    }
    DoublyLinkedList.prototype.addToHead = function (data) {
        var newHead = new Node_1.default(data);
        var currentHead = this.head;
        if (currentHead) {
            currentHead.setPreviousNode(newHead);
            newHead.setNextNode(currentHead);
        }
        this.head = newHead;
        if (!this.tail) {
            this.tail = newHead;
        }
    };
    DoublyLinkedList.prototype.addToTail = function (data) {
        var newTail = new Node_1.default(data);
        var currentTail = this.tail;
        if (currentTail) {
            currentTail.setNextNode(newTail);
            newTail.setPreviousNode(currentTail);
        }
        this.tail = newTail;
        if (!this.head) {
            this.head = newTail;
        }
    };
    DoublyLinkedList.prototype.removeHead = function () {
        var removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        if (this.head) {
            this.head.setPreviousNode(null);
        }
        if (removedHead === this.tail) {
            this.removeTail();
        }
        return removedHead.data;
    };
    DoublyLinkedList.prototype.removeTail = function () {
        var removedTail = this.tail;
        if (!removedTail) {
            return;
        }
        this.tail = removedTail.getPreviousNode();
        if (this.tail) {
            this.tail.setNextNode(null);
        }
        if (removedTail === this.head) {
            this.removeHead();
        }
        return removedTail.data;
    };
    DoublyLinkedList.prototype.removeByData = function (data) {
        var nodeToRemove;
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                nodeToRemove = currentNode;
                break;
            }
            currentNode = currentNode.getNextNode();
        }
        if (!nodeToRemove) {
            return null;
        }
        if (nodeToRemove === this.head) {
            this.removeHead();
        }
        else if (nodeToRemove === this.tail) {
            this.removeTail();
        }
        else {
            var nextNode = nodeToRemove.getNextNode();
            var previousNode = nodeToRemove.getPreviousNode();
            nextNode.setPreviousNode(previousNode);
            previousNode.setNextNode(nextNode);
        }
        return nodeToRemove;
    };
    DoublyLinkedList.prototype.printList = function () {
        var currentNode = this.head;
        var output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    };
    return DoublyLinkedList;
}());
exports.default = DoublyLinkedList;
