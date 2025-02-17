const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  length = 0;
  first = null;

  getUnderlyingList() {
return this.first
  }

  enqueue(value) {
if (this.length === 0){
  this.first = new ListNode(value)
} else {
  let f = this.first
while (f.next){
  f = f.next
}

  f.next = new ListNode(value)
}

this.length ++
  }

  dequeue() {
let res = this.first.value
this.first = this.first.next
return res
  }
}

module.exports = {
  Queue
};
