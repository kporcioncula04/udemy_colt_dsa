class PriorityQueue{
  constructor(){
    this.values = [];
  }
  enqueue(val, priority){
    this.values.push({val,priority});
    this.sort()
  }
  dequeue(){
    return this.values.shift();
  }
  sort(){
    this.values.sort((a,b) => a.priority - b.priority)
  }
}

let PQ = new PriorityQueue()
PQ.enqueue('b', 3)
PQ.enqueue('c', 5)
PQ.enqueue('d', 2)
PQ.enqueue('q', 20)
console.log(PQ )
