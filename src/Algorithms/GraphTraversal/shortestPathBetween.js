"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortestPathBetween = void 0;
const dijkstras_1 = require("./dijkstras");
const shortestPathBetween = (graph, startingVertex, targetVertex) => {
    const { distances, previous } = (0, dijkstras_1.dijkstras)(graph, startingVertex);
    const distance = distances[targetVertex.data];
    const path = [];
    let vertex = targetVertex;
    while (vertex !== null && vertex !== undefined) {
        path.unshift(vertex);
        if (typeof vertex === 'number' || vertex === null) {
            break;
        }
        vertex = previous[vertex.data];
    }
    return { distance: distance, path };
};
exports.shortestPathBetween = shortestPathBetween;
