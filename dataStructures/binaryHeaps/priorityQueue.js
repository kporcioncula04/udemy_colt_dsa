class Node{
  constructor(val,priority){
    this.val = val
    this.priotity = priority
  }
}

class PriorityQueue{
  constructor(){
    this.values = []
  }

  enqueue(val, priority) {
    let newNode = new Node(val,priority)
    this.values.push(newNode)
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1
    let element = this.values[index]

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]

      if (element.priority  <= parent.priority) break
      this.values[parentIndex] = element
      this.values[index] = parent
      index = parentIndex
    }
  }

  dequeue(){
    let max = this.values[0]
    let lastVal = this.values.pop()

    if(this.values.length > 0){
      this.values[0] = lastVal;
      this.sinkDown()
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length
    const element = this.values[0]


    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild.priority > element.priotity) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if ((swap === null && rightChild.priotity > element.priotity) || (swap !== null && rightChild.priotity > leftChildIdx.priotity)) {
          swap  = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

let priorityQueue = new PriorityQueue()

priorityQueue.enqueue('cold', 4)
priorityQueue.enqueue('sick', 3)
priorityQueue.enqueue('gun shot', 1)
priorityQueue.enqueue('broken arm', 2)

priorityQueue.dequeue()
priorityQueue.dequeue()
priorityQueue.dequeue()

console.log(priorityQueue)
