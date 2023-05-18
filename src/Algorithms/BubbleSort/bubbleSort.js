"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swap_1 = __importDefault(require("../../util/swap"));
const bubbleSort = (input) => {
    let swapCount = 0;
    let swapping = true;
    while (swapping) {
        swapping = false;
        for (let i = 0; i < input.length - 1; i++) {
            if (input[i] > input[i + 1]) {
                (0, swap_1.default)(input, i, i + 1);
                swapCount++;
                swapping = true;
            }
        }
    }
    console.log(`Swapped ${swapCount} times`);
    return input;
};
exports.default = bubbleSort;
