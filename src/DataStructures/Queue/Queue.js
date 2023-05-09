"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedList_1 = require("../DoublyLinkedList/DoublyLinkedList");
var Queue = /** @class */ (function () {
    function Queue(maxSize) {
        if (maxSize === void 0) { maxSize = Infinity; }
        this.queue = new DoublyLinkedList_1.default();
        this.maxSize = maxSize;
        this.size = 0;
    }
    Queue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    Queue.prototype.hasRoom = function () {
        return this.size < this.maxSize;
    };
    Queue.prototype.enqueue = function (data) {
        if (this.hasRoom()) {
            this.queue.addToTail(data);
            this.size++;
        }
        else {
            throw new Error("Queue is full!");
        }
    };
    Queue.prototype.dequeue = function () {
        if (!this.isEmpty()) {
            var data = this.queue.removeHead();
            this.size--;
            return data;
        }
        else {
            throw new Error("Queue is empty!");
        }
    };
    return Queue;
}());
exports.default = Queue;
