class MaxBinaryHeap{
  constructor(){
    this.values = [41,39,33,18,27,12]
  }

  insert(value){
    this.values.push(value)
    this.bubbleUp();
  }

  bubbleUp(){
    let index = this.values.length - 1
    let element = this.values[index]

    while(index > 0){
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]

      if(element <= parent)break
      this.values[parentIndex] = element
      this.values[index] = parent
      index = parentIndex
    }
  }
}

let maxHeap = new MaxBinaryHeap()

console.log(maxHeap)
//maxHeap.insert(19)
maxHeap.insert(55)
console.log(maxHeap)
