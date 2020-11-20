class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  enqueue(val){
    let newNode = new Node(val)

    if(!this.first){
      this.first = newNode
      this.last = newNode
    } else{
      this.last.next = newNode
      this.last = newNode
    }

    return this.size++
  }

  dequeue(){

    //remove the beginning

    if(!this.first) return null
    let temp = this.first
    if(this.first === this.last){
      this.last = null
    }
    this.first = this.first.next

    this.size--
    return temp.value
  }
}

let queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.dequeue()
queue.dequeue()
console.log(queue)


//BIG O
// insertion - 0(1)
// removal - 0(1)
// searching - 0(N)
// access - 0(N)

//queues - FIFO
//keep track of an order. print queue
