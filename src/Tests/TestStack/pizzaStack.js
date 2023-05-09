"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = __importDefault(require("../../DataStructures/Stack/Stack"));
// 1. Define an empty pizza stack with a maxSize of 6
const pizzaStack = new Stack_1.default(6);
// 2. Add pizzas as they are ready until we fill up the stack
for (let i = 0; i < 6; i++) {
    pizzaStack.push(`Pizza #${i + 1}`);
}
// 3. Try pushing another pizza to check for overflow
try {
    pizzaStack.push("Pizza #7");
}
catch (e) {
    console.log(e);
}
// 4. Peek at the pizza on the top of stack and log its value
console.log("Taking a peek of the stack: ", pizzaStack.peek());
// 5. Deliver all the pizzas from the top of the stack down
const pizzaStackSize = pizzaStack.size;
for (let i = 0; i < pizzaStackSize; i++) {
    const popped = pizzaStack.pop();
    console.log(`${popped} delivered.`);
}
// 6. Try popping another pizza to check for empty stack
try {
    pizzaStack.pop();
}
catch (e) {
    console.log(e);
}
