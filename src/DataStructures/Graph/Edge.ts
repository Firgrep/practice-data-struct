import Vertex from "./Vertex";

/**
 * Edge class to create edges in a graph data structure. Supports weighted graphs.
 */
class Edge {
    start: Vertex;
    end: Vertex; 
    weight: number | null;

    constructor(start: Vertex, end: Vertex, weight?: number | null) {
        this.start = start;
        this.end = end;
        this.weight = weight || null;
    }
}
  
export default Edge;
