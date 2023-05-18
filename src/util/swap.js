"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
};
exports.default = swap;
