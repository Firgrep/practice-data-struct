"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Edge class to create edges in a graph data structure. Supports weighted graphs.
 */
class Edge {
    constructor(start, end, weight) {
        this.start = start;
        this.end = end;
        this.weight = weight || null;
    }
}
exports.default = Edge;
