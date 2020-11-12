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

  unshift(val){
    let newNode = new Node(val)

    if(!this.head){
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length += 1;
    return this
  }

  //manually counting
  get(index){
    let counter = 0;
    let currNode = this.head
    if(index < 0 || index >= this.length) return null

    while(counter !== index){
      currNode = currNode.next;
      counter++;
    }
    return currNode
  }

  set(val,index){
    let node = this.get(index)

    if(node) {
      node.val = val
      return true
    }
    return false
  }

  insert(index,val){
    let newNode = new Node(val)
    if(index < 0 || index > this.length) return false
    if(index === this.length) return this.push(val)
    if(index === 0) return this.unshift(val)

    let prevNode = this.get(index - 1)
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++
    return true
  }

  remove(index){
    if(index < 0 || index > this.length) return undefined
    if(index === this.length - 1) return this.pop()
    if(index === 0) return this.shift()

    let prevNode = this.get(index - 1)
    let removed = prevNode.next;
    prevNode.next = removed.next
    this.length--
    return removed;

  }

  reverse(){

      let node = this.head
      this.head = this.tail
      this.tail = node

      let next;
      let prev = null;

      for(let i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
  }

  print(){
    let arr = [];
    let current = this.head
    while(current){
       arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

var list = new SinglyLinkedList()
list.push('Hello')
list.push('Goodbye')
list.push('!')


// console.log(list)
// console.log(list.head)
// console.log(list.tail)
// console.log(list.pop())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.push(200))
// console.log(list.unshift(10))
// console.log(list.get(0))
// console.log(list.set(2,'!!!'))
//console.log(list)
