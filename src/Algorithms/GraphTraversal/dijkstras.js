"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dijkstras = void 0;
const PriorityQueue_1 = __importDefault(require("../../DataStructures/MinHeap/PriorityQueue"));
const dijkstras = (graph, startingVertex) => {
    const distances = {};
    const previous = {};
    const queue = new PriorityQueue_1.default();
    queue.add({ vertex: startingVertex, priority: 0 });
    graph.vertices.forEach((vertex) => {
        distances[vertex.data] = Infinity;
        previous[vertex.data] = null;
    });
    distances[startingVertex.data] = 0;
    while (!queue.isEmpty()) {
        const { vertex } = queue.popMin();
        vertex.edges.forEach((edge) => {
            if (!edge.weight) {
                throw new Error("Expected edge to have weight");
            }
            const alternate = edge.weight + distances[vertex.data];
            const neighborValue = edge.end.data;
            if (alternate < distances[neighborValue]) {
                distances[neighborValue] = alternate;
                previous[neighborValue] = vertex;
                queue.add({ vertex: edge.end, priority: distances[neighborValue] });
            }
        });
    }
    return { distances, previous };
};
exports.dijkstras = dijkstras;
