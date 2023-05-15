"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MinHeap_1 = __importDefault(require("../../DataStructures/MinHeap/MinHeap"));
// instantiate a MinHeap class
const minHeap = new MinHeap_1.default();
// helper function to return a random integer
function randomize() { return Math.floor(Math.random() * 40); }
// populate minHeap with random numbers
for (let i = 0; i < 6; i++) {
    minHeap.add(randomize());
}
// display the bubbled up numbers in the heap
console.log('Bubbled Up', minHeap.heap);
// remove the minimum value from heap
for (let i = 0; i < 6; i++) {
    minHeap.popMin();
    console.log('Heapified', minHeap.heap);
}
