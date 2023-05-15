"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vertex_1 = __importDefault(require("./Vertex"));
/**
 * Graph class for graph data structure. Default is bi-directional and non-weighted graph.
 */
class Graph {
    /**
     *
     * @param isWeighted set to true for weighted graph (default false)
     * @param isDirected set to true for directed graph (default false)
     */
    constructor(isWeighted = false, isDirected = false) {
        this.vertices = [];
        this.vertices = [];
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }
    /**
     * Adds new Vertex to the Graph with the argument data.
     * @param data | any data form
     * @returns Vertex | reference to the Vertex
     */
    addVertex(data) {
        const newVertex = new Vertex_1.default(data);
        this.vertices.push(newVertex);
        return newVertex;
    }
    /**
     * Removes Vertes from the Graph with a reference to the Vertex as argument.
     * @param Vertex | Reference to the Vertex.
     */
    removeVertex(vertex) {
        this.vertices = this.vertices.filter(v => v !== vertex);
    }
    /**
     * Adds edges between two Vertices. If Graph is directional, it will only make edge from first argument to second
     * (and not vice versa). If Graph is weighted, third argument is required.
     * @param vertexOne | Reference to Vertex
     * @param vertexTwo | Reference to Vertex
     * @param weight | Number | Adds weight to the edge.
     */
    addEdge(vertexOne, vertexTwo, weight) {
        const edgeWeight = this.isWeighted ? weight : null;
        if (vertexOne instanceof Vertex_1.default && vertexTwo instanceof Vertex_1.default) {
            vertexOne.addEdge(vertexTwo, edgeWeight);
            if (!this.isDirected) {
                vertexTwo.addEdge(vertexOne, edgeWeight);
            }
        }
        else {
            throw new Error('Expected Vertex arguments.');
        }
    }
    /**
     * Removes edges between two Vertices. If Graph is directional, it will only remove edge from first argument to second
     * (and not vice versa).
     * @param vertexOne | Reference to Vertex
     * @param vertexTwo | Reference to Vertex
     */
    removeEdge(vertexOne, vertexTwo) {
        if (vertexOne instanceof Vertex_1.default && vertexTwo instanceof Vertex_1.default) {
            vertexOne.removeEdge(vertexTwo);
            if (!this.isDirected) {
                vertexTwo.removeEdge(vertexOne);
            }
        }
        else {
            throw new Error('Expected Vertex arguments.');
        }
    }
    /**
     * Prints the graph to console/terminal.
     */
    print() {
        this.vertices.forEach(vertex => vertex.print());
    }
}
exports.default = Graph;
