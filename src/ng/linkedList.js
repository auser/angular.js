/*
* LinkedList helper
* 
* - easy way to create
* - way to insert/remove
* - traverse
* - emit-like traverse
* - an abstraction of the `node`
*/
var Node = function(scope) {
  this.scope  = scope;    // scope for the node
  this.prev   = null;     // Pointer to the previous node
  this.next   = null;     // Pointer to the next node
}

var NodeGroup = function() {
  this.listHead = null;     // The first node in group including subgroups
  this.currentTail = null;  // The last node in the group, not including subgroups
  this.listTail = null;     // The last node in group, including subgroups
}

var LinkedList = function() {
  this.head = this.tail = null;
}

LinkedList.prototype.insert = function(node) {}
LinkedList.prototype.remove = function(scope, head, tail) {}
LinkedList.prototype.traverse = function(fn) {}


LinkedList.prototype._traverseForward = function() {}
LinkedList.prototype._traverseBackward = function(node) {}

LinkedList.prototype._findLastWatcherBefore = function(scope) {}
LinkedList.prototype._findFirstWatcherAfter = function(scope) {}

/*
$on: function(name, listener) {
  var node = new Node(listener)
  return this.nodeGroup('!' + name, node);
}

$watch: function(fn, fn2, region) {
  var node = new Node(...);
  return this.nodeGroup('$$watch' + (region || ''), node);
}
*/