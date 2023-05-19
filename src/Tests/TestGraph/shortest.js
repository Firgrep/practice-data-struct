"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Graph_1 = __importDefault(require("../../DataStructures/Graph/Graph"));
const shortestPathBetween_1 = require("../../Algorithms/GraphTraversal/shortestPathBetween");
const testGraph = new Graph_1.default(true, true);
const a = testGraph.addVertex('A');
const b = testGraph.addVertex('B');
const c = testGraph.addVertex('C');
const d = testGraph.addVertex('D');
const e = testGraph.addVertex('E');
const f = testGraph.addVertex('F');
const g = testGraph.addVertex('G');
testGraph.addEdge(a, c, 100);
testGraph.addEdge(a, b, 3);
testGraph.addEdge(a, d, 4);
testGraph.addEdge(d, c, 3);
testGraph.addEdge(d, e, 8);
testGraph.addEdge(e, b, -2);
testGraph.addEdge(e, f, 10);
testGraph.addEdge(b, g, 9);
testGraph.addEdge(e, g, -50);
const aa = testGraph.getVertexByValue('A');
const gg = testGraph.getVertexByValue('G');
if (aa && gg) {
    const results = (0, shortestPathBetween_1.shortestPathBetween)(testGraph, aa, gg);
    console.log(results);
}
