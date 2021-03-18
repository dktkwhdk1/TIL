/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
  }
  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    return this.stack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return Math.min(...this.stack);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// test
const stack = new MinStack();

stack.push(-2);
console.log(stack); // MinStack { stack: [ -2 ] }

stack.push(0);
console.log(stack); // MinStack { stack: [ -2, 0 ] }

stack.push(-3);
console.log(stack); // MinStack { stack: [ -2, 0, -3 ] }

console.log(stack.getMin()); // return -3

stack.pop();
console.log(stack); // MinStack { stack: [ -2, 0 ] }

console.log(stack.top()); // return 0

console.log(stack.getMin()); // return -2
