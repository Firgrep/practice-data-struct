"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("../Node/Node");
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
    }
    SinglyLinkedList.prototype.addToHead = function (data) {
        var newHead = new Node_1.default(data);
        var currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    };
    SinglyLinkedList.prototype.addToTail = function (data) {
        var newNode = new Node_1.default(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var tail = null;
        var current = this.head;
        while (current) {
            tail = current;
            current = current.getNextNode();
        }
        if (tail) {
            tail.setNextNode(newNode);
        }
        // let tail = this.head;
        // if (!tail) {
        //     this.head = new Node(data);
        // } else {
        //     while (tail.getNextNode() !== null) {
        //         tail = tail.getNextNode();
        //     }
        // tail.setNextNode(new Node(data));
        // }
    };
    SinglyLinkedList.prototype.removeHead = function () {
        var removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
    };
    SinglyLinkedList.prototype.printList = function () {
        var currentNode = this.head;
        var output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    };
    return SinglyLinkedList;
}());
exports.default = SinglyLinkedList;
