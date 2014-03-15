/*
* LinkedList helper
* 
* - easy way to create
* - way to insert/remove
* - traverse
* - emit-like traverse
* - an abstraction of the `node`
*/

/*
* Node holds
*   For a watcher, a single watcher
*   For a listener, a single listener
*/
var Node = function(scope) {
  this.prev   = null;     // Pointer to the previous node
  this.next   = null;     // Pointer to the next node
}

/*
* NodeGroup holds
*   Holds references to _all_ the heads/tails
*   that a scope points to for watchers/listener
*/
var NodeGroup = function() {
  this.scope        = scope;  // scope for the node
  this.listHeads    = {};     // The first node in group including subgroups
  this.currentTails = {};     // The last node in the group, not including subgroups
  this.listTails    = {};     // The last node in group, including subgroups
}

// tail.$parent.nodeGroup.listTails[namespace] === tail.$parent.nodeGroup.currentTails[namespace]

var LinkedList = function() {
  this.head = this.tail = null;
}

LinkedList.prototype.insert = function(scope) {
  scope.nodeGroup = new NodeGroup(scope);
  var node = new Node(scope);
  // Insert code
}
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