"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DoublyLinkedList_1 = __importDefault(require("../DoublyLinkedList/DoublyLinkedList"));
const Node_1 = __importDefault(require("../Node/Node"));
/**
 * HashMap Data Structure that handles collisions through the separate chaining method.
 */
class HashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size)
            .fill(null)
            .map(() => new DoublyLinkedList_1.default());
    }
    /**
     * Creates a hash code to index the data in the HashMap
     * @param key any
     * @returns number | hashCode | Always lower than the length of the hashmap.
     */
    hash(key) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }
        return hashCode % this.hashmap.length;
    }
    /**
     * Assigns a new key-value pair to the HashMap
     * @param key any
     * @param value any
     * @returns
     */
    assign(key, value) {
        const arrayIndex = this.hash(key);
        const linkedList = this.hashmap[arrayIndex];
        console.log(`Storing ${value} at index ${arrayIndex}`);
        if (linkedList.head === null) {
            linkedList.addToHead({ key, value });
            return;
        }
        let current = linkedList.head;
        while (current) {
            if (current.data.key === key) {
                current.data = { key, value };
            }
            if (!current.next) {
                current.next = new Node_1.default({ key, value });
                break;
            }
            current = current.next;
        }
    }
    /**
     * Retrives value from Hash Map based on key.
     * @param key any
     * @returns any | Data Value
     */
    retrieve(key) {
        const arrayIndex = this.hash(key);
        let current = this.hashmap[arrayIndex].head;
        while (current) {
            if (current.data.key === key) {
                console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`);
                return current.data.value;
            }
            current = current.next;
        }
        return null;
    }
}
exports.default = HashMap;
