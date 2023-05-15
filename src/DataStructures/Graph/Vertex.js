"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Edge_1 = __importDefault(require("./Edge"));
/**
 * Vertex class for graph data structure. Methods: addEdge(), removeEdge(), print()
 */
class Vertex {
    constructor(data) {
        this.edges = [];
        this.data = data;
        this.edges = [];
    }
    addEdge(vertex, weight) {
        if (vertex instanceof Vertex) {
            this.edges.push(new Edge_1.default(this, vertex, weight));
        }
        else {
            throw new Error('Edge start and end must both be Vertex');
        }
    }
    removeEdge(vertex) {
        this.edges = this.edges.filter(edge => edge.end !== vertex);
    }
    print() {
        const edgeList = this.edges.map(edge => edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data);
        const output = `${this.data} --> ${edgeList.join(', ')}`;
        console.log(output);
    }
}
exports.default = Vertex;
