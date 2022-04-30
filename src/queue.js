const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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

  constructor(){
    this.queue = [];
  }

  getUnderlyingList() {
    return this.queue[0];
  }

  enqueue(value) {
    this.queue = addItem(this.queue, value);

    function addItem(queue, value) {
      const queueItem = new ListNode(value);
      if (queue.length) {
        queue[queue.length-1].next = queueItem;
      }
      queue.push(queueItem);
      return queue;
    }
    return this.queue[this.queue.length-1].value;
  }

  dequeue() {
    const topItem = this.queue[0];
    this.queue = removeItem(this.queue);

    function removeItem(queue) {
      if(queue.length) {
        const top = queue[0];
        queue.shift();
        return queue;
      }
    }

    return topItem.value;
  }
}

module.exports = {
  Queue
};
