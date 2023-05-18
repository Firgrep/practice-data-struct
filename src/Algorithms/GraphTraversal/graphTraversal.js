"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.breadthFirstTraversal = exports.depthFirstTraversal = void 0;
const Queue_1 = __importDefault(require("../../DataStructures/Queue/Queue"));
/**
 * Traverses a Graph by depth first. Optional callback.
 * @param start | Vertex instance required.
 * @param callback | Optional callback function to be called with the current vertex as argument.
 * @param visitedVertices
 */
const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
    callback ? callback(start) : null;
    start.edges.forEach((edge) => {
        const neighbor = edge.end;
        if (!visitedVertices.includes(neighbor)) {
            visitedVertices.push(neighbor);
            (0, exports.depthFirstTraversal)(neighbor, callback, visitedVertices);
        }
    });
};
exports.depthFirstTraversal = depthFirstTraversal;
/**
 * Traverses a Graph by breadth first. Optional callback.
 * @param start | Vertex instance required.
 * @param callback | Optional callback function to be called with the current vertex as argument.
 */
const breadthFirstTraversal = (start, callback) => {
    const visitedVertices = [start];
    const visitQueue = new Queue_1.default();
    visitQueue.enqueue(start);
    while (!visitQueue.isEmpty()) {
        const current = visitQueue.dequeue();
        if (callback) {
            callback(current);
        }
        current.edges.forEach((edge) => {
            const neighbor = edge.end;
            if (!visitedVertices.includes(neighbor)) {
                visitedVertices.push(neighbor);
                visitQueue.enqueue(neighbor);
            }
        });
    }
    ;
};
exports.breadthFirstTraversal = breadthFirstTraversal;
