"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mergeSort_1 = __importDefault(require("../../Algorithms/MergeSort/mergeSort"));
const inputArr = [3, 5, 2, 90, 4, 7, 6, 135, 3, 5, 6, 7, 76, 34, 64, 42, 85, 23, 72, 38];
console.log((0, mergeSort_1.default)(inputArr));
