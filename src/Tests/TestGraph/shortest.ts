import Graph from "../../DataStructures/Graph/Graph";
import { shortestPathBetween } from "../../Algorithms/GraphTraversal/shortestPathBetween";


const testGraph = new Graph(true, true);
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
    const results = shortestPathBetween(testGraph, aa, gg);
    console.log(results);
}
