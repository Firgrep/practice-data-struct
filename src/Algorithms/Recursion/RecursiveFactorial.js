"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveFactorial = void 0;
const recursiveFactorial = (n) => {
    if (n === 0) {
        return 1;
    }
    if (n > 0) {
        console.log(`Execution context: ${n}`);
        return (0, exports.recursiveFactorial)(n - 1) * n;
    }
    return undefined;
};
exports.recursiveFactorial = recursiveFactorial;
