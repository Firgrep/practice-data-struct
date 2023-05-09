"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
    Node.prototype.setNextNode = function (node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        }
        else {
            throw new Error('Next node must be a member of the Node class.');
        }
    };
    Node.prototype.getNextNode = function () {
        return this.next;
    };
    Node.prototype.setPreviousNode = function (node) {
        if (node instanceof Node || node === null) {
            this.previous = node;
        }
        else {
            throw new Error('Previous node must be a member of the Node class');
        }
    };
    Node.prototype.getPreviousNode = function () {
        return this.previous;
    };
    return Node;
}());
exports.default = Node;
