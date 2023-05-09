"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedList_1 = require("../DoublyLinkedList/DoublyLinkedList");
var Stack = /** @class */ (function () {
    function Stack(maxSize) {
        if (maxSize === void 0) { maxSize = Infinity; }
        this.stack = new DoublyLinkedList_1.default();
        this.maxSize = maxSize;
        this.size = 0;
    }
    Stack.prototype.hasRoom = function () {
        return this.size < this.maxSize;
    };
    Stack.prototype.isEmpty = function () {
        return this.size === 0;
    };
    Stack.prototype.push = function (value) {
        if (this.hasRoom()) {
            this.stack.addToHead(value);
            this.size++;
        }
        else {
            throw new Error('Stack is full');
        }
    };
    Stack.prototype.pop = function () {
        if (!this.isEmpty()) {
            var value = this.stack.removeHead();
            this.size--;
            return value;
        }
        else {
            throw new Error('Stack is empty');
        }
    };
    Stack.prototype.peek = function () {
        var _a;
        if (!this.isEmpty()) {
            return (_a = this.stack.head) === null || _a === void 0 ? void 0 : _a.data;
        }
        else {
            return null;
        }
    };
    return Stack;
}());
exports.default = Stack;
