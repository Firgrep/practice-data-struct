import Graph from "../../DataStructures/Graph/Graph";
import Vertex from "../../DataStructures/Graph/Vertex";
import PriorityQueue from "../../DataStructures/MinHeap/PriorityQueue";
import Edge from "../../DataStructures/Graph/Edge";

interface distances {
    [index: string | number]: number;
}

interface previous {
    [index: string | number]: number | null;
}

export const dijkstras = (graph: Graph, startingVertex: Vertex) => {
	const distances: distances = {};
	const previous: previous = {};
	const queue = new PriorityQueue();

	queue.add({ vertex: startingVertex, priority: 0 });

	graph.vertices.forEach((vertex) => {
		distances[vertex.data] = Infinity;
		previous[vertex.data] = null;
	});

	distances[startingVertex.data] = 0;

	while (!queue.isEmpty()) {
		const { vertex } = queue.popMin();

		vertex.edges.forEach((edge: Edge) => {
            if(!edge.weight) {
                throw new Error("Expected edge to have weight")
            }
			const alternate = edge.weight + distances[vertex.data];
			const neighborValue = edge.end.data;

			if (alternate < distances[neighborValue]) {
				distances[neighborValue] = alternate;
				previous[neighborValue] = vertex;

				queue.add({ vertex: edge.end, priority: distances[neighborValue] })
			}
		})
	}

	return { distances, previous };
};
