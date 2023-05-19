import { dijkstras } from "./dijkstras";
import Graph from "../../DataStructures/Graph/Graph";
import Vertex from "../../DataStructures/Graph/Vertex";


export const shortestPathBetween = (graph: Graph, startingVertex: Vertex, targetVertex: Vertex) => {

    const { distances, previous } = dijkstras(graph, startingVertex);
    const distance = distances[targetVertex.data];
    const path = []
    let vertex: Vertex | null = targetVertex;

    while(vertex !== null && vertex !== undefined) {
        path.unshift(vertex);
        if (typeof vertex === 'number' || vertex === null) {
          break;
        }
        vertex = previous[vertex.data] as Vertex | null;
    }

    return {distance: distance, path}
};