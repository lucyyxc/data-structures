var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    this.tail = Node(value);
    if (this.head === null) {
      this.head = Node(value);
    } else if (this.head.next === null) {
      this.head.next = this.tail;
    }
  };

  list.removeHead = function() {
    var removedHead = this.head;
    var after = this.head.next;
    delete this.head;
    this.head = after;
    return removedHead.value;
  };

  list.contains = function(target) {
    if (this.tail.value === target || this.head.value === target) {
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail - O(1)
 removeHead - O(1)
 contains - O(n)
 */
