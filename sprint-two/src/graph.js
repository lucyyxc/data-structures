// Instantiate a new graph
var Graph = function() {

  // this = {
  //   4: {edge: [6, 3, 5]},
  //   6: {edge: [4]},
  //   3: {edge: [4, 2]},
  // }
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //console.log('node value:', node);
  this[node] = {edge : []};
  //console.log(this);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //iterate over nodes
  for (var key in this) {
    if (Number(key) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode] !== undefined) {
    for (var i = 0; i < this[fromNode].edge.length; i++) {
      if (Number(this[fromNode].edge[i]) === toNode) {
        return true;
      }
    }
  }
  if (this[toNode] !== undefined) {
    for (var j = 0; j < this[toNode].edge.length; j++) {
      if (Number(this[toNode].edge[j]) === fromNode) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // 4 6
  for (var key in this) {
    console.log(key);
    if (Number(key) === fromNode) {
      console.log('FROMNODE', fromNode, toNode);
      console.log(this[key].edge);
      (this[key].edge).push(toNode);
    }
  }
  console.log('result', this[fromNode].edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this[fromNode].edge.indexOf(toNode);
  this[fromNode].edge.splice(index, 1);
  var indexTwo = this[toNode].edge.indexOf(fromNode);
  this[toNode].edge.splice(indexTwo, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {


};

/*
 * Complexity: What is the time complexity of the above functions?
 */


