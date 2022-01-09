// class Graph {

class Graph {
    constructor() {
        this.adjacency = {};
    }

    addVertex(vertex) {
        if (this.adjacency[vertex]) throw Error("already exist")
        this.adjacency[vertex] = [];
        return true;
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacency[vertex2] || !this.adjacency[vertex1]) throw Error("node not valid")
        this.adjacency[vertex1].push(vertex2);
        this.adjacency[vertex2].push(vertex1);
        return this.adjacency;
    }

    removeEdge(node1, node2) {
        const index1 = this.adjacency[node1].indexOf(node2)
        const index2 = this.adjacency[node2].indexOf(node1)
        if (index1 > -1 && index2 > -1) {
            this.adjacency[node1].splice(index1, 1)
            this.adjacency[node2].splice(index2, 1)
        }
    }
    // removeAdjacent(node) {
    // }

    // removeVertex(value) {
    //     const current = this.nodes.get(value);
    //     if (current) {
    //         for (const node of this.nodes.values()) {
    //             node.removeAdjacent(current);
    //         }
    //     }
    //     return this.nodes.delete(value);
    // }
}


let graph = new Graph();
graph.addVertex("a")
graph.addVertex("b")
graph.addVertex("c")


graph.addEdge("a", "b")
graph.addEdge("a", "c")
graph.removeEdge("a", "b")
console.log(graph);
