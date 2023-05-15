"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MinHeap_1 = __importDefault(require("../../DataStructures/MinHeap/MinHeap"));
// instantiate a MinHeap class
const minHeap = new MinHeap_1.default();
// populate minHeap with descending numbers from 10001 to 1
console.log('Adding');
for (let i = 10000; i >= 1; i--) {
    minHeap.add(i);
}
// remove the minimum value from heap
console.log('Removing');
console.log('Minimum value = ' + minHeap.popMin());
