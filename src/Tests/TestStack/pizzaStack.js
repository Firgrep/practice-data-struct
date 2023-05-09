"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("../../DataStructures/Stack/Stack");
// 1. Define an empty pizza stack with a maxSize of 6
var pizzaStack = new Stack_1.default(6);
// 2. Add pizzas as they are ready until we fill up the stack
for (var i = 0; i < 6; i++) {
    pizzaStack.push("Pizza #".concat(i + 1));
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
var pizzaStackSize = pizzaStack.size;
for (var i = 0; i < pizzaStackSize; i++) {
    var popped = pizzaStack.pop();
    console.log("".concat(popped, " delivered."));
}
// 6. Try popping another pizza to check for empty stack
try {
    pizzaStack.pop();
}
catch (e) {
    console.log(e);
}
