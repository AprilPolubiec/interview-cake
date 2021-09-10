/**
 * Given an undirected graph with maximum degree D, find a graph coloring
 * using at most D+1 colors.
 */

// Graphs are represented by an array of N node objects, 
// each with a label, a set of neighbors, and a color:
class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

const a = new GraphNode("a");
const b = new GraphNode("b");
const c = new GraphNode("c");

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

const graph = [a, b, c];
