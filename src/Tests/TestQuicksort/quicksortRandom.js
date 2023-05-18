"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quicksort_1 = __importDefault(require("../../Algorithms/Quicksort/quicksort"));
const randomize = () => Math.floor(Math.random() * 40);
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(randomize());
}
console.log('Before quicksort:', numbers);
const sorted = (0, quicksort_1.default)(numbers, true);
console.log('After  quicksort:', sorted);
