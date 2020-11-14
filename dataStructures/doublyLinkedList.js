class Node{
  constructor(val){
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val){
    let newNode = new Node(val)

    if(this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
    return this
  }

  pop(){
    if(!this.head) return undefined
    let currTail = this.tail

    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else{
      this.tail = currTail.prev
      this.tail.next = null
      currTail.prev = null
    }

    this.length--
    return currTail
  }

  shift(){
    if(this.length === 0) return undefined

    let oldHead = this.head

    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else{
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }

    this.length--
    return oldHead
  }

  unshift(val){
    let newNode = new Node(val)
    if(this.length === 0){
      this.head =  newNode
      this.tail = newNode
    } else{
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index){
    if(index < 0 || index >= this.length) return null

    if(index <= this.length/2){
      let current = this.head
      let count = 0;
      while(count !== index){
        current = current.next
        count++
      }
      return current
    } else{
      let count = this.length - 1
      let current = this.tail
      while(count !== index){
        current = current.prev
        count--
      }
      return current
    }
  }

  set(index, val){
    let curr = this.get(index)

    if(curr){
      curr.val = val
      return true
    } else {
      return false
    }
  }

  insert(index,val){
    let newNode = new Node(val)
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next

    if(index < 0 || index >= this.length) return false
    if(index === 0) return this.unshift(val)
    if(index === this.length) return this.push(val)

    //item before it because we are inserting in there

    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode

    this.length++
    return true
  }

  remove(index){
    if(index < 0 || index >= this.length) return undefined
    if(index === 9) return this.shift()
    if(index === this.length - 1) return this.pop()

    let itemToBeRemoved = this.get(index)
    itemToBeRemoved.prev.next = itemToBeRemoved.next
    itemToBeRemoved.next.prev = itemToBeRemoved.prev
    itemToBeRemoved.next = null;
    itemToBeRemoved.prev = null;

    this.length--;
    return itemToBeRemoved;
  }

}

var list = new DoublyLinkedList()
console.log(list.push(100))
console.log(list.push(90))
//console.log(list.pop())
// console.log(list.get(1))
// console.log(list.set(1,"NEWNODE"))
// console.log(list.set(10,"NEWNODE"))
console.log(list.insert(1, 'winner'))
console.log(list.insert(0, 'win'))
console.log(list.insert(4, 'winz'))

