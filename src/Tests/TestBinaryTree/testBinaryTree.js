"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTree_1 = __importDefault(require("../../DataStructures/BinaryTree/BinaryTree"));
const randomize = () => Math.floor(Math.random() * 40);
const bt = new BinaryTree_1.default(15);
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(randomize());
    bt.insert(numbers[i]);
}
console.log(`Inserted [ ${numbers} ] to binary tree`);
console.log('Depth First Traversal');
bt.depthFirstTraversal();
