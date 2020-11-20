class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  push(val){
      var newNode = new Node(val);
      if(!this.first){
          this.first = newNode;
          this.last = newNode;
      } else {
          var temp = this.first;
          this.first = newNode;
          this.first.next = temp;
      }
      return ++this.size;
  }

  pop(){
    if(!this.first) return null
    let firstVal = this.first
    if(this.first === this.last){
      this.last = null
    }
    this.first = this.first.next

    this.size--
    return firstVal

  }
}

let list = new Stack()

list.push(10)
list.push(20)
list.push(30)
list.pop()
console.log(list)

// BIG 0

// insertion - 0(1)
// removal - 0(1)
// searching - 0(N)
// access - 0(N)

//Stacks - LIFO
//callstack, undo/redo, routing
//not built in DS in JS
