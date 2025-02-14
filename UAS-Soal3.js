
class MyQueue {
    constructor() {
      this.stack1 = [];
      this.stack2 = []; 
    }
  
    push(x) {
      this.stack1.push(x);
    }
  
    pop() {
      if (this.empty()) {
        return undefined; 
      }
      while (this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop());
      }
  
      const front = this.stack1.pop(); 
      
      
      while (this.stack2.length > 0) {
          this.stack1.push(this.stack2.pop())
      }
  
      return front;
    }
  
    peek() {
      if (this.empty()) {
        return undefined; 
      }
      while (this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop());
      }
  
      const front = this.stack1[this.stack1.length - 1]; 
      while (this.stack2.length > 0) {
          this.stack1.push(this.stack2.pop())
      }
  
      return front;
    }
  
    empty() {
      return this.stack1.length === 0;
    }
  }
  
  const queue = new MyQueue();
  queue.push(1);
  queue.push(2);
  console.log(queue.peek()); // Output: 1
  console.log(queue.pop()); // Output: 1
  console.log(queue.empty()); // Output: false
