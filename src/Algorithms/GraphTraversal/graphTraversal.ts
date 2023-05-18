import Vertex from "../../DataStructures/Graph/Vertex";
import Queue from "../../DataStructures/Queue/Queue";
import Edge from "../../DataStructures/Graph/Edge";

type callbackGraphTraversal = ((arg1: Vertex) => void) | undefined;

/**
 * Traverses a Graph by depth first. Optional callback.
 * @param start | Vertex instance required.
 * @param callback | Optional callback function to be called with the current vertex as argument. 
 * @param visitedVertices 
 */
export const depthFirstTraversal = (start: Vertex, callback?: callbackGraphTraversal, visitedVertices: any[] = [start]) => {
    callback ? callback(start) : null;

    start.edges.forEach((edge) => {
        const neighbor = edge.end;

        if (!visitedVertices.includes(neighbor)) {
            visitedVertices.push(neighbor);
            depthFirstTraversal(neighbor, callback, visitedVertices);
        }
    });
};

/**
 * Traverses a Graph by breadth first. Optional callback.
 * @param start | Vertex instance required.
 * @param callback | Optional callback function to be called with the current vertex as argument.
 */
export const breadthFirstTraversal = (start: Vertex, callback?: callbackGraphTraversal) => {
    const visitedVertices = [start];
    const visitQueue = new Queue();
    visitQueue.enqueue(start);
    
    while(!visitQueue.isEmpty()) {
        const current = visitQueue.dequeue();
        if (callback) {
            callback(current);
        }

        current.edges.forEach((edge: Edge) => {
            const neighbor = edge.end;

            if (!visitedVertices.includes(neighbor)) {
                visitedVertices.push(neighbor);
                visitQueue.enqueue(neighbor);
            }
        });
    };
};
