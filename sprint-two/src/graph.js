// Instantiate a new graph
var Graph = function(nodes) {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {edge: []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //iterate over nodes
  for (var key in this.nodes) {
    if (Number(key) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] !== undefined) {
    for (var i = 0; i < this.nodes[fromNode].edge.length; i++) {
      if (Number(this.nodes[fromNode].edge[i]) === toNode) {
        return true;
      }
    }
  }
  if (this.nodes[toNode] !== undefined) {
    for (var j = 0; j < this.nodes[toNode].edge.length; j++) {
      if (Number(this.nodes[toNode].edge[j]) === fromNode) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // 4 6
  for (var key in this.nodes) {
    if (Number(key) === fromNode) {
      (this.nodes[key].edge).push(toNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.nodes[fromNode].edge.indexOf(toNode);
  this.nodes[fromNode].edge.splice(index, 1);
  var indexTwo = this.nodes[toNode].edge.indexOf(fromNode);
  this.nodes[toNode].edge.splice(indexTwo, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(Number(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1)
 contains: O(n)
 removeNode: O(n)
 hasEdge: O(n)
 addEdge: O(n)
 removeEdge: O(n)
 forEachNode: O(n)
 */


