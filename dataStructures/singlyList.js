class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val){
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length += 1
    return this;
  }

  //pop removes the last node if there is one
  pop(){
    let currNode = this.head;
    let newTail  = currNode

    if(!currNode) return undefined

    while(currNode.next){
      newTail = currNode
      currNode = currNode.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--

    if(this.length === 0){
      this.head = null
      this.tail = null
    }
    return currNode
  }

  shift(){
    let currNode = this.head
    if(!currNode) return undefined
    this.head = currNode.next
    this.length -= 1;

    if(this.length === 0){
      this.tail = null
    }
    return currNode
  }
}

var list = new SinglyLinkedList()
list.push('Hello')
list.push('Goodbye')
list.push('!')


//console.log(list)
// console.log(list.head)
// console.log(list.tail)
//console.log(list.pop())
console.log(list.shift())
console.log(list.shift())
console.log(list.shift())
console.log(list.shift())
console.log(list.push(200))
